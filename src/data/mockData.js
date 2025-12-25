import cricketImg from '../assets/images/cricket.png';
import badmintonImg from '../assets/images/badminton.png';
import basketballImg from '../assets/images/basketball.png';
import footballImg from '../assets/images/cricket.png'; // Using cricket ground as fallback for now

export const statsData = [
    { label: 'Students Active', value: 1200, suffix: '+' },
    { label: 'Sports Offered', value: 12, suffix: '' },
    { label: 'Contingent Size', value: 98, suffix: '' },
    { label: 'Events/Year', value: 20, suffix: '+' },
];

export const featuredSports = [
    {
        id: 1,
        name: 'Cricket',
        image: cricketImg,
        description: 'The most popular sport on campus with regular tournaments and a dedicated ground.',
    },
    {
        id: 2,
        name: 'Football',
        image: footballImg,
        description: 'Passion and teamwork come alive on our football field.',
    },
    {
        id: 3,
        name: 'Basketball',
        image: basketballImg,
        description: 'Fast-paced action on our synthetic courts. Dribble, shoot, score!',
    },
    {
        id: 4,
        name: 'Badminton',
        image: badmintonImg,
        description: 'Smash your way to victory in our indoor badminton courts.',
    },
];

export const councilMembers = [
    { role: 'General Secretary', name: 'Vidit Jignesh Parikh', sport: 'Gymkhana' },
    { role: 'Sports Secretary', name: 'TBD', sport: 'Sports Affairs' },
    { role: 'Cricket Captain', name: 'TBD', sport: 'Cricket' },
    { role: 'Football Captain', name: 'TBD', sport: 'Football' },
    { role: 'Basketball Captain', name: 'TBD', sport: 'Basketball' },
    { role: 'Badminton Captain', name: 'TBD', sport: 'Badminton' },
    { role: 'Athletics Captain', name: 'TBD', sport: 'Athletics' },
    { role: 'Volleyball Captain', name: 'TBD', sport: 'Volleyball' },
];

export const selectionProcess = [
    { step: 1, title: 'Registration', description: 'Sign up for sports trials at the beginning of the semester.' },
    { step: 2, title: 'Trials', description: 'Demonstrate your skills and fitness in sport-specific trials.' },
    { step: 3, title: 'Probables Camp', description: 'Shortlisted candidates train with the team for 2-3 weeks.' },
    { step: 4, title: 'Final Selection', description: 'Final team roster is announced based on performance and dedication.' },
];
