import { useState } from "react";
import { Search } from "lucide-react";

const navItems = [
  { label: "ABOUT US", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "GALLERY", href: "#gallery" },
  { label: "ADMISSIONS", href: "#admissions" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "EVENTS", href: "#events" },
  { label: "CAREER", href: "#career" },
  { label: "CHAT WITH JARVIS", href: "#chat", highlight: true },
];

const NavigationBar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`px-4 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-primary-foreground/20 ${
              active === item.label ? "bg-primary-foreground/20" : ""
            } ${item.highlight ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
          >
            {item.label}
          </a>
        ))}
        <button className="px-4 py-3 hover:bg-primary-foreground/20 transition-colors">
          <Search className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
