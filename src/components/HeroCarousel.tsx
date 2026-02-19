import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Welcome to JARVIS Agent",
    subtitle: "Your Personal AI-Powered Assistant",
    description: "Ask me anything — I'm here to help with tasks, information, and automation.",
    bgGradient: "from-primary/10 via-secondary/5 to-accent/10",
  },
  {
    title: "Smart Automation",
    subtitle: "Powered by n8n Workflows",
    description: "Seamlessly integrated with powerful automation pipelines for real-time assistance.",
    bgGradient: "from-secondary/10 via-primary/5 to-secondary/10",
  },
  {
    title: "Built by Nandini Singh",
    subtitle: "AI & Automation Enthusiast",
    description: "Combining cutting-edge AI with elegant design to create the ultimate personal agent.",
    bgGradient: "from-accent/10 via-primary/5 to-secondary/10",
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
    <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-muted">
      {/* Background pattern - light grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(145_70%_35%/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(145_70%_35%/0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 bg-gradient-to-br ${slide.bgGradient} ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto px-6 z-10">
            <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              {slide.subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-card/90 text-foreground flex items-center justify-center hover:bg-muted transition-colors shadow"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-card/90 text-foreground flex items-center justify-center hover:bg-muted transition-colors shadow"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};

export default HeroCarousel;
