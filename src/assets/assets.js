import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaTools, FaDatabase } from 'react-icons/fa';
import { SiFuturelearn } from "react-icons/si";


import profile from '../assets/profile.jpg';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';


export const assets = {
    profile,
}

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    },
    {
      icon: SiFuturelearn,
      title: 'Learning',
      description: 'A commitment to continuous learning and staying updated with industry trends.',
      color: 'text-pink'
    }

  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Tailwind CSS','Bootstrap','React-Bootstrsap','Framer-motion']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub','Figma' ]
  }
];



export const projects = [
  {
    title: "Food-Delivery App",
    description: "A fully responsive food delivery web that allows users to view menus, add to cart and place orders seamlessly..",
    image: project1,
    tech: ["React", "CSS"], 
    code: "https://github.com/abhishekjadhav0505/Food-Delivery02",
    demo: "https://food-delivery02.vercel.app/"
  },
  {
    title: "Real-Estate Website",
    description: "A responsive real estate website designed to explore property listings with ease.",
    image: project2,
    tech: ["React","Tailwind-CSS","Framer-Motion"],
    code: "https://github.com/abhishekjadhav0505/Real-estate01",
    demo: "https://real-estate01-gold.vercel.app/"
  },
  {
    title: "Interior-Designing Website",
    description: "A modern interior design website showcasing elegant layouts, design inspirations, and creativity.",
    image: project3,
    tech: ["React","Tailwind-CSS"],
    code: "https://github.com/abhishekjadhav0505/Interior-Designing01",
    demo: "https://interior-designing01.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, myself and contact me.",
    image: project4,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    code: "https://github.com/abhishekjadhav0505/Portfolio02",
    demo: "https://portfolio02-nine.vercel.app/"
  }
];


