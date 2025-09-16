import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { eventsData } from "@/data/eventsData";

interface DateSelectorProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export function DateSelector({ selectedDate, onDateChange }: DateSelectorProps) {
  const selectedEvent = eventsData.find(event => event.date === selectedDate);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="min-w-[200px] justify-between shadow-elegant">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{selectedDate}</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[200px] max-h-[300px] overflow-y-auto">
        {eventsData.map((event) => (
          <DropdownMenuItem
            key={event.eventId}
            onClick={() => onDateChange(event.date)}
            className={event.date === selectedDate ? "bg-accent" : ""}
          >
            <div className="flex flex-col">
              <span className="font-medium">{event.date}</span>
              <span className="text-sm text-muted-foreground">{event.eventLead}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}