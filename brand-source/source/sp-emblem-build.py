"""Steadfast Protocol — emblem and horizontal lockup generator (v2.2).

The emblem is constructed, not traced: lines, circles, fitted Bezier curves; left half mirrored; the rope is the
only asymmetric element. Re-running this script reproduces every file in the v2.2 set exactly.

Requires: python3, numpy, scipy, skia-pathops, fonttools, uharfbuzz, and the Sora variable font (SIL OFL):
    pip install numpy scipy skia-pathops fonttools uharfbuzz
    SORA_TTF=/path/to/Sora[wght].ttf python3 sp-emblem-build.py <output-dir>
"""
import math, os, numpy as np
def bez(P, t):
    P = np.asarray(P, float); t = np.asarray(t)[:, None]; m = 1 - t
    return m**3*P[0] + 3*m*m*t*P[1] + 3*m*t*t*P[2] + t**3*P[3]
def fit_cubic(pts, P0, P3, tan0=None, tan3=None, iters=30):
    """Least-squares cubic through fixed endpoints. Optional unit tangents fix handle directions."""
    pts = np.asarray(pts, float); P0 = np.asarray(P0, float); P3 = np.asarray(P3, float)
    d = np.r_[0, np.cumsum(np.linalg.norm(np.diff(pts, axis=0), axis=1))]; t = d / d[-1]
    for _ in range(iters):
        m = 1 - t; B0, B1, B2, B3 = m**3, 3*m*m*t, 3*m*t*t, t**3
        R = pts - np.outer(B0, P0) - np.outer(B3, P3)
        if tan0 is not None and tan3 is not None:
            Rt = R - np.outer(B1, P0) - np.outer(B2, P3)
            A = np.stack([np.outer(B1, tan0).ravel(), np.outer(B2, tan3).ravel()], 1)
            a, b = np.linalg.lstsq(A, Rt.ravel(), rcond=None)[0]
            P1 = P0 + a*np.asarray(tan0); P2 = P3 + b*np.asarray(tan3)
        else:
            A = np.stack([B1, B2], 1)
            sol = np.linalg.lstsq(A, R, rcond=None)[0]; P1, P2 = sol[0], sol[1]
        P = np.array([P0, P1, P2, P3])
        # reparametrise: nearest t on curve for each point
        tt = np.linspace(0, 1, 2001); C = bez(P, tt)
        idx = np.argmin(((pts[:, None, :] - C[None, :, :])**2).sum(-1), axis=1); t = tt[idx]
    C = bez(P, np.linspace(0, 1, 4001))
    err = np.sqrt(((pts[:, None, :] - C[None, :, :])**2).sum(-1).min(1))
    return P, err

def line_pts(a, b, n=200):
    t = np.linspace(0, 1, n)[:, None]; return np.asarray(a)*(1-t) + np.asarray(b)*t

# ---------------------------------------------------------------- fitted parameters (v2.2, fitted to the v2.1 trace)
ARM_INNER = [[300.48121000000003, 649.0], [238.74852885557377, 641.1805297632098], [174.37844048262792, 590.7471600821942], [153.2, 536.2]]
ARM_OUTER = [[132.5, 548.3], [170.27507265178951, 657.8050042654287], [251.78201380562416, 664.2512862378843], [320.5, 725.46]]
LEFT_CRESCENT = [[306.35242623977774, 254.37354354657367], [281.05002788423747, 250.07579192471644], [279.5048524866527, 279.82717280151815], [313.9243942613663, 295.0636285559363]]
RIGHT_CRESCENT = [[326.0, 247.0], [329.52719476770653, 249.20403590855474], [367.5, 278.88173065185543], [367.5, 302.0]]
TAIL = [[349.0, 354.0], [366.83265414751713, 372.12250938945493], [411.61575728624194, 409.2116293109839], [408.5, 480.0]]
PROTOCOL_TRACK_EM = 1.1869388594070516


import pathops
from fontTools.pens.svgPathPen import SVGPathPen

