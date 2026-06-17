export default function ConnectionTerminal() {
    return (
        <div className="rounded-lg border border-line bg-surface font-mono text-sm shadow-lg shadow-black/20">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="text-xs text-muted">session — client_handshake</span>
                <span className="flex items-center gap-2 text-xs text-muted">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                    live
                </span>
            </div>

            <div className="space-y-1.5 px-4 py-5 text-muted">
                <p>
                    <span className="text-signal">$</span> steadfast connect --target=production
                </p>
                <p>
                    resolving requirements... <span className="text-text">done</span>
                </p>
                <p>
                    provisioning environment... <span className="text-text">done</span>
                </p>
                <p>
                    running integration checks... <span className="text-text">done</span>
                </p>
                <p>establishing connection...</p>
                <p className="pt-2 text-text">
                    STATUS: <span className="text-signal">ESTABLISHED</span>{" "}
                    <span
                        aria-hidden
                        className="inline-block h-4 w-[0.5em] animate-pulse bg-signal align-middle"
                    />
                </p>
            </div>
        </div>
    );
}