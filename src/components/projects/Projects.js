import React from 'react';
import '../.././Hero.css';
import './Projects.css';
import ProjectSection from './ProjectSection.js';
import ProjectsDescription from './ProjectsDescription.js';
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
    description: "I led a four-person team at LA Hacks 2026 to prototype A-Eye: smart glasses that turn a live camera feed into spoken navigation for visually impaired users. We won MLH's Best Use of ElevenLabs.\n\nThe stack is YOLO detection, multi-agent decisions, and ElevenLabs speech, with a React client streaming video over Cloudflare so users get hazard warnings and turn-by-turn audio without a screen. It is a full-stack accessibility product, not a slide-deck demo.",
    tech: ['React', 'Python', 'YOLO', 'Cloudflare', 'ElevenLabs'],
    github: 'https://github.com/AK20202007/A-Eye',
    external: 'https://devpost.com/software/a-eye-pk9sdw'
  },
  {
    image: fit4youImage,
    title: 'Fitica',
    description: "I lead a team of six building Fitica, a fitness app that uses AI to scan meals for calories and generate workout plans — consumer product work that requires a roadmap, not just a feature ticket.\n\nI designed the serverless backend on AWS Lambda and DynamoDB, indexed food logs in Algolia for fast search, and wired Flowise chatbots behind CORS so multiple AI agents can generate plans without blocking the React client.",
    tech: ['AWS Lambda', 'Node.js', 'DynamoDB', 'React'],
    github: '',
    external: ''
  },
  {
    image: alexaImage,
    title: 'Alexa-Powered Voice Journal Assistant',
    description: "I shipped a production Alexa skill that reads back my journaled to-do list every morning. The product is small; the AWS surface is not: Alexa Skills Kit, Lambda, DynamoDB, IAM, and the Google Drive API.\n\nIt is proof I can design a voice interface and glue cloud services together securely — the same pattern as any event-driven backend, just spoken out loud.",
    tech: ['Python', 'AWS Lambda', 'Google Drive API', 'DynamoDB', 'Alexa Skills Kit', 'IAM'],
    github: 'https://github.com/Hui-Peng-John-Yao/Alexa-Journal-Reader/',
    external: ''
  },
  {
    image: siteImage,
    title: 'Personal Website',
    description: "This site is a production deploy, not a localhost screenshot: React on the front, AWS S3, CloudFront, and Route 53 on the back, hosted the way a real static product goes live.\n\nI treat it as a shipping surface — custom UI, routing, and a contact pipeline — with the same care I would give a customer-facing app.",
    tech: ['Git', 'React', 'AWS S3', 'Cloudfront', 'Route 53'],
    github: 'https://github.com/Hui-Peng-John-Yao/Personal-Site',
    external: 'https://huipengjohnyao.com'
  },
  {
    image: uniboundImage,
    title: 'Unibound Consulting',
    description: "I build and maintain the web product for Unibound Consulting, a startup that advises college applicants — real users and real stakeholders, not a class assignment.\n\nIn React, Tailwind, and Node.js I ship the site applicants and consultants actually use, balancing design with the operational needs of a small team.",
    tech: ['React', 'Tailwind', 'Node.js'],
    github: 'https://github.com/Leahie/consulting',
    external: 'https://unibound.org'
  },
  {
    image: arcaneChessImage,
    title: 'Arcane Chess',
    description: "Arcane Chess is a complete Godot game that layers a card-and-mana system onto chess — original rules, not a tutorial clone.\n\nI designed the systems, implemented the gameplay loop, and shipped a playable build. That is the same muscle as product engineering: constraints, state, and an experience that has to feel fair.",
    tech: ['Godot'],
    github: '',
    external: ''
  },
  {
    image: researchImage,
    title: 'Published Research',
    description: "I published \"The Role of Game-Playing and Coping Styles in Mitigating Stress Among Students\" in The Whitman Journal of Psychology — a peer-facing paper, not a class write-up.\n\nI ran data collection through Centiment and analyzed results in R, which matters anytime a team needs someone who can measure an effect, not only ship a feature.",
    tech: ['R'],
    github: '',
    external: 'https://www.wwjop.org/post/the-role-of-game-playing-and-coping-styles-in-mitigating-stress-among-students'
  }
];

function Projects() {
  return (
    <div className="projects">
      <ProjectsDescription />
      {projects.map((project, idx) => (
        <ProjectSection key={idx} {...project} />
      ))}
    </div>
  );
}

export default Projects;      