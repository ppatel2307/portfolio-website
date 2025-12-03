import { Project } from '../types';

/**
 * Projects data configuration.
 * Add, edit, or remove projects by modifying this array.
 * Used by: ProjectsGrid, ProjectCard
 */
export const projects: Project[] = [
  {
    id: 'embodied-ai-robot',
    title: 'Embodied AI Desk Companion Robot',
    description: `Created a stress-reducing desk-lamp companion designed to improve user wellbeing by detecting 
mood and interacting expressively, automating tasks, and leveraging LLMs to answer questions and boost productivity. 
Delivered a functional desktop robot form factor by designing and 3D-printing custom housings that conceal wiring, 
support full motor range, and provide clean placement for sensors and hardware. Enabled intelligent real-time 
interaction through a Raspberry Pi-powered system featuring face tracking (OpenCV), a 2-DOF neck mechanism 
using ROS2, and integrated microphone-speaker for voice communication.`,
    techStack: ['Python', 'Raspberry Pi', 'Fusion360', 'ROS2', 'OpenCV'],
    imageUrl: '/images/debo.png',
    featured: true,
  },
  {
    id: 'music-discovery-app',
    title: 'Music Discovery App',
    description: `Developed a full-stack music discovery web application featuring a Tinder-style swipe interface 
for browsing Spotify tracks and allowing users to save liked songs into personalized playlists. Used Spotify Web API 
to fetch real-time artist and track data. Implemented secure user authentication and session management with MongoDB 
session storage, and built RESTful API endpoints using Express.js and Node.js. Designed and deployed a responsive 
front-end using CSS, and launched the application on Render with MongoDB Atlas.`,
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Spotify API', 'Git'],
    imageUrl: '/images/spotify.png',
    featured: true,
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    description: `Engineered a complete 2D arcade game with real-time physics engine handling gravity, terminal velocity, 
and momentum-based control. Architected modular, object-oriented codebase with separate classes for game entities 
(Bird, Pipe, Star) and centralized game loop management.`,
    techStack: ['Python', 'Pygame', 'OOP'],
    imageUrl: '/images/flappybird.png',
    featured: false,
  },
  {
    id: 'calculator',
    title: 'Scientific Calculator',
    description: `Engineered a Java-based scientific calculator with support for 8 arithmetic and mathematical operations, 
featuring input validation and error handling. Created an interactive CLI calculator application demonstrating 
proficiency in Java fundamentals, control flow, and the Math library.`,
    techStack: ['Java', 'Regex', 'CLI'],
    imageUrl: '/images/calculator.png',
    featured: false,
  },
  {
    id: 'regex-engine',
    title: 'Regular Expression Engine',
    description: `Implemented algorithms for constructing and analyzing finite state machines, 
including NFA-to-DFA conversion and state minimization. Leveraged object-oriented design patterns 
to model finite automata with extensible, maintainable Python architecture.`,
    techStack: ['Python', 'Algorithms', 'Finite Automata', 'OOP'],
    imageUrl: '/images/regex.png',
    featured: false,
  },
];
