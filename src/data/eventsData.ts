export interface TeamMember {
  role: string;
  name: string;
  email: string;
}

export interface SchoolData {
  school: string;
  teachersAttending: string[];
  dietaryRequirements: string[];
  consentFormsReceived: boolean;
  caseStudyReceived: boolean;
}

export interface Volunteer {
  role: string;
  name: string;
}

export interface EventData {
  date: string;
  eventId: string;
  hosts: {
    host1: { name: string; email: string };
    host2: { name: string; email: string };
  };
  eventLead: string;
  supportLead: string;
  functionHosting: string;
  volunteerDRIs: {
    dri1: string;
    dri2: string;
  };
  schoolsAttending: SchoolData[];
  tyTeam: TeamMember[];
  volunteers: {
    photography: Volunteer[];
    videography: Volunteer[];
    music: Volunteer[];
  };
  careerPanel: {
    name: string;
    email: string;
    nominator: string;
  }[];
  commsLead: string;
}

// Sample event data based on the Excel file
export const eventsData: EventData[] = [
  {
    date: "06 November 2025",
    eventId: "event-1",
    hosts: {
      host1: { name: "Rosemary", email: "Rosemary@apple.com" },
      host2: { name: "Eanna", email: "Eanna@apple.com" }
    },
    eventLead: "Sarah Healy",
    supportLead: "Thomas Blennerhasset",
    functionHosting: "Ops",
    volunteerDRIs: {
      dri1: "Shona McNicol",
      dri2: "Oran O'Connell"
    },
    schoolsAttending: [
      {
        school: "St Brogan's College",
        teachersAttending: ["Rob Patrick", "Brian Smith", "John Doe"],
        dietaryRequirements: ["Gluten Free"],
        consentFormsReceived: true,
        caseStudyReceived: false
      },
      {
        school: "St. Angela's College",
        teachersAttending: ["Mary Johnson", "David Wilson"],
        dietaryRequirements: ["Vegetarian", "Dairy Free"],
        consentFormsReceived: false,
        caseStudyReceived: true
      }
    ],
    tyTeam: [
      { role: "Event Host 1", name: "Rosemary", email: "Rosemary@apple.com" },
      { role: "Event Host 2", name: "Eanna", email: "Eanna@apple.com" },
      { role: "Event Lead", name: "Sarah Healy", email: "" },
      { role: "Event Lead Support", name: "Thomas Blennerhasset", email: "" },
      { role: "Volunteer DRI 1", name: "Shona McNicol", email: "" },
      { role: "Volunteer DRI 2", name: "Oran O'Connell", email: "" },
      { role: "Comms Lead", name: "Luke Power", email: "" }
    ],
    volunteers: {
      photography: [
        { role: "Photography Lead", name: "Shona" },
        { role: "Photography Support Lead", name: "Rebecca" }
      ],
      videography: [
        { role: "Videography Lead 1", name: "Fynric" },
        { role: "Videography Support Lead 1", name: "Galven" },
        { role: "Videography Lead 2", name: "Fynric" },
        { role: "Videography Support Lead 2", name: "Jesira" }
      ],
      music: [
        { role: "Music Lead", name: "Pryden" },
        { role: "Music Support Lead", name: "Velric" }
      ]
    },
    careerPanel: [
      { name: "Thomas", email: "Thomas@apple.com", nominator: "Jane" },
      { name: "Emma", email: "Emma@apple.com", nominator: "Kyle" },
      { name: "Mark", email: "Mark@apple.com", nominator: "" },
      { name: "Luke", email: "Luke@apple.com", nominator: "" }
    ],
    commsLead: "Luke Power"
  },
  // Additional events with placeholder data
  {
    date: "13 November 2025",
    eventId: "event-2",
    hosts: {
      host1: { name: "Event 2 Host 1", email: "host1@apple.com" },
      host2: { name: "Event 2 Host 2", email: "host2@apple.com" }
    },
    eventLead: "Event 2 Lead",
    supportLead: "Event 2 Support",
    functionHosting: "Marketing",
    volunteerDRIs: {
      dri1: "Event 2 DRI 1",
      dri2: "Event 2 DRI 2"
    },
    schoolsAttending: [
      {
        school: "Sample School A",
        teachersAttending: ["Teacher A", "Teacher B"],
        dietaryRequirements: ["None"],
        consentFormsReceived: false,
        caseStudyReceived: false
      }
    ],
    tyTeam: [
      { role: "Event Host 1", name: "Event 2 Host 1", email: "host1@apple.com" },
      { role: "Event Host 2", name: "Event 2 Host 2", email: "host2@apple.com" }
    ],
    volunteers: {
      photography: [{ role: "Photography Lead", name: "Event 2 Photographer" }],
      videography: [{ role: "Videography Lead", name: "Event 2 Videographer" }],
      music: [{ role: "Music Lead", name: "Event 2 Music" }]
    },
    careerPanel: [
      { name: "Panel Member 1", email: "panel1@apple.com", nominator: "Nominator 1" }
    ],
    commsLead: "Event 2 Comms"
  },
  {
    date: "20 November 2025",
    eventId: "event-3",
    hosts: {
      host1: { name: "Event 3 Host 1", email: "host1@apple.com" },
      host2: { name: "Event 3 Host 2", email: "host2@apple.com" }
    },
    eventLead: "Event 3 Lead",
    supportLead: "Event 3 Support",
    functionHosting: "Engineering",
    volunteerDRIs: {
      dri1: "Event 3 DRI 1",
      dri2: "Event 3 DRI 2"
    },
    schoolsAttending: [
      {
        school: "Sample School B",
        teachersAttending: ["Teacher C", "Teacher D"],
        dietaryRequirements: ["Vegan"],
        consentFormsReceived: true,
        caseStudyReceived: true
      }
    ],
    tyTeam: [
      { role: "Event Host 1", name: "Event 3 Host 1", email: "host1@apple.com" },
      { role: "Event Host 2", name: "Event 3 Host 2", email: "host2@apple.com" }
    ],
    volunteers: {
      photography: [{ role: "Photography Lead", name: "Event 3 Photographer" }],
      videography: [{ role: "Videography Lead", name: "Event 3 Videographer" }],
      music: [{ role: "Music Lead", name: "Event 3 Music" }]
    },
    careerPanel: [
      { name: "Panel Member 2", email: "panel2@apple.com", nominator: "Nominator 2" }
    ],
    commsLead: "Event 3 Comms"
  }
];

