import { useState } from "react";
import { DateSelector } from "@/components/DateSelector";
import { EventOverview } from "@/components/EventOverview";
import { SchoolsTable } from "@/components/SchoolsTable";
import { TeamOverview } from "@/components/TeamOverview";
import { eventsData, EventData } from "@/data/eventsData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Users, Building } from "lucide-react";

const MasterTracker = () => {
  const [selectedDate, setSelectedDate] = useState(eventsData[0].date);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const selectedEvent = eventsData.find(event => event.date === selectedDate) || eventsData[0];

  const handleUpdateSchool = (schoolName: string, field: 'consentFormsReceived' | 'caseStudyReceived', value: boolean) => {
    // In a real app, this would update the backend
    console.log(`Updating ${schoolName} ${field} to ${value}`);
  };

  const handleCardClick = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Master Tracker</h1>
          <p className="text-muted-foreground">Select an event date to view and manage details</p>
        </div>
        <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </div>

      {/* Event Overview Cards */}
      <EventOverview event={selectedEvent} onCardClick={handleCardClick} />

      {/* Event Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Event Leadership
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Event Lead:</span>
              <Badge variant="secondary">{selectedEvent.eventLead}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Support Lead:</span>
              <Badge variant="secondary">{selectedEvent.supportLead}</Badge>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Function:</span>
              <Badge variant="outline">{selectedEvent.functionHosting}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Event Hosts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="font-medium">Host 1: {selectedEvent.hosts.host1.name}</div>
              <div className="text-sm text-muted-foreground">{selectedEvent.hosts.host1.email}</div>
            </div>
            <div>
              <div className="font-medium">Host 2: {selectedEvent.hosts.host2.name}</div>
              <div className="text-sm text-muted-foreground">{selectedEvent.hosts.host2.email}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Volunteer DRIs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="font-medium">DRI 1: {selectedEvent.volunteerDRIs.dri1}</div>
            </div>
            <div>
              <div className="font-medium">DRI 2: {selectedEvent.volunteerDRIs.dri2}</div>
            </div>
            <div className="mt-3">
              <Badge variant="outline" className="w-full justify-center">
                Comms Lead: {selectedEvent.commsLead}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dynamic Sections Based on Card Clicks */}
      {activeSection === 'schools' && (
        <SchoolsTable 
          schools={selectedEvent.schoolsAttending} 
          onUpdateSchool={handleUpdateSchool}
        />
      )}

      {activeSection === 'team' && (
        <TeamOverview event={selectedEvent} />
      )}

      {(activeSection === 'consent' || activeSection === 'casestudy') && (
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>
              {activeSection === 'consent' ? 'Consent Forms Status' : 'Case Studies Status'}
            </CardTitle>
            <CardDescription>
              Track completion status for {activeSection === 'consent' ? 'consent forms' : 'case studies'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SchoolsTable 
              schools={selectedEvent.schoolsAttending} 
              onUpdateSchool={handleUpdateSchool}
            />
          </CardContent>
        </Card>
      )}

      {/* Career Panel */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Career Panel
          </CardTitle>
          <CardDescription>
            Industry professionals participating in the event
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedEvent.careerPanel.map((panelist, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted/30 border">
                <div className="font-medium">{panelist.name}</div>
                <div className="text-sm text-muted-foreground">{panelist.email}</div>
                {panelist.nominator && (
                  <Badge variant="outline" className="mt-2 text-xs">
                    Nominated by: {panelist.nominator}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MasterTracker;