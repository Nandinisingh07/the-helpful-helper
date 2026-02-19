const WelcomeSection = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          WELCOME TO <span className="text-primary">JARVIS AGENT</span> — YOUR PERSONAL AI ASSISTANT
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          JARVIS Agent is your intelligent personal assistant built by Nandini Singh. 
          Powered by advanced n8n automation workflows, JARVIS can help you with information retrieval, 
          task management, smart scheduling, and much more. Simply click the chat bubble to start 
          a conversation and experience the future of personal AI assistance.
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
