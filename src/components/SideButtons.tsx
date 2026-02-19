const sideButtonsLeft = [
  { label: "Resume", color: "bg-secondary", href: "#resume" },
  { label: "Projects", color: "bg-primary", href: "#projects" },
  { label: "GitHub", color: "bg-[hsl(var(--jarvis-cyan))]", href: "#github" },
];

const sideButtonsRight = [
  { label: "ACET'25", color: "bg-primary", href: "#acet" },
  { label: "Enquire Now!", color: "bg-accent", href: "#contact" },
  { label: "Apply Now!", color: "bg-accent", href: "#apply" },
];

const SideButtons = () => {
  return (
    <>
      {/* Left side buttons */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-0.5">
        {sideButtonsLeft.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className={`${btn.color} text-primary-foreground px-1.5 py-5 text-xs font-bold tracking-wide hover:opacity-90 transition-opacity shadow-md`}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {btn.label}
          </a>
        ))}
      </div>

      {/* Right side buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-0.5">
        {sideButtonsRight.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className={`${btn.color} text-primary-foreground px-1.5 py-5 text-xs font-bold tracking-wide hover:opacity-90 transition-opacity shadow-md`}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {btn.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default SideButtons;
