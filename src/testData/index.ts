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