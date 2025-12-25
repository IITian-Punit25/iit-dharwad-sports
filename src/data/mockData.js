import cricketImg from '../assets/images/cricket.png';
import badmintonImg from '../assets/images/badminton.png';
import basketballImg from '../assets/images/basketball.png';
import footballImg from '../assets/images/cricket.png'; // Using cricket ground as fallback for now

export const statsData = [
    { label: 'Students Active', value: 1200, suffix: '+' },
    { label: 'Sports Offered', value: 15, suffix: '' },
    { label: 'Contingent Size', value: 120, suffix: '+' },
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
