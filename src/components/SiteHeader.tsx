const SiteHeader = () => {
  return (
    <header className="bg-card border-b border-border py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-8">
        {/* Arc reactor logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center animate-pulse-glow">
            <div className="w-9 h-9 rounded-full border border-primary/60 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary/40 border border-primary" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight font-display">
              <span className="text-primary">JARVIS</span>{" "}
              <span className="text-foreground">Agent</span>
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Personal AI Assistant</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="text-center border-l border-border pl-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Powered By</p>
            <p className="text-sm font-semibold text-primary font-display">n8n Automation</p>
          </div>
          <div className="text-center border-l border-border pl-6">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Created By</p>
            <p className="text-sm font-semibold text-foreground font-display">Nandini Singh</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
