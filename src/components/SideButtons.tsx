const sideButtonsLeft = [
  { label: "Resume", color: "bg-primary", href: "#resume" },
  { label: "Projects", color: "bg-accent", href: "#projects" },
  { label: "GitHub", color: "bg-secondary", href: "#github" },
];

const sideButtonsRight = [
  { label: "Enquire", color: "bg-destructive", href: "#contact" },
  { label: "Chat Now", color: "bg-primary", href: "#chat" },
];

const SideButtons = () => {
  return (
    <>
      {/* Left side buttons */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1">
        {sideButtonsLeft.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className={`${btn.color} text-primary-foreground px-1 py-4 text-xs font-bold tracking-wide hover:opacity-90 transition-opacity`}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {btn.label}
          </a>
        ))}
      </div>

      {/* Right side buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1">
        {sideButtonsRight.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className={`${btn.color} text-primary-foreground px-1 py-4 text-xs font-bold tracking-wide hover:opacity-90 transition-opacity`}
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