CX = 320.5
OFFSET_ERR = []
K = 0.5522847498  # cubic circle constant

# ---------------------------------------------------------------- measured parameters (from the trace)
SIL = dict(yt=3.5, xs=3.0, chx=87.18, chy=92.0,
           A=(3.0, 520.64), P1=(3.0, 615.29), P2=(77.70, 664.38), J=(131.34, 698.69), V=(CX, 819.66))
W_OUT, GAP, W_IN = 20.0, 11.0, 3.0                      # uniform border system (trace varied 17-23)
RING_C, RING_RO, RING_RI = (CX, 156.35), 74.29, 51.18   # ring outer / inner radius
SHAFT = (-0.00971, 306.783)                             # left edge: x = a*y + b  (tapers 32 -> 40 wide)
SHAFT_TOP, SHAFT_BOT = 215.0, 649.0
BAR_Y0, BAR_Y1, TERM_CX, TERM_R = 280.0, 304.0, 165.47, 21.67
TERM_CY = 292.0
ARM_IN  = None   # filled in below by fitting
ARM_OUT = None
FLUKE = dict(T=(114.6, 479.5), B=(177.0, 530.5), I=(153.2, 536.2), C=(114.6, 561.0), O=(132.5, 548.3))
ROPE_D, KNOCK, TICK_W, TICK_STEP, TICK_ANG = 20.0, 3.5, 2.2, 11.0, 58.0

def shaft_x(y): return SHAFT[0]*y + SHAFT[1]
def mx(p): return (2*CX - p[0], p[1])

# ---------------------------------------------------------------- path helpers
def newpath(): return pathops.Path()
def copy(p):
    q = pathops.Path(); p.draw(q.getPen()); return q
def union(*ps):
    ps = [p for p in ps if p is not None]
    out = copy(ps[0])
    for p in ps[1:]: out = pathops.op(out, p, pathops.PathOp.UNION)
    return out
def diff(a, b): return pathops.op(a, b, pathops.PathOp.DIFFERENCE)
def inter(a, b): return pathops.op(a, b, pathops.PathOp.INTERSECTION)
def stroke(p, w, cap=pathops.LineCap.BUTT_CAP, join=pathops.LineJoin.ROUND_JOIN):
    q = copy(p); q.stroke(w, cap, join, 4.0); q.convertConicsToQuads(); return q
def grow(p, g):
    return union(p, stroke(p, 2*g, pathops.LineCap.ROUND_CAP, pathops.LineJoin.ROUND_JOIN))
def circle(c, r):
    x, y = c; k = K*r; p = newpath()
    p.moveTo(x+r, y); p.cubicTo(x+r, y+k, x+k, y+r, x, y+r); p.cubicTo(x-k, y+r, x-r, y+k, x-r, y)
    p.cubicTo(x-r, y-k, x-k, y-r, x, y-r); p.cubicTo(x+k, y-r, x+r, y-k, x+r, y); p.close(); return p
def poly(pts):
    p = newpath(); p.moveTo(*pts[0])
    for q in pts[1:]: p.lineTo(*q)
    p.close(); return p

# ---------------------------------------------------------------- shield
def isect(p1, d1, p2, d2):
    p1, d1, p2, d2 = map(np.asarray, (p1, d1, p2, d2))
    A = np.array([d1, -d2]).T; t = np.linalg.solve(A, p2 - p1); return p1 + t[0]*d1

