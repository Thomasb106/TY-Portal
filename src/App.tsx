import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Home from "./pages/Home";
import MasterTracker from "./pages/MasterTracker";
import SchoolsData from "./pages/SchoolsData";
import TeamsData from "./pages/TeamsData";

const queryClient = new QueryClient();

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'master-tracker':
        return <MasterTracker />;
      case 'schools-data':
        return <SchoolsData />;
      case 'teams-data':
        return <TeamsData />;
      default:
        return <Home />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="container mx-auto px-4 py-6">
            {renderContent()}
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
