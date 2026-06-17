export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="font-mono text-sm text-text">steadfast_protocol</p>
                    <p className="mt-1 text-sm text-muted">
                        Custom software, AI tooling, and workflow automation.
                    </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-muted">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                    connection: steadfast
                </div>

                <div className="text-sm text-muted">
                    <a href="mailto:mmedeles@steadfastprotocol.com" className="hover:text-text">
                        mmedeles@steadfastprotocol.com
                    </a>
                    <p className="mt-1">© {new Date().getFullYear()} Steadfast Protocol, LLC</p>
                </div>
            </div>
        </footer>
    );
}