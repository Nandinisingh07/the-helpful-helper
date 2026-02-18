import HeroSection from "@/components/HeroSection";
import { useN8nChat } from "@/hooks/useN8nChat";

const Index = () => {
  useN8nChat();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
    </div>
  );
};

export default Index;
