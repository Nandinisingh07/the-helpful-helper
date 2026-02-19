const WelcomeSection = () => {
  return (
    <section className="py-10 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
          Welcome to Institute of Innovation Science & Technology
        </h2>
        <p className="text-muted-foreground leading-relaxed text-[15px]">
          IIST (Institute of Innovation Science & Technology) is your intelligent hub built by Nandini Singh. 
          Powered by advanced n8n automation workflows, our platform integrates AI-driven personal assistance through JARVIS Agent, 
          offering smart scheduling, task management, information retrieval, and real-time automation support. 
          Experience the future of personal AI assistance — simply click the chat bubble in the bottom-right corner to start a conversation with JARVIS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { title: "AI Chat", desc: "Natural conversations powered by intelligent automation", icon: "💬" },
            { title: "Task Automation", desc: "Automate repetitive tasks with smart workflows", icon: "⚡" },
            { title: "24/7 Available", desc: "Always online, always ready to assist you", icon: "🌐" },
          ].map((card) => (
            <div
              key={card.title}
              className="border border-border rounded-lg p-6 bg-card hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
