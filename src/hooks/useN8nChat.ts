import { useEffect } from "react";

export const useN8nChat = () => {
  useEffect(() => {
    // Load n8n chat styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    // Load n8n chat script
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://nandinisingh.app.n8n.cloud/webhook/a24c1a5b-3982-40ca-b552-28fdc33e318f/chat',
        initialMessages: ['Hello! I am JARVIS, your personal AI agent. How can I assist you today?'],
        i18n: {
          en: {
            title: 'JARVIS',
            subtitle: 'Personal AI Agent — at your service.',
            inputPlaceholder: 'Ask me anything...',
            getStarted: 'Start Conversation',
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);
};
