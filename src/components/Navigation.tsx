import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'master-tracker', label: 'Master Tracker' },
  { id: 'schools-data', label: 'Schools Data' },
  { id: 'teams-data', label: 'Teams Data' },
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              TY Portal
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="tab"
                className={cn(
                  "relative",
                  activeTab === tab.id && "border-primary bg-background shadow-elegant"
                )}
                onClick={() => onTabChange(tab.id)}
                data-active={activeTab === tab.id}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}