// Generate additional sample events for the remaining dates
const additionalDates = [
  "27 November 2025", "04 December 2025", "11 December 2025", "18 December 2025",
  "08 January 2026", "15 January 2026", "22 January 2026", "29 January 2026",
  "05 February 2026", "10 February 2026", "12 February 2026", "26 February 2026",
  "03 March 2026", "05 March 2026", "12 March 2026", "19 March 2026",
  "24 March 2026", "26 March 2026", "16 April 2026", "21 April 2026",
  "23 April 2026", "05 May 2026", "07 May 2026", "14 May 2026"
];

additionalDates.forEach((date, index) => {
  const eventNumber = index + 4;
  eventsData.push({
    date,
    eventId: `event-${eventNumber}`,
    hosts: {
      host1: { name: `Event ${eventNumber} Host 1`, email: `host1-${eventNumber}@apple.com` },
      host2: { name: `Event ${eventNumber} Host 2`, email: `host2-${eventNumber}@apple.com` }
    },
    eventLead: `Event ${eventNumber} Lead`,
    supportLead: `Event ${eventNumber} Support`,
    functionHosting: ["Ops", "Marketing", "Engineering", "Design"][index % 4],
    volunteerDRIs: {
      dri1: `Event ${eventNumber} DRI 1`,
      dri2: `Event ${eventNumber} DRI 2`
    },
    schoolsAttending: [
      {
        school: `Sample School ${String.fromCharCode(65 + index % 10)}`,
        teachersAttending: [`Teacher ${index * 2 + 1}`, `Teacher ${index * 2 + 2}`],
        dietaryRequirements: [["None", "Gluten Free", "Vegetarian", "Vegan"][index % 4]],
        consentFormsReceived: index % 2 === 0,
        caseStudyReceived: index % 3 === 0
      }
    ],
    tyTeam: [
      { role: "Event Host 1", name: `Event ${eventNumber} Host 1`, email: `host1-${eventNumber}@apple.com` },
      { role: "Event Host 2", name: `Event ${eventNumber} Host 2`, email: `host2-${eventNumber}@apple.com` }
    ],
    volunteers: {
      photography: [{ role: "Photography Lead", name: `Event ${eventNumber} Photographer` }],
      videography: [{ role: "Videography Lead", name: `Event ${eventNumber} Videographer` }],
      music: [{ role: "Music Lead", name: `Event ${eventNumber} Music` }]
    },
    careerPanel: [
      { name: `Panel Member ${eventNumber}`, email: `panel${eventNumber}@apple.com`, nominator: `Nominator ${eventNumber}` }
    ],
    commsLead: `Event ${eventNumber} Comms`
  });
});