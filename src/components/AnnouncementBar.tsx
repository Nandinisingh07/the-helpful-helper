const AnnouncementBar = () => {
  return (
    <div className="bg-background border-b border-border py-2 px-4 text-center text-sm overflow-hidden">
      <div className="flex items-center justify-center gap-2 animate-marquee whitespace-nowrap">
        <span className="bg-destructive text-destructive-foreground px-2 py-0.5 rounded text-xs font-bold">New!</span>
        <span className="text-primary">AI-Powered Personal Assistant</span>
        <span className="text-muted-foreground">|</span>
        <span className="text-primary">Task Automation</span>
        <span className="text-muted-foreground">|</span>
        <span className="text-primary">Smart Scheduling & Reminders</span>
        <span className="text-muted-foreground">|</span>
        <span className="text-accent">Available 24/7 for Assistance</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
