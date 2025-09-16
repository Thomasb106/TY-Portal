import { User, Mail, Users, Camera, Video, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EventData } from "@/data/eventsData";

interface TeamOverviewProps {
  event: EventData;
}

export function TeamOverview({ event }: TeamOverviewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* TY Team */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            TY Team
          </CardTitle>
          <CardDescription>
            Core team members and their roles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {event.tyTeam.map((member) => (
              <div key={member.role} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                </div>
                {member.email && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    Email
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Volunteers */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Volunteers
          </CardTitle>
          <CardDescription>
            Photography, videography, and music support teams
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Photography Team */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Camera className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">Photography Team</span>
            </div>
            <div className="space-y-1">
              {event.volunteers.photography.map((volunteer) => (
                <div key={volunteer.name} className="flex items-center gap-2 text-sm p-2 rounded bg-muted/20">
                  <span className="font-medium">{volunteer.name}</span>
                  <Badge variant="secondary" className="text-xs">{volunteer.role}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Videography Team */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Video className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">Videography Team</span>
            </div>
            <div className="space-y-1">
              {event.volunteers.videography.map((volunteer) => (
                <div key={volunteer.name} className="flex items-center gap-2 text-sm p-2 rounded bg-muted/20">
                  <span className="font-medium">{volunteer.name}</span>
                  <Badge variant="secondary" className="text-xs">{volunteer.role}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Music Team */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Music className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">Music Team</span>
            </div>
            <div className="space-y-1">
              {event.volunteers.music.map((volunteer) => (
                <div key={volunteer.name} className="flex items-center gap-2 text-sm p-2 rounded bg-muted/20">
                  <span className="font-medium">{volunteer.name}</span>
                  <Badge variant="secondary" className="text-xs">{volunteer.role}</Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}