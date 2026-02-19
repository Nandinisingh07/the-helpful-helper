import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import NavigationBar from "@/components/NavigationBar";
import HeroCarousel from "@/components/HeroCarousel";
import SideButtons from "@/components/SideButtons";
import WelcomeSection from "@/components/WelcomeSection";
import { useN8nChat } from "@/hooks/useN8nChat";

const Index = () => {
  useN8nChat();

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <NavigationBar />
      <HeroCarousel />
      <WelcomeSection />
      <SideButtons />
    </div>
  );
};

export default Index;
