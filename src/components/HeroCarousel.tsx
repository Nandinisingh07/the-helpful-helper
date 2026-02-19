import { useState, useEffect } from "react";

const slides = [
  {
    title: "Welcome to JARVIS Agent",
    subtitle: "Your Personal AI-Powered Assistant",
    description: "Ask me anything — I'm here to help with tasks, information, and automation.",
  },
  {
    title: "Smart Automation",
    subtitle: "Powered by n8n Workflows",
    description: "Seamlessly integrated with powerful automation pipelines for real-time assistance.",
  },
  {
    title: "Built by Nandini Singh",
    subtitle: "AI & Automation Enthusiast",
    description: "Combining cutting-edge AI with elegant design to create the ultimate personal agent.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-card">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(190_100%_50%/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(190_100%_50%/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto px-6 z-10">
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-3">
              {slide.subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 font-display text-foreground">
              {slide.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border border-primary transition-colors ${
              index === current ? "bg-primary" : "bg-primary/20"
            }`}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-primary/30 bg-card/80 text-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-primary/30 bg-card/80 text-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
      >
        ›
      </button>
    </section>
  );
};

export default HeroCarousel;