def shield_left(d):
    """Left half of the silhouette offset inward by d: list of segments from top-centre to bottom vertex."""
    s = SIL; yt, xs = s['yt'], s['xs']
    c1, c2 = np.array([s['chx'], yt]), np.array([xs, s['chy']])
    dc = (c2 - c1)/np.linalg.norm(c2 - c1); nc = np.array([-dc[1], dc[0]])
    if nc[0] < 0: nc = -nc
    top_pt = isect((CX, yt+d), (1, 0), c1 + d*nc, dc)
    side_pt = isect(c1 + d*nc, dc, (xs+d, 0), (0, 1))
    A, P1, P2, J, V = map(np.array, (s['A'], s['P1'], s['P2'], s['J'], s['V']))
    u = (V - J)/np.linalg.norm(V - J); n = np.array([u[1], -u[0]])       # inward normal of diagonal
    if d == 0:
        C = np.array([A, P1, P2, J])
    else:
        t = np.linspace(0, 1, 400); B = bez([A, P1, P2, J], t)
        m = 1 - t[:, None]; D = 3*m*m*(P1-A) + 6*m*t[:, None]*(P2-P1) + 3*t[:, None]**2*(J-P2)
        D /= np.linalg.norm(D, axis=1)[:, None]; N = np.c_[D[:, 1], -D[:, 0]]
        O = B + d*N
        C, err = fit_cubic(O, A + [d, 0], J + d*n, np.array([0., 1.]), -u, iters=15)
        OFFSET_ERR.append(err.max()); assert err.max() < 0.5, err.max()
    Jd = C[3]; Vd = isect(Jd, u, (CX, 0), (0, 1))
    return [('L', (CX, yt+d), tuple(top_pt)), ('L', tuple(top_pt), tuple(side_pt)),
            ('L', tuple(side_pt), tuple(C[0])), ('C', C), ('L', tuple(C[3]), tuple(Vd))]

def shield_contour(d):
    segs = shield_left(d); p = newpath(); p.moveTo(*segs[0][1])
    for s in segs:
        if s[0] == 'L': p.lineTo(*s[2])
        else: p.cubicTo(*s[1][1], *s[1][2], *s[1][3])
    # right half: mirrored, reversed
    for s in reversed(segs):
        if s[0] == 'L': p.lineTo(*mx(s[1]))
        else: p.cubicTo(*mx(s[1][2]), *mx(s[1][1]), *mx(s[1][0]))
    p.close(); return p

def shield():
    outer = diff(shield_contour(0), shield_contour(W_OUT))
    inner = diff(shield_contour(W_OUT+GAP), shield_contour(W_OUT+GAP+W_IN))
    return outer, inner

# ---------------------------------------------------------------- anchor body
def ring(): return diff(circle(RING_C, RING_RO), circle(RING_C, RING_RI))
def shaft():
    return poly([(shaft_x(SHAFT_TOP), SHAFT_TOP), (2*CX-shaft_x(SHAFT_TOP), SHAFT_TOP),
                 (2*CX-shaft_x(SHAFT_BOT), SHAFT_BOT), (shaft_x(SHAFT_BOT), SHAFT_BOT)])
def crossbar():
    bar = poly([(TERM_CX, BAR_Y0), (2*CX-TERM_CX, BAR_Y0), (2*CX-TERM_CX, BAR_Y1), (TERM_CX, BAR_Y1)])
    return union(bar, circle((TERM_CX, TERM_CY), TERM_R), circle((2*CX-TERM_CX, TERM_CY), TERM_R))
def arms(arm_in, arm_out):
    f = FLUKE; Pi, Po = arm_in, arm_out
    p = newpath(); p.moveTo(*Pi[0])
    p.cubicTo(*Pi[1], *Pi[2], *Pi[3])                 # inner edge -> I
    for q in (f['B'], f['T'], f['C'], f['O']): p.lineTo(*q)
    p.cubicTo(*Po[1], *Po[2], *Po[3])                 # outer edge -> bottom point
    p.cubicTo(*mx(Po[2]), *mx(Po[1]), *mx(Po[0]))     # mirrored right half, reversed
    for q in (f['C'], f['T'], f['B']): p.lineTo(*mx(q))
    p.lineTo(*mx(f['I']))
    p.cubicTo(*mx(Pi[2]), *mx(Pi[1]), *mx(Pi[0]))
    p.close(); return p

# ---------------------------------------------------------------- rope
def catmull(points, tension=1.0):
    P = [np.array(p, float) for p in points]; out = []
    for i in range(len(P)-1):
        p0 = P[i-1] if i > 0 else 2*P[0]-P[1]; p1, p2 = P[i], P[i+1]
        p3 = P[i+2] if i+2 < len(P) else 2*P[-1]-P[-2]
        out.append((p1, p1 + (p2-p0)/6*tension, p2 - (p3-p1)/6*tension, p2))
    return out

