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
import { StatusBadge } from "@/components/StatusBadge";
import { Building, Users, Utensils } from "lucide-react";

const SchoolsData = () => {
  const [selectedDate, setSelectedDate] = useState(eventsData[0].date);

  const selectedEvent = eventsData.find(event => event.date === selectedDate) || eventsData[0];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Schools Data</h1>
          <p className="text-muted-foreground">Detailed school information and requirements</p>
        </div>
        <DateSelector selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{selectedEvent.schoolsAttending.length}</div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {selectedEvent.schoolsAttending.reduce((total, school) => total + school.teachersAttending.length, 0)}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dietary Requirements</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {selectedEvent.schoolsAttending.reduce((total, school) => total + school.dietaryRequirements.length, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Schools Table */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            School Details - {selectedDate}
          </CardTitle>
          <CardDescription>
            Complete information for all participating schools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">School Name</TableHead>
                <TableHead>Teachers Attending</TableHead>
                <TableHead>Count</TableHead>
                <TableHead>Dietary Requirements</TableHead>
                <TableHead>Consent Forms</TableHead>
                <TableHead>Case Study</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedEvent.schoolsAttending.map((school, index) => (
                <TableRow key={school.school} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-muted-foreground" />
                      {school.school}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {school.teachersAttending.map((teacher) => (
                        <Badge key={teacher} variant="secondary" className="text-xs">
                          {teacher}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono">
                      {school.teachersAttending.length}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {school.dietaryRequirements.map((req) => (
                        <Badge key={req} variant="outline" className="text-xs flex items-center gap-1">
                          <Utensils className="h-3 w-3" />
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <StatusBadge 
                      status={school.consentFormsReceived} 
                      label="Forms"
                    />
                  </TableCell>
                  <TableCell>
                    <StatusBadge 
                      status={school.caseStudyReceived} 
                      label="Study"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Raw Data Export */}
      <Card className="shadow-elegant">
        <CardHeader>
          <CardTitle>Raw Data Summary</CardTitle>
          <CardDescription>
            JSON representation of school data for this event
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto">
            {JSON.stringify(selectedEvent.schoolsAttending, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolsData;