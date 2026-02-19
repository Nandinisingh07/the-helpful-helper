const AnnouncementBar = () => {
  return (
    <div className="bg-background border-b border-border py-2 px-4 text-center text-sm">
      <div className="max-w-7xl mx-auto">
        <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-bold mr-2">New!</span>
        <span className="text-accent font-medium">AI-Powered Personal Assistant</span>
        <span className="text-muted-foreground mx-1">|</span>
        <span className="text-accent font-medium">Task Automation</span>
        <span className="text-muted-foreground mx-1">|</span>
        <span className="text-accent font-medium">Smart Scheduling & Reminders</span>
        <span className="text-muted-foreground mx-1">|</span>
        <span className="text-primary font-semibold">Important: JARVIS Agent v2.0 Now Live!</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
