import { CheckCircle, XCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: boolean | "pending";
  label: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  const getStatusConfig = () => {
    if (status === true) {
      return {
        icon: CheckCircle,
        variant: "default",
        className: "bg-success text-success-foreground",
        text: "Received"
      };
    } else if (status === false) {
      return {
        icon: XCircle,
        variant: "destructive",
        className: "bg-destructive text-destructive-foreground",
        text: "Missing"
      };
    } else {
      return {
        icon: Clock,
        variant: "secondary",
        className: "bg-warning text-warning-foreground",
        text: "Pending"
      };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <Badge 
      variant={config.variant as "default" | "secondary" | "destructive"} 
      className={cn("flex items-center gap-1 px-2 py-1", config.className, className)}
    >
      <Icon className="h-3 w-3" />
      <span className="text-xs font-medium">{label}: {config.text}</span>
    </Badge>
  );
}