def open_path(cubics, start=None, lines_before=None):
    p = newpath(); p.moveTo(*cubics[0][0])
    for c in cubics: p.cubicTo(*c[1], *c[2], *c[3])
    return p

def sample_cubics(cubics, n=200):
    return np.vstack([bez(c, np.linspace(0, 1, n)) for c in cubics])

def twist_ticks(cubics, D, phase=0.5):
    pts = sample_cubics(cubics, 400)
    seg = np.linalg.norm(np.diff(pts, axis=0), axis=1); L = np.r_[0, np.cumsum(seg)]
    out = []; s = TICK_STEP*phase
    while s < L[-1] - 2:
        i = min(np.searchsorted(L, s), len(pts)-2); p = pts[i]; t = pts[i+1]-pts[i]; t /= np.linalg.norm(t)
        a = math.radians(TICK_ANG); d = np.array([t[0]*math.cos(a)-t[1]*math.sin(a), t[0]*math.sin(a)+t[1]*math.cos(a)])
        h = D*0.95; q = newpath(); q.moveTo(*(p - d*h)); q.lineTo(*(p + d*h))
        out.append(stroke(q, TICK_W)); s += TICK_STEP
    return union(*out) if out else None

def rope_parts():
    D = ROPE_D
    cf = np.array([LEFT_CRESCENT]); rc = np.array(RIGHT_CRESCENT); tl = np.array(TAIL)
    W1Y = 319.5
    left_cres = [tuple(map(tuple, cf[0]))]
    M = rc[3]
    right_cres_w1 = [tuple(map(tuple, rc)),
                     (tuple(M), (M[0], M[1] + 11.0), (M[0] - 11.5, W1Y), (M[0] - 22.5, W1Y)),
                     ((M[0] - 22.5, W1Y), (322.0, W1Y), (302.0, W1Y), (282.0, W1Y))]
    w2y = W1Y + D + KNOCK
    wrap2 = [((282.0, w2y), (304.0, w2y), (330.0, w2y), (356.0, w2y))]
    tail = [tuple(map(tuple, tl))]
    parts = {}
    for name, cub, caps in [('left_cres', left_cres, ()), ('right_cres_w1', right_cres_w1, ('end',)),
                            ('wrap2', wrap2, ('start', 'end')), ('tail', tail, ())]:
        if name == 'left_cres':
            body = tapered_band(cub[0], D, w0=0.25, w1=0.25, ramp=0.42)
        elif name == 'right_cres_w1':
            body = union(tapered_band(cub[0], D, w0=0.25, w1=1.0, ramp=0.5), stroke(open_path(cub[1:]), D))
        else:
            body = stroke(open_path(cub), D)
        for c in caps:
            e = cub[-1][3] if c == 'end' else cub[0][0]
            body = union(body, circle(e, D/2))
        ticks = twist_ticks(cub, D)
        parts[name] = (body, ticks, cub)
    return parts

def fray(cub, depth=11.0, spread=6.0):
    end = np.array(cub[-1][3]); prev = bez(cub[-1], [0.97])[0]
    t = (end - prev)/np.linalg.norm(end - prev); n = np.array([-t[1], t[0]])
    apex = end - t*depth
    return poly([tuple(apex), tuple(end + n*spread/2 + t*1.5), tuple(end - n*spread/2 + t*1.5)])

