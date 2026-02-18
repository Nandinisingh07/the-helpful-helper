const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(190_100%_50%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(190_100%_50%/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        {/* Arc reactor inspired element */}
        <div className="mx-auto mb-8 w-24 h-24 rounded-full border-2 border-primary/40 flex items-center justify-center animate-pulse-glow">
          <div className="w-16 h-16 rounded-full border border-primary/60 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-primary/30 border border-primary" />
          </div>
        </div>

        <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          System Online
        </p>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-in-up animation-delay-200">
          <span className="text-primary">JARVIS</span>{" "}
          <span className="text-foreground">Agent</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
          Personal AI assistant powered by automation. Ask me anything — I'm here to help.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-fade-in-up animation-delay-600">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono">Click the chat bubble to begin</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
