import { Users, Mail, Calendar, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "./StatusBadge";
import { EventData } from "@/data/eventsData";

interface EventOverviewProps {
  event: EventData;
  onCardClick: (section: string) => void;
}

export function EventOverview({ event, onCardClick }: EventOverviewProps) {
  const totalAttendees = event.schoolsAttending.reduce(
    (total, school) => total + school.teachersAttending.length, 
    0
  );

  const consentFormsReceived = event.schoolsAttending.filter(s => s.consentFormsReceived).length;
  const caseStudiesReceived = event.schoolsAttending.filter(s => s.caseStudyReceived).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card 
        className="cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 bg-gradient-subtle" 
        onClick={() => onCardClick("schools")}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Schools Attending</CardTitle>
          <Building className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">{event.schoolsAttending.length}</div>
          <p className="text-xs text-muted-foreground">
            {totalAttendees} teachers total
          </p>
        </CardContent>
      </Card>

      <Card 
        className="cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 bg-gradient-subtle" 
        onClick={() => onCardClick("team")}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Team Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">{event.tyTeam.length}</div>
          <p className="text-xs text-muted-foreground">
            Lead: {event.eventLead}
          </p>
        </CardContent>
      </Card>

      <Card 
        className="cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 bg-gradient-subtle" 
        onClick={() => onCardClick("consent")}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Consent Forms</CardTitle>
          <Mail className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">
            {consentFormsReceived}/{event.schoolsAttending.length}
          </div>
          <StatusBadge 
            status={consentFormsReceived === event.schoolsAttending.length} 
            label="Status"
          />
        </CardContent>
      </Card>

      <Card 
        className="cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 bg-gradient-subtle" 
        onClick={() => onCardClick("casestudy")}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Case Studies</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">
            {caseStudiesReceived}/{event.schoolsAttending.length}
          </div>
          <StatusBadge 
            status={caseStudiesReceived === event.schoolsAttending.length} 
            label="Status"
          />
        </CardContent>
      </Card>
    </div>
  );
}