# ---------------------------------------------------------------- assembly
def build(arm_in, arm_out, ticks_on=('left_cres', 'right_cres_w1', 'wrap2', 'tail')):
    sh_out, sh_in = shield()
    R, S, X, A = ring(), shaft(), crossbar(), arms(arm_in, arm_out)
    rp = rope_parts()
    Lc, Rc, W2, T = (rp[k][0] for k in ('left_cres', 'right_cres_w1', 'wrap2', 'tail'))
    # z-order, back to front: tail < shaft/arms ; crossbar < crescents < shaft ; shaft < wraps ; wrap2 < wrap1
    upper_shaft = inter(S, poly([(0, 200), (641, 200), (641, 306), (0, 306)]))
    Lc = diff(Lc, grow(upper_shaft, KNOCK))
    Rc_top = inter(Rc, poly([(0, 200), (641, 200), (641, 290), (0, 290)]))
    Rc_rest = diff(Rc, poly([(0, 200), (641, 200), (641, 290), (0, 290)]))
    Rc = union(diff(Rc_top, grow(upper_shaft, KNOCK)), Rc_rest)
    X = diff(X, grow(union(Lc, Rc), KNOCK))
    wraps = union(Rc_rest, W2)
    body = union(R, S, A)
    body = diff(body, grow(wraps, KNOCK))
    W2 = diff(W2, grow(Rc_rest, KNOCK))
    T = diff(T, grow(union(body, W2, Rc_rest), KNOCK))
    T = diff(T, fray(rp['tail'][2]))
    rope = {'left_cres': Lc, 'right_cres_w1': Rc, 'wrap2': W2, 'tail': T}
    for k in ticks_on:
        tk = rp[k][1]
        if tk is not None: rope[k] = diff(rope[k], tk)
    anchor = union(body, X)
    return dict(shield_outer=sh_out, shield_inner=sh_in, anchor=anchor,
                rope=union(*rope.values()))

def to_d(p, nd=2):
    pen = SVGPathPen(None, ntos=lambda v: ('%.*f' % (nd, v)).rstrip('0').rstrip('.'))
    p.draw(pen); return pen.getCommands()

def svg_doc(parts, viewbox="1 1 639 820", w=639, h=820, fill="#4C8FFF", bg=None, groups=True):
    body = []
    if bg: body.append(f'<rect x="-10000" y="-10000" width="20000" height="20000" fill="{bg}"/>')
    sym = union(parts['shield_outer'], parts['shield_inner'], parts['anchor'])
    body.append(f'<g id="symmetric-geometry" fill="{fill}"><path d="{to_d(sym)}"/></g>')
    if parts.get('rope') is not None:
        body.append(f'<g id="rope" fill="{fill}"><path d="{to_d(parts["rope"])}"/></g>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" width="{w}" height="{h}">'
            + ''.join(body) + '</svg>')

# ---------------------------------------------------------------- tapered rope (crescents)
def split_cubic(P, t):
    P = np.asarray(P, float)
    a = P[:-1]*(1-t) + P[1:]*t; b = a[:-1]*(1-t) + a[1:]*t; c = b[0]*(1-t) + b[1]*t
    return np.array([P[0], a[0], b[0], c]), np.array([c, b[1], a[2], P[3]])

def tapered_band(P, D, w0=0.3, w1=0.3, ramp=0.35, pieces=4):
    """Filled outline of a stroke whose width eases from w0*D and to w1*D at the ends. Curves, not polylines."""
    P = np.asarray(P, float)
    def width(t):
        s0 = np.clip(t/ramp, 0, 1); s1 = np.clip((1-t)/ramp, 0, 1)
        e = lambda s: s*s*(3-2*s)
        return D*np.minimum(w0 + (1-w0)*e(s0) if w0 < 1 else 1.0, w1 + (1-w1)*e(s1) if w1 < 1 else 1.0)
    L, R = [], []
    for k in range(pieces):
        t0, t1 = k/pieces, (k+1)/pieces
        tt = np.linspace(t0, t1, 120)
        B = bez(P, tt); m = 1 - tt[:, None]
        Dv = 3*m*m*(P[1]-P[0]) + 6*m*tt[:, None]*(P[2]-P[1]) + 3*tt[:, None]**2*(P[3]-P[2])
        Dv /= np.linalg.norm(Dv, axis=1)[:, None]; N = np.c_[-Dv[:, 1], Dv[:, 0]]
        h = width(tt)[:, None]/2
        for side, sgn in ((L, 1), (R, -1)):
            pts = B + sgn*h*N
            C, err = fit_cubic(pts, pts[0], pts[-1], iters=12); side.append(C)
            OFFSET_ERR.append(err.max())
    p = newpath(); p.moveTo(*L[0][0])
    for C in L: p.cubicTo(*C[1], *C[2], *C[3])
    p.lineTo(*R[-1][3])
    for C in reversed(R): p.cubicTo(*C[2], *C[1], *C[0])
    p.close(); return p

