import { Checkbox } from "@/components/ui/checkbox";
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
import { StatusBadge } from "./StatusBadge";
import { SchoolData } from "@/data/eventsData";
import { useState } from "react";

interface SchoolsTableProps {
  schools: SchoolData[];
  onUpdateSchool: (schoolName: string, field: 'consentFormsReceived' | 'caseStudyReceived', value: boolean) => void;
}

export function SchoolsTable({ schools, onUpdateSchool }: SchoolsTableProps) {
  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Schools Attending Details
        </CardTitle>
        <CardDescription>
          Manage consent forms and case studies for each attending school
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>School Name</TableHead>
              <TableHead>Teachers Attending</TableHead>
              <TableHead>Dietary Requirements</TableHead>
              <TableHead>Consent Forms</TableHead>
              <TableHead>Case Study</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schools.map((school, index) => (
              <TableRow key={school.school} className="hover:bg-muted/50">
                <TableCell className="font-medium">
                  {school.school}
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
                  <div className="flex flex-wrap gap-1">
                    {school.dietaryRequirements.map((req) => (
                      <Badge key={req} variant="outline" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={school.consentFormsReceived}
                      onCheckedChange={(checked) => 
                        onUpdateSchool(school.school, 'consentFormsReceived', !!checked)
                      }
                    />
                    <StatusBadge 
                      status={school.consentFormsReceived} 
                      label="Forms"
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={school.caseStudyReceived}
                      onCheckedChange={(checked) => 
                        onUpdateSchool(school.school, 'caseStudyReceived', !!checked)
                      }
                    />
                    <StatusBadge 
                      status={school.caseStudyReceived} 
                      label="Study"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}