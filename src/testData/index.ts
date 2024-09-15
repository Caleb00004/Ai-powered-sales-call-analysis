export const callData:callDataType[] = 
[   
    {
        id: 0,
        meetingName: "Meeting with Peter",
        Date: "12/05/2024 12:03PM",
        status: "Past",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 1,
        meetingName: "Meeting with James",
        Date: "30/10/2024 02:03PM",
        status: "Future",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 2,
        meetingName: "Meeting with Carls",
        Date: "30/10/2024 02:03PM",
        status: "Future",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 3,
        meetingName: "Meeting with Ahmed",
        Date: "12/05/2024 12:03PM",
        status: "Past",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 4,
        meetingName: "Meeting with James",
        Date: "30/10/2024 02:03PM",
        status: "Future",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 5,
        meetingName: "Meeting with Ahmed",
        Date: "12/05/2024 12:03PM",
        status: "Past",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 6,
        meetingName: "Meeting with James",
        Date: "30/10/2024 02:03PM",
        status: "Future",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 7,
        meetingName: "Meeting with Ahmed",
        Date: "12/05/2024 12:03PM",
        status: "Past",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 8,
        meetingName: "Meeting with James",
        Date: "30/10/2024 02:03PM",
        status: "Future",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 9,
        meetingName: "Meeting with Ahmed",
        Date: "12/05/2024 12:03PM",
        status: "Past",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 10,
        meetingName: "Meeting with James",
        Date: "30/10/2024 02:03PM",
        status: "Future",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 11,
        meetingName: "Meeting with Ahmed",
        Date: "12/05/2024 12:03PM",
        status: "Past",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
    {
        id: 12,
        meetingName: "Meeting with James",
        Date: "30/10/2024 02:03PM",
        status: "Future",
        overall: 20,
        BA: 10,
        BB: 90,
        BC: 10,
        BD: 30,
        BE: 20,
        BF: 25,
        BG: 10,
        MC: 20,
    },
]

export type callDataType = {
    id: number;
    meetingName: string;
    Date: string;
    status: string;
    overall: number;
    BA: number;
    BB: number;
    BC: number;
    BD: number;
    BE: number;
    BF: number;
    BG: number;
    MC: number;
}

export type dealsDataType = {
    id: number,
    name: string,
    client: string,
    stage: "Prospecting" | "Negotiation" | "Closing",
    status: "Open" | "Closed",
    assignedSalesRep: number
}

export const dealStage = ["Prospecting", "Negotiation", "Closing"]
export const dealsData: dealsDataType[] = [
    {
        id: 1,
        name: "Project A",
        client: "Paul",
        stage: "Prospecting",
        status: "Open",
        assignedSalesRep: 5
    },
    {
        id: 2,
        name: "Project B",
        client: "Bob john",
        stage: "Negotiation",
        status: "Closed",
        assignedSalesRep: 3
    },
    {
        id: 3,
        name: "Project C",
        client: "Mike",
        stage: "Closing",
        status: "Open",
        assignedSalesRep: 2
    },
    {
        id: 4,
        name: "Project A",
        client: "Paul",
        stage: "Prospecting",
        status: "Open",
        assignedSalesRep: 5
    },
    {
        id: 5,
        name: "Project B",
        client: "Bob john",
        stage: "Negotiation",
        status: "Closed",
        assignedSalesRep: 3
    },
    {
        id: 6,
        name: "Project C",
        client: "Mike",
        stage: "Closing",
        status: "Open",
        assignedSalesRep: 2
    },
    {
        id: 7,
        name: "Project A",
        client: "Paul",
        stage: "Prospecting",
        status: "Open",
        assignedSalesRep: 5
    },
    {
        id: 8,
        name: "Project B",
        client: "Bob john",
        stage: "Negotiation",
        status: "Closed",
        assignedSalesRep: 3
    },
    {
        id: 9,
        name: "Project C",
        client: "Mike",
        stage: "Closing",
        status: "Open",
        assignedSalesRep: 2
    },
     {
        id: 10,
        name: "Project C",
        client: "Mike",
        stage: "Closing",
        status: "Open",
        assignedSalesRep: 2
    },
]

export const TeamsData = [
    {
        id: 1,
        name: "Kevin jOhn",
        email: "kevin@gmail.com",
        role: "Sales Rep",
        department: "Software Engineer",
        status: "Active"
    },
    {
        id: 2,
        name: "Michael myers",
        email: "myke@gmail.com",
        role: "Software Engineer",
        department: "Project Management",
        status: "Active"
    },
    {
        id: 3,
        name: "Caleb Akpan",
        email: "caleb@gmail.com",
        role: "Manager",
        department: "Software Engineer",
        status: "Suspended"
    },
    {
        id: 4,
        name: "Chiak josh",
        email: "chika@gmail.com",
        role: "Sales Rep",
        department: "Software Engineer",
        status: "Active"
    },
    {
        id: 5,
        name: "Michael myers",
        email: "myke@gmail.com",
        role: "Software Engineer",
        department: "Project Management",
        status: "Active"
    },
    {
        id: 6,
        name: "Caleb Akpan",
        email: "caleb@gmail.com",
        role: "Manager",
        department: "Software Engineer",
        status: "Suspended"
    },
    {
        id: 7,
        name: "Kevin jOhn",
        email: "kevin@gmail.com",
        role: "Sales Rep",
        department: "Software Engineer",
        status: "Active"
    },
    {
        id: 8,
        name: "Michael myers",
        email: "myke@gmail.com",
        role: "Software Engineer",
        department: "Project Management",
        status: "Active"
    },
    {
        id: 9,
        name: "Caleb Akpan",
        email: "caleb@gmail.com",
        role: "Manager",
        department: "Software Engineer",
        status: "Suspended"
    }
]

export const ModulesData = [
    {
        id: 1,
        name: "Module 1",
        topics: [
            {
                name: "Trading Forex",
                enrolledTeam: 4
            },
            {
                name: "Crypto Basics",
                enrolledTeam: 2
            },
            {
                name: "Learn Web Basics",
                enrolledTeam: 6
            },
        ]
    },
    {
        id: 2,
        name: "Module 2",
        topics: [
            {
                name: "Ai robotics",
                enrolledTeam: 1
            },
            {
                name: "Close Deals",
                enrolledTeam: 3
            },
            {
                name: "Know your clinet",
                enrolledTeam: 5
            },
        ]
    },
    {
        id: 3,
        name: "Module 3",
        topics: [
            {
                name: "Ai robotics",
                enrolledTeam: 1
            },
            {
                name: "Close Deals",
                enrolledTeam: 3
            },
            {
                name: "Know your clinet",
                enrolledTeam: 5
            },
        ]
    },
    {
        id: 4,
        name: "Module 4",
        topics: [
            {
                name: "Ai robotics",
                enrolledTeam: 1
            },
            {
                name: "Close Deals",
                enrolledTeam: 3
            },
            {
                name: "Know your clinet",
                enrolledTeam: 5
            },
        ]
    },
    {
        id: 5,
        name: "Module 5",
        topics: [
            {
                name: "Trading Forex",
                enrolledTeam: 4
            },
            {
                name: "Crypto Basics",
                enrolledTeam: 2
            },
            {
                name: "Learn Web Basics",
                enrolledTeam: 6
            },
        ]
    },
]

export const TeamProgresData = [
    {
        id: 1,
        name: "Micael john",
        topics: [
            {
                id: 1,
                name: "Close Deals",
                progress: "In Progress",
                date: "11/04/2023"
            },
            {
                id: 2,
                name: "Close Deals",
                progress: "In Progress",
                date: "11/04/2023"
            },
            {
                id: 3,
                name: "Close Deals",
                progress: "Completed",
                date: "11/04/2023"
            },
            {
                id: 2,
                name: "Close Deals",
                progress: "Not Started",
                date: "11/04/2023"
            }
        ]
    },
    {
        id: 2,
        name: "Charles Andrew",
        topics: [
            {
                id: 1,
                name: "Learn Web 3",
                progress: "Completed",
                date: "22/02/2013"
            }
        ]
    },
    {
        id: 3,
        name: "Susan Kay",
        topics: [
            {
                id: 1,
                name: "Forex ax",
                progress: "Not Started",
                date: "22/02/2013"
            },
             {
                id: 2,
                name: "Forex ax",
                progress: "Not Started",
                date: "22/02/2013"
            },
            {
                id: 3,
                name: "Forex ax",
                progress: "Not Started",
                date: "22/02/2013"
            },
        ]
    },
]

export const AuditLogData = [
    {
        id: 1,
        timeStamp: "01/01/2024 | 12:05 pm",
        user: "Helen Paul",
        role: "Project Manager",
        activity: "Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail  "
    },
    {
        id: 2,
        timeStamp: "11/03/2024 | 12:05 pm",
        user: "Jack ",
        role: "Developer",
        activity: "Lorem ipsum dolor init maxi sit amed dolor "
    },
    {
        id: 3,
        timeStamp: "11/03/2024 | 12:05 pm",
        user: "Jack ",
        role: "Developer",
        activity: "Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail "
    },
    {
        id: 4,
        timeStamp: "01/01/2024 | 12:05 pm",
        user: "Helen Paul",
        role: "Project Manager",
        activity: "Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail"
    },
    {
        id: 5,
        timeStamp: "11/03/2024 | 12:05 pm",
        user: "Jack ",
        role: "Developer",
        activity: "Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail"
    },
    {
        id: 6,
        timeStamp: "11/03/2024 | 12:05 pm",
        user: "Jack ",
        role: "Developer",
        activity: "Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail"
    },
    {
        id: 7,
        timeStamp: "01/01/2024 | 12:05 pm",
        user: "Helen Paul",
        role: "Project Manager",
        activity: "Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail"
    },
    {
        id: 8,
        timeStamp: "11/03/2024 | 12:05 pm",
        user: "Jack ",
        role: "Developer",
        activity: "Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail"
    },
    {
        id: 9,
        timeStamp: "11/03/2024 | 12:05 pm",
        user: "Jack ",
        role: "Developer",
        activity: "Lorem ipsum dolor init maxi sit amed dolor nit maxin milaino tempsu ipsum dolor maxil lam mail"
    },
]

export const timezones = [
  { label: "(UTC-12:00) International Date Line West", value: "Etc/GMT+12" },
  { label: "(UTC-11:00) Coordinated Universal Time-11", value: "Etc/GMT+11" },
  { label: "(UTC-10:00) Hawaii", value: "Pacific/Honolulu" },
  { label: "(UTC-09:00) Alaska", value: "America/Anchorage" },
  { label: "(UTC-08:00) Pacific Time (US & Canada)", value: "America/Los_Angeles" },
  { label: "(UTC-07:00) Mountain Time (US & Canada)", value: "America/Denver" },
  { label: "(UTC-06:00) Central Time (US & Canada)", value: "America/Chicago" },
  { label: "(UTC-05:00) Eastern Time (US & Canada)", value: "America/New_York" },
  { label: "(UTC-04:00) Atlantic Time (Canada)", value: "America/Halifax" },
  { label: "(UTC-03:30) Newfoundland", value: "America/St_Johns" },
  { label: "(UTC-03:00) Buenos Aires", value: "America/Argentina/Buenos_Aires" },
  { label: "(UTC-02:00) Coordinated Universal Time-02", value: "Etc/GMT+2" },
  { label: "(UTC-01:00) Azores", value: "Atlantic/Azores" },
  { label: "(UTC+00:00) London, Lisbon, Casablanca", value: "Europe/London" },
  { label: "(UTC+01:00) West Africa Time (WAT)", value: "Africa/Lagos" },
  { label: "(UTC+01:00) Central European Time", value: "Europe/Berlin" },
  { label: "(UTC+02:00) Eastern European Time", value: "Europe/Istanbul" },
  { label: "(UTC+03:00) Moscow, Baghdad, Nairobi", value: "Europe/Moscow" },
  { label: "(UTC+03:30) Tehran", value: "Asia/Tehran" },
  { label: "(UTC+04:00) Abu Dhabi, Muscat, Baku", value: "Asia/Dubai" },
  { label: "(UTC+04:30) Kabul", value: "Asia/Kabul" },
  { label: "(UTC+05:00) Islamabad, Karachi", value: "Asia/Karachi" },
  { label: "(UTC+05:30) India Standard Time", value: "Asia/Kolkata" },
  { label: "(UTC+06:00) Dhaka, Astana", value: "Asia/Dhaka" },
  { label: "(UTC+07:00) Bangkok, Hanoi, Jakarta", value: "Asia/Bangkok" },
  { label: "(UTC+08:00) Beijing, Perth, Singapore", value: "Asia/Shanghai" },
  { label: "(UTC+09:00) Tokyo, Seoul, Yakutsk", value: "Asia/Tokyo" },
  { label: "(UTC+09:30) Adelaide, Darwin", value: "Australia/Adelaide" },
  { label: "(UTC+10:00) Sydney, Brisbane, Guam", value: "Australia/Sydney" },
  { label: "(UTC+11:00) Solomon Islands, New Caledonia", value: "Pacific/Guadalcanal" },
  { label: "(UTC+12:00) Auckland, Fiji, Kamchatka", value: "Pacific/Auckland" },
  { label: "(UTC+13:00) Nuku'alofa", value: "Pacific/Tongatapu" }
];