def build_norope(arm_in, arm_out):
    sh_out, sh_in = shield()
    anchor = union(ring(), shaft(), crossbar(), arms(arm_in, arm_out))
    return dict(shield_outer=sh_out, shield_inner=sh_in, anchor=anchor, rope=None)


import os, re, numpy as np, pathops, uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.svgPathPen import SVGPathPen
FONT = os.environ.get('SORA_TTF', 'Sora[wght].ttf')
# ---- website navbar values (captured by Claude Code from Navbar.tsx, desktop) ----
BOX_PX, INK_PX, GAP_PX = 100.0, 72.8, 12.0          # emblem box, visible emblem height, gap-3
SF = dict(size=24.0, wght=700, track=0.08)           # STEADFAST: Sora 700, 24px, 0.08em
PR = dict(size=11.2, wght=500, track=1.06)           # PROTOCOL: Sora 500, 11.2px, 1.06em
LINE_GAP_PX = 4.0                                     # mt-1 between the two leading-none lines

def instance(w):
    f = TTFont(FONT); return instancer.instantiateVariableFont(f, {'wght': w})

def shape(text, wght, size, track, x0, baseline, unit):
    """Return a pathops Path of the text as outlines, positioned like Chrome would lay it out."""
    blob = hb.Blob.from_file_path(FONT); face = hb.Face(blob); font = hb.Font(face)
    font.set_variations({'wght': wght}); buf = hb.Buffer(); buf.add_str(text); buf.guess_segment_properties()
    hb.shape(font, buf, {'kern': True, 'liga': False})
    inst = instance(wght); gs = inst.getGlyphSet(); order = inst.getGlyphOrder()
    s = size/1000.0*unit; x = x0; out = pathops.Path()
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        g = pathops.Path(); pen = TransformPen(g.getPen(), (s, 0, 0, -s, x + pos.x_offset*s, baseline - pos.y_offset*s))
        gs[order[info.codepoint]].draw(pen)
        out.addPath(g)
        x += pos.x_advance*s + track*size*unit
    out.simplify()                       # remove glyph overlaps (variable-font contours overlap)
    return out

def bounds(p): return p.bounds   # (xmin, ymin, xmax, ymax)

def build_lockup(emblem_paths, ink_box):
    """emblem_paths: dict name->pathops Path in emblem frame; ink_box: (x0,y0,x1,y1) of emblem ink."""
    ex0, ey0, ex1, ey1 = ink_box; H = ey1 - ey0; unit = H/INK_PX         # SVG units per CSS px
    ecx, ecy = (ex0+ex1)/2, (ey0+ey1)/2
    box_right = ecx + BOX_PX/2*unit                                     # icon box is square, centred on the ink
    text_left = box_right + GAP_PX*unit
    asc, desc = 970, 290                                                # Sora hhea (USE_TYPO_METRICS, same values)
    def baseline_in_line(size):                                         # leading-none line box
        return ((1000 - (asc+desc))/2 + asc)/1000*size
    block_h = SF['size'] + LINE_GAP_PX + PR['size']
    top = ecy - block_h/2*unit                                          # flex items-center
    b1 = top + baseline_in_line(SF['size'])*unit
    b2 = top + (SF['size'] + LINE_GAP_PX + baseline_in_line(PR['size']))*unit
    steadfast = shape('STEADFAST', SF['wght'], SF['size'], SF['track'], text_left, b1, unit)
    protocol = shape('PROTOCOL', PR['wght'], PR['size'], PR['track'], text_left, b2, unit)
    return steadfast, protocol, dict(unit=unit, b1=b1, b2=b2, text_left=text_left)

