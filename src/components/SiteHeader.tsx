const SiteHeader = () => {
  return (
    <header className="bg-card border-b border-border py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-10">
        {/* JARVIS Logo / Arc Reactor */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full border-2 border-[hsl(var(--jarvis-cyan))]/50 flex items-center justify-center animate-pulse-glow bg-[hsl(var(--jarvis-dark))]">
            <div className="w-10 h-10 rounded-full border border-[hsl(var(--jarvis-cyan))]/60 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-[hsl(var(--jarvis-cyan))]/40 border border-[hsl(var(--jarvis-cyan))]" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-[hsl(var(--jarvis-cyan))]">JARVIS</span>{" "}
              <span className="text-foreground">Agent</span>
            </h1>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Personal AI Assistant</p>
          </div>
        </div>

        {/* Badges - IIST style */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-lg px-4 py-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">AI</div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Powered By</p>
              <p className="text-sm font-bold text-foreground">n8n Automation</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-4 py-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">NS</div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Created By</p>
              <p className="text-sm font-bold text-foreground">Nandini Singh</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
