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


export const companiesData = [
    {  
        id: 1,
        name: "ebay",
        email: "ebay@gmail.com",
        dateAdded: "Aug 10, 2024",
        status: "Active",
        subscription: "Personal",
    },
    {
        id: 2,
        name: "Amazon",
        email: "amazon@gmail.com",
        dateAdded: "May 9, 2021",
        status: "Suspended",
        subscription: "Free Trial",
    },
    {
        id: 3,
        name: "Calendly",
        email: "calendly@gmail.com",
        dateAdded: "Jun 21, 2024",
        status: "Active",
        subscription: "Personal",
    },
    {
        id: 4,
        name: "Facebook",
        email: "facebook@gmail.com",
        dateAdded: "Jun 11, 2021",
        status: "Suspended",
        subscription: "Free Trial",
    },
    {
        id: 5,
        name: "ebay",
        email: "ebay@gmail.com",
        dateAdded: "Aug 10, 2024",
        status: "Active",
        subscription: "Personal",
    },
    {
        id: 6,
        name: "Amazon",
        email: "amazon@gmail.com",
        dateAdded: "May 9, 2021",
        status: "Suspended",
        subscription: "Free Trial",
    },
    {
        id: 7,
        name: "Calendly",
        email: "calendly@gmail.com",
        dateAdded: "Jun 21, 2024",
        status: "Active",
        subscription: "Personal",
    },
    {
        id: 8,
        name: "Facebook",
        email: "facebook@gmail.com",
        dateAdded: "Jun 11, 2021",
        status: "Suspended",
        subscription: "Free Trial",
    },
    {
        id: 9,
        name: "ebay",
        email: "ebay@gmail.com",
        dateAdded: "Aug 10, 2024",
        status: "Active",
        subscription: "Personal",
    },
    {
        id: 10,
        name: "Amazon",
        email: "amazon@gmail.com",
        dateAdded: "May 9, 2021",
        status: "Suspended",
        subscription: "Free Trial",
    },
    {
        id: 11,
        name: "Calendly",
        email: "calendly@gmail.com",
        dateAdded: "Jun 21, 2024",
        status: "Active",
        subscription: "Personal",
    },
    {
        id: 12,
        name: "Facebook",
        email: "facebook@gmail.com",
        dateAdded: "Jun 11, 2021",
        status: "Suspended",
        subscription: "Free Trial",
    },
    {
        id: 13,
        name: "ebay",
        email: "ebay@gmail.com",
        dateAdded: "Aug 10, 2024",
        status: "Active",
        subscription: "Personal",
    },
    {
        id: 14,
        name: "Amazon",
        email: "amazon@gmail.com",
        dateAdded: "May 9, 2021",
        status: "Suspended",
        subscription: "Free Trial",
    },
    {
        id: 15,
        name: "Calendly",
        email: "calendly@gmail.com",
        dateAdded: "Jun 21, 2024",
        status: "Active",
        subscription: "Personal",
    },
    {
        id: 16,
        name: "Facebook",
        email: "facebook@gmail.com",
        dateAdded: "Jun 11, 2021",
        status: "Suspended",
        subscription: "Free Trial",
    }

]

export const companyTeamMember = [
    {
        id: 1,
        name: "Akpan Caleb",
        email: "caleb@gmail.com",
        role: "developer",
        permission: "Owner",
        status: "Active"
    },
    {
        id: 2,
        name: "John Doe",
        email: "john@gmail.com",
        role: "ui/ux designer",
        permission: "manager",
        status: "Active",
    },
    {
        id: 3,
        name: "Jane Doe",
        email: "jan2@gmail.com",
        role: "Product Manager",
        permission: "Sales Rep",
        status: "Suspended",
    },
    {
        id: 4,
        name: "Mike Phil",
        email: "mike@gmail.com",
        role: "Product Manager",
        permission: "Manager",
        status: "Active",
    },    
    {
        id: 5,
        name: "Akpan Caleb",
        email: "caleb@gmail.com",
        role: "developer",
        permission: "Owner",
        status: "Active"
    },
    {
        id: 6,
        name: "John Doe",
        email: "john@gmail.com",
        role: "ui/ux designer",
        permission: "manager",
        status: "Active",
    },
    {
        id: 7,
        name: "Jane Doe",
        email: "jan2@gmail.com",
        role: "Product Manager",
        permission: "Sales Rep",
        status: "Suspended",
    },
    {
        id: 8,
        name: "Mike Phil",
        email: "mike@gmail.com",
        role: "Product Manager",
        permission: "Manager",
        status: "Active",
    },
    {
        id: 9,
        name: "Akpan Caleb",
        email: "caleb@gmail.com",
        role: "developer",
        permission: "Owner",
        status: "Active"
    },
    {
        id: 10,
        name: "John Doe",
        email: "john@gmail.com",
        role: "ui/ux designer",
        permission: "manager",
        status: "Active",
    },
    {
        id: 11,
        name: "Jane Doe",
        email: "jan2@gmail.com",
        role: "Product Manager",
        permission: "Sales Rep",
        status: "Suspended",
    },
    {
        id: 12,
        name: "Mike Phil",
        email: "mike@gmail.com",
        role: "Product Manager",
        permission: "Manager",
        status: "Active",
    },
]

