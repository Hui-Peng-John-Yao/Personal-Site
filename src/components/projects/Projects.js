import React from 'react';
import '../.././Hero.css';
import './Projects.css';
import ProjectSection from './ProjectSection.js';
import ProjectsDescription from './ProjectsDescription.js';
import Header from '../Header.js';
import alexaImage from '../../assets/alexa.jpg';
import arcaneChessImage from '../../assets/Arcane_Chess.png';
import researchImage from '../../assets/Research_Image.png';
import uniboundImage from '../../assets/unibound.png';
import siteImage from '../../assets/site.png';
import fit4youImage from '../../assets/fit4you.png';
import aEyeImage from '../../assets/a-eye.png';

const projects = [
  {
    image: aEyeImage,
    title: 'A-Eye',
    description: "I led a four-person team at LA Hacks 2026 to build A-Eye, prototype smart glasses that turn live camera input into spoken navigation for visually impaired users. We won MLH's Best Use of ElevenLabs.\n\nThe system uses YOLO object detection, multi-agent decision making, and ElevenLabs text-to-speech to identify obstacles, find points of interest, and give real-time audio guidance indoors and outdoors. A React client streams video over Cloudflare so users get prioritized instructions like hazard warnings and turn-by-turn directions without needing a screen.",
    tech: ['React', 'Python', 'YOLO', 'Cloudflare', 'ElevenLabs'],
    github: 'https://github.com/AK20202007/A-Eye',
    external: 'https://devpost.com/software/a-eye-pk9sdw'
  },
  {
    image: fit4youImage,
    title: 'Fitica',
    description: "I'm leading a team of six developers to create a general purpose fitness app with AI image scanning for calorie counting and AI workout plan generation.\n\nI set up a backend using AWS Lambda for serverless functions and DynamoDB for user data. Calorie tracking data is stored in Algolia for fast semantic and word match searching. Flowise is connected with CORS to enable AI generation with multiple chatbots.",
    tech: ['AWS Lambda', 'Node.js', 'DynamoDB', 'React'],
    github: '',
    external: ''
  },
  {
    image: alexaImage,
    title: 'Alexa-Powered Voice Journal Assistant',
    description: 'I journal my to-do list, and I ask Alexa to read it back to me the next day when I wake up.',
    tech: ['Python', 'AWS Lambda', 'Google Drive API', 'DynamoDB', 'Alexa Skills Kit', 'IAM'],
    github: 'https://github.com/Hui-Peng-John-Yao/Alexa-Journal-Reader/',
    external: ''
  },
  {
    image: siteImage,
    title: 'Personal Website',
    description: 'This site is hosted with AWS S3 and CloudFront using industry standard practices and built with React, Tailwind, and Express.',
    tech: ['Git', 'React', 'AWS S3', 'Cloudfront', 'Route 53'],
    github: 'https://github.com/Hui-Peng-John-Yao/Personal-Site',
    external: 'https://huipengjohnyao.com'
  },
  {
    image: uniboundImage,
    title: 'Unibound Consulting',
    description: 'I am a web developer and consultant for Unibound Consulting, a startup that provides consulting services to college applicants.',
    tech: ['React', 'Tailwind', 'Node.js'],
    github: 'https://github.com/Leahie/consulting',
    external: 'https://unibound.org'
  },
  {
    image: arcaneChessImage,
    title: 'Arcane Chess',
    description: 'A game developed in GoDot that combines the classic gameplay of chess with a card and mana system.',
    tech: ['Godot'],
    github: '',
    external: ''
  },
  {
    image: researchImage,
    title: 'Published Research',
    description: 'A paper titled "The Role of Game-Playing and Coping Styles in Mitigating Stress Among Students" published in The Whitman Journal of Psychology. I used Centiment for data collection and R for data analysis.',
    tech: ['R'],
    github: '',
    external: 'https://www.wwjop.org/post/the-role-of-game-playing-and-coping-styles-in-mitigating-stress-among-students'
  }
];

function Projects() {
  return (
    <div>
      <Header />
    <div className="projects">
      <ProjectsDescription />
      {projects.map((project, idx) => (
        <ProjectSection key={idx} {...project} />
      ))}
    </div>
    </div>
  );
}

export default Projects;      