EXPORT_META = ('Steadfast Protocol emblem, v2.2 clean-vector master (2026-09-21). Rebuilt from the v2.1 traced master by '
    'geometric construction: straight lines, true circles and fitted Bezier curves; left half authored and mirrored; '
    'the rope is the sole intentional asymmetry. Same coordinate frame as the v2.1 master, so it is a drop-in replacement.')

# ---------------------------------------------------------------- export
if __name__ == '__main__':
    import sys
    out = sys.argv[1] if len(sys.argv) > 1 else '.'
    os.makedirs(out, exist_ok=True)
    TICK_STEP, TICK_W, TICK_ANG = 15, 1.8, 52
    PR['track'] = PROTOCOL_TRACK_EM
    ai, ao = np.array(ARM_INNER), np.array(ARM_OUTER)
    parts = build(ai, ao); nr = build_norope(ai, ao)
    sym = union(parts['shield_outer'], parts['shield_inner'], parts['anchor']); rope = parts['rope']
    sym_nr = union(nr['shield_outer'], nr['shield_inner'], nr['anchor'])
    emb = union(sym, rope); ink = emb.bounds
    META = EXPORT_META
    def master(symp, ropep, meta, fill='#4C8FFF'):
        g = f'<g id="symmetric-geometry" fill="{fill}"><path d="{to_d(symp)}"/></g>'
        if ropep is not None: g += f'<g id="rope" fill="{fill}"><path d="{to_d(ropep)}"/></g>'
        return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 639 820" width="639" height="820">'
                f'<metadata>{meta}</metadata>{g}</svg>\n')
    open(f'{out}/sp-master-emblem.svg', 'w').write(master(sym, rope, META))
    open(f'{out}/sp-master-emblem-norope.svg', 'w').write(master(sym_nr, None, META.replace('the rope is the sole intentional asymmetry', 'rope-free tier for use below 96px')))
    sf, pr, info = build_lockup(None, ink)
    VAR = {'light': dict(emb='#1D4ED8', sf='#0C1524', pr='#1D4ED8', plate=None),
           'transparent': dict(emb='#4C8FFF', sf='#D9DADC', pr='#4C8FFF', plate=None),
           'dark': dict(emb='#4C8FFF', sf='#D9DADC', pr='#4C8FFF', plate='#000413')}
    allb = union(emb, sf, pr).bounds; ring_d = 2*RING_RO
    for name, c in VAR.items():
        x0, y0, x1, y1 = allb
        if c['plate']: x0, y0, x1, y1 = x0-ring_d, y0-ring_d, x1+ring_d, y1+ring_d
        w, h = x1-x0, y1-y0; H = 120.0
        plate = f'<rect x="{x0:.2f}" y="{y0:.2f}" width="{w:.2f}" height="{h:.2f}" fill="{c["plate"]}"/>' if c['plate'] else ''
        svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0:.2f} {y0:.2f} {w:.2f} {h:.2f}" '
               f'width="{H*w/h:.1f}" height="{H:.0f}" role="img" aria-label="Steadfast Protocol">'
               f'<metadata>Steadfast Protocol horizontal lockup, {name}, v2.2. Emblem: clean-vector master. Wordmark: Sora 700 / 500 '
               f'(SIL Open Font License) converted to outlines. Proportions match the website navbar; PROTOCOL tracked '
               f'{PR["track"]:.3f}em so both lines end flush.</metadata>{plate}'
               f'<g id="emblem" fill="{c["emb"]}"><path d="{to_d(sym)}"/><path d="{to_d(rope)}"/></g>'
               f'<g id="wordmark"><path fill="{c["sf"]}" d="{to_d(sf)}"/><path fill="{c["pr"]}" d="{to_d(pr)}"/></g></svg>\n')
        open(f'{out}/sp-horizontal-{name}.svg', 'w').write(svg)
    print('written to', out)
