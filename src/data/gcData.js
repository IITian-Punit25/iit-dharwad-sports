// Official GC Data Structure

// Hostels Configuration
export const hostels = {
    boys: ['Hostel 1', 'Hostel 2', 'Hostel 3', 'Hostel 4', 'Hostel 5', 'Hostel 6', 'Hostel 7', 'Hostel 8', 'Hostel 9', 'FNS'],
    girls: ['Hostel 1', 'Hostel 2', 'Hostel 3', 'Hostel 4']
};

// Points System Constants
export const POINTS_SYSTEM = {
    standard: { 1: 10, 2: 6, 3: 4, 4: 2 },
    athletics: { 1: 20, 2: 12, 3: 8, 4: 4 },
    yoga: { 1: 5, 2: 3, 3: 2, 4: 1 },
    league: { win: 2, draw: 1, loss: 0 } // For Girls League
};

// Mock Leaderboard Data
export const gcLeaderboard = {
    boys: [
        { rank: 1, hostel: 'Hostel 5', gold: 2, silver: 1, bronze: 0, points: 26, events: 3 },
        { rank: 2, hostel: 'Hostel 2', gold: 1, silver: 0, bronze: 1, points: 14, events: 3 },
        { rank: 3, hostel: 'Hostel 1', gold: 0, silver: 2, bronze: 0, points: 12, events: 3 },
        { rank: 4, hostel: 'FNS', gold: 0, silver: 0, bronze: 2, points: 8, events: 3 },
        // ... other hostels with 0 points
    ],
    girls: [
        { rank: 1, hostel: 'Hostel 3', gold: 1, silver: 0, bronze: 0, points: 10, events: 1 },
        { rank: 2, hostel: 'Hostel 1', gold: 0, silver: 1, bronze: 0, points: 6, events: 1 },
        { rank: 3, hostel: 'Hostel 2', gold: 0, silver: 0, bronze: 1, points: 4, events: 1 },
        { rank: 4, hostel: 'Hostel 4', gold: 0, silver: 0, bronze: 0, points: 2, events: 1 }
    ],
    lastUpdated: '2025-01-15 20:00'
};

// Mock Schedule Data
export const gcSchedule = [
    // Boys GC - Pool Stage
    {
        id: 'b1',
        sport: 'Football',
        category: 'Boy',
        stage: 'Pool A Match',
        date: '2025-01-20',
        time: '17:00',
        venue: 'Main Football Ground',
        team1: 'Hostel 1',
        team2: 'Hostel 5',
        status: 'Upcoming',
        pool: 'A'
    },
    {
        id: 'b2',
        sport: 'Football',
        category: 'Boy',
        stage: 'Pool B Match',
        date: '2025-01-20',
        time: '18:30',
        venue: 'Main Football Ground',
        team1: 'Hostel 2',
        team2: 'FNS',
        status: 'Upcoming',
        pool: 'B'
    },
    // Boys GC - Knockout
    {
        id: 'b3',
        sport: 'Cricket',
        category: 'Boy',
        stage: 'Quarter Final 1',
        date: '2025-01-25',
        time: '09:00',
        venue: 'Cricket Ground',
        team1: 'Pool A Winner',
        team2: 'Pool B 4th',
        status: 'Scheduled',
        pool: 'Knockout'
    },
    // Girls GC - League
    {
        id: 'g1',
        sport: 'Badminton',
        category: 'Girl',
        stage: 'League Match',
        date: '2025-01-21',
        time: '18:00',
        venue: 'Indoor Sports Complex',
        team1: 'Hostel 1',
        team2: 'Hostel 2',
        status: 'Upcoming'
    },
    {
        id: 'g2',
        sport: 'Badminton',
        category: 'Girl',
        stage: 'League Match',
        date: '2025-01-21',
        time: '19:00',
        venue: 'Indoor Sports Complex',
        team1: 'Hostel 3',
        team2: 'Hostel 4',
        status: 'Upcoming'
    }
];

// Mock Results Data
export const gcResults = [
    {
        id: 'r1',
        sport: 'Table Tennis',
        category: 'Boy',
        stage: 'Final',
        date: '2025-01-14',
        winner: 'Hostel 5',
        score: '3 - 1',
        team1: 'Hostel 5',
        team2: 'Hostel 1',
        pointsAwarded: { winner: 10, runnerUp: 6 }
    },
    {
        id: 'r2',
        sport: 'Chess',
        category: 'Girl',
        stage: 'Final',
        date: '2025-01-12',
        winner: 'Hostel 3',
        score: '2 - 1',
        team1: 'Hostel 3',
        team2: 'Hostel 1',
        pointsAwarded: { winner: 10, runnerUp: 6 }
    }
];