export const activityData = [
    {
        id: 1,
        name: "Mike John",
        email: "mike@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "successs"
    },
    {
        id: 2,
        name: "John doe",
        email: "john@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "failure"
    },
    {
        id: 3,
        name: "Mike John",
        email: "mike@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "successs"
    },
    {
        id: 4,
        name: "John doe",
        email: "john@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "failure"
    },
    {
        id: 5,
        name: "Mike John",
        email: "mike@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "successs"
    },
    {
        id: 6,
        name: "John doe",
        email: "john@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "failure"
    },
    {
        id: 7,
        name: "Mike John",
        email: "mike@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "successs"
    },
    {
        id: 8,
        name: "John doe",
        email: "john@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "failure"
    },
    {
        id: 9,
        name: "Mike John",
        email: "mike@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "successs"
    },
    {
        id: 10,
        name: "John doe",
        email: "john@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "failure"
    },
    {
        id: 11,
        name: "Mike John",
        email: "mike@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "successs"
    },
    {
        id: 12,
        name: "John doe",
        email: "john@gmail.com",
        description: "Uploaded role permission",
        timestamp: "2024-08-16",
        status: "failure"
    },
]

export const errorLogsData = [
    {
        id: 1,
        timestamp: "2024-06-19-0",
        errorCode: 'ERR_500',
        description: "Internal Server Error",
        severity: "critical",
        component: "API Gateway",
        status: "Resolved",
    },
    {
        id: 2,
        timestamp: "2024-06-19-0",
        errorCode: 'ERR_300',
        description: "Local ERROR",
        severity: "critical",
        component: "Database",
        status: "Resolved",
    },
    {
        id: 3,
        timestamp: "2024-06-19-0",
        errorCode: 'ERR_500',
        description: "Internal Server Error",
        severity: "critical",
        component: "API",
        status: "Resolved",
    },
    {
        id: 4,
        timestamp: "2024-06-19-0",
        errorCode: 'ERR_500',
        description: "Internal Server Error",
        severity: "critical",
        component: "API Gateway",
        status: "Resolved",
    },
    {
        id: 5,
        timestamp: "2024-06-19-0",
        errorCode: 'ERR_300',
        description: "Local ERROR",
        severity: "critical",
        component: "API",
        status: "Resolved",
    },
    {
        id: 6,
        timestamp: "2024-06-19-0",
        errorCode: 'ERR_500',
        description: "Internal Server Error",
        severity: "critical",
        component: "API",
        status: "Resolved",
    }    
]

export const subscriptionsData = [
    {
        id: 1,
        company: "ebay",
        plan: "professional",
        date: "2024-09-09",
        expires: "2024-08-09",
        status: "Active"
    },
    {
        id: 2,
        company: "Microsoft",
        plan: "professional",
        date: "2021-09-09",
        expires: "2020-08-09",
        status: "Active"
    },
    {
        id: 3,
        company: "Amazon",
        plan: "Free plan",
        date: "2024-09-09",
        expires: "2024-08-09",
        status: "Inactive"
    },
    {
        id: 4,
        company: "ebay",
        plan: "professional",
        date: "2024-09-09",
        expires: "2024-08-09",
        status: "Active"
    },
    {
        id: 5,
        company: "Microsoft",
        plan: "professional",
        date: "2021-09-09",
        expires: "2020-08-09",
        status: "Active"
    },
    {
        id: 6,
        company: "Amazon",
        plan: "Free plan",
        date: "2024-09-09",
        expires: "2024-08-09",
        status: "Inactive"
    },
    {
        id: 7,
        company: "ebay",
        plan: "professional",
        date: "2024-09-09",
        expires: "2024-08-09",
        status: "Active"
    },
    {
        id: 8,
        company: "Microsoft",
        plan: "professional",
        date: "2021-09-09",
        expires: "2020-08-09",
        status: "Active"
    },
    {
        id: 9,
        company: "Amazon",
        plan: "Free plan",
        date: "2024-09-09",
        expires: "2024-08-09",
        status: "Inactive"
    },
    {
        id: 10,
        company: "ebay",
        plan: "professional",
        date: "2024-09-09",
        expires: "2024-08-09",
        status: "Active"
    },
    {
        id: 11,
        company: "Microsoft",
        plan: "professional",
        date: "2021-09-09",
        expires: "2020-08-09",
        status: "Active"
    },
    {
        id: 12,
        company: "Amazon",
        plan: "Free plan",
        date: "2024-09-09",
        expires: "2024-08-09",
        status: "Inactive"
    },
]

export const billingHistoryData = [
    {
        id: 1,
        number: "BFkKK-393930",
        plan: "premium",
        amount: "$30",
        date: "Aug 22, 2024",
        expires: "Sep 22 2024",
        status: "Paid"
    },
    {
        id: 2,
        number: "BFkKK-393930",
        plan: "premium",
        amount: "$30",
        date: "Aug 22, 2024",
        expires: "Sep 22 2024",
        status: "Paid"
    },
    {
        id: 3,
        number: "FDDkKK-393930",
        plan: "premium",
        amount: "$30",
        date: "Aug 22, 2024",
        expires: "Sep 22 2024",
        status: "Paid"
    },
    {
        id: 4,
        number: "KERQSSK-393930",
        plan: "premium",
        amount: "$30",
        date: "Aug 22, 2024",
        expires: "Sep 22 2024",
        status: "Paid"
    }
]