import { useState } from "react";
import { DateSelector } from "@/components/DateSelector";
import { eventsData } from "@/data/eventsData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Camera, Video, Music, Crown } from "lucide-react";

const TeamsData = () => {
  const [selectedDate, setSelectedDate] = useState(eventsData[0].date);

  const selectedEvent = eventsData.find(event => event.date === selectedDate) || eventsData[0];

  const getAllVolunteers = () => {
    const allVolunteers = [
      ...selectedEvent.volunteers.photography.map(v => ({ ...v, team: 'Photography' })),
      ...selectedEvent.volunteers.videography.map(v => ({ ...v, team: 'Videography' })),
      ...selectedEvent.volunteers.music.map(v => ({ ...v, team: 'Music' }))
    ];
    return allVolunteers;
  };

  const getTeamIcon = (team: string) => {
    switch (team) {
      case 'Photography': return Camera;
      case 'Videography': return Video;
      case 'Music': return Music;
      default: return Users;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Teams Data</h1>
          <p className="text-muted-foreground">Team members and volunteer information</p>
        </div>
        <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">TY Team</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{selectedEvent.tyTeam.length}</div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Photography</CardTitle>
            <Camera className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{selectedEvent.volunteers.photography.length}</div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Videography</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{selectedEvent.volunteers.videography.length}</div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Music</CardTitle>
            <Music className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{selectedEvent.volunteers.music.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* TY Team Table */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            TY Team - {selectedDate}
          </CardTitle>
          <CardDescription>
            Core team members and leadership roles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Contact Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedEvent.tyTeam.map((member, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell>
                    <Badge variant="outline" className="font-medium">
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>
                    {member.email ? (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-sm">{member.email}</span>
                      </div>
                    ) : (
                      <Badge variant="secondary">No email</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant={member.email ? "default" : "secondary"}>
                      {member.email ? "Contactable" : "Limited"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Volunteers Table */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Volunteers - {selectedDate}
          </CardTitle>
          <CardDescription>
            All volunteer team members across photography, videography, and music
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Responsibility Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getAllVolunteers().map((volunteer, index) => {
                const TeamIcon = getTeamIcon(volunteer.team);
                const isLead = volunteer.role.toLowerCase().includes('lead');
                return (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <TeamIcon className="h-4 w-4 text-muted-foreground" />
                        <Badge variant="outline">{volunteer.team}</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{volunteer.role}</TableCell>
                    <TableCell>{volunteer.name}</TableCell>
                    <TableCell>
                      <Badge variant={isLead ? "default" : "secondary"}>
                        {isLead ? "Lead" : "Support"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Raw Data Export */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle>Raw Data Summary</CardTitle>
          <CardDescription>
            JSON representation of team data for this event
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto">
            {JSON.stringify({ 
              tyTeam: selectedEvent.tyTeam, 
              volunteers: selectedEvent.volunteers 
            }, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamsData;