import { useState } from "react";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT ME", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
  { label: "CHAT WITH JARVIS", href: "#chat", highlight: true },
];

const NavigationBar = () => {
  const [active, setActive] = useState("HOME");

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg shadow-primary/20">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`px-4 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-primary-foreground/10 ${
              active === item.label ? "bg-primary-foreground/15" : ""
            } ${item.highlight ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
