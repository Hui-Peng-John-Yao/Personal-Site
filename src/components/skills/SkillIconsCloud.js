import React from 'react';
import '../.././Hero.css';
import './Skills.css';
import lambdaLogo from '../../assets/Lambda.png';
import DynamoDBLogo from '../../assets/DynamoDB.png';
import S3Logo from '../../assets/S3.png';
import postgresqlLogo from '../../assets/postgresql_logo.png';
import sqlLogo from '../../assets/sql-database-generic.svg';

const skills = [
  {
    name: 'AWS S3',
    svg: (
      <img src={S3Logo} alt="AWS S3" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'AWS Lambda',
    svg: (
      <img src={lambdaLogo} alt="AWS Lambda" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'DynamoDB',
    svg: (
      <img src={DynamoDBLogo} alt="DynamoDB" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'PostgreSQL',
    svg: (
      <img src={postgresqlLogo} alt="PostgreSQL" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'SQL',
    svg: (
      <img src={sqlLogo} alt="SQL" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'AWS IAM',
    svg: (
      <svg width="80" height="80" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_AWS-Identity-and-Access-Management_32_svg__a">
            <stop stopColor="#BD0816" offset="0%"></stop>
            <stop stopColor="#FF5252" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h40v40H0z" fill="url(#Arch_AWS-Identity-and-Access-Management_32_svg__a)"></path>
          <path d="M7 30h26V11H7v19zm27-19.5v20a.5.5 0 01-.5.5h-27a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h27a.5.5 0 01.5.5zM22 24h8v-1h-8v1zm6-3h3v-1h-3v1zm-6 0h4v-1h-4v1zm-7 2.5a.5.5 0 10-1.002.002A.5.5 0 0015 23.5zm1 0c0 .651-.419 1.201-1 1.408V26h-1v-1.092c-.581-.207-1-.757-1-1.408 0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5zm-6 3.496l8.997.004.001-2H17v-1h1.998l.001-1H17v-1h1.999L19 20.004 10.003 20 10 26.996zM11 19l6.998.003v-3.426c0-.818-.666-1.414-1.063-1.696a4.362 4.362 0 00-2.435-.78h-.001c-1.765 0-3.497 1.225-3.498 2.474L11 19zm-2 8.496l.003-7.996c0-.133.053-.26.146-.354A.504.504 0 019.503 19H10l.001-3.425c.001-1.989 2.375-3.474 4.498-3.474h.001a5.33 5.33 0 013.014.964c.958.681 1.485 1.573 1.484 2.513v3.426h.502a.5.5 0 01.5.5l-.003 7.996c0 .133-.053.26-.146.354a.504.504 0 01-.354.146L9.5 27.996a.5.5 0 01-.5-.5zM29 18h2v-1h-2v1zm-7 0h6v-1h-6v1z" fill="#FFF"></path>
        </g>
      </svg>
    ),
  },
  {
    name: 'API Gateway',
    svg: (
      <svg width="80" height="80" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-API-Gateway_32_svg__a">
            <stop stopColor="#4D27A8" offset="0%"></stop>
            <stop stopColor="#A166FF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-API-Gateway_32_svg__a)"></path>
          <path d="M19 28h2v-1h-2v1zM14 7.262l-7 3.04v20.055l7 2.439V7.262zM15 13v14h2v1h-2v5.5a.5.5 0 01-.664.472l-8-2.787A.5.5 0 016 30.713V9.974c0-.199.118-.379.301-.458l8-3.474A.5.5 0 0115 6.5V12h2v1h-2zm18-2.698l-7-3.04v25.534l7-2.439V10.302zm1-.328v20.739a.5.5 0 01-.336.472l-8 2.787a.507.507 0 01-.454-.064.5.5 0 01-.21-.408V28h-2v-1h2V13h-2v-1h2V6.5a.5.5 0 01.699-.458l8 3.474a.499.499 0 01.301.458zM19 13h2v-1h-2v1zm4.975 2.658l-.95-.316-3 9 .95.316 3-9zm-4.829 7.196l-3-3a.502.502 0 010-.708l3-3 .708.708-2.647 2.646 2.647 2.646-.708.708z" fill="#FFF"></path>
        </g>
      </svg>
    ),
  },
  {
    name: 'CloudFront',
    svg: (
      <svg width="80" height="80" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-CloudFront_32_svg__a">
            <stop stopColor="#4D27A8" offset="0%"></stop>
            <stop stopColor="#A166FF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-CloudFront_32_svg__a)"></path>
          <path d="M28 26.497c0-.828-.673-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5zm1 0a2.503 2.503 0 01-2.5 2.5 2.503 2.503 0 01-2.5-2.5 2.503 2.503 0 012.5-2.501c1.379 0 2.5 1.122 2.5 2.5zm-14-8.004c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .828.673 1.501 1.5 1.501s1.5-.673 1.5-1.5zm1 0a2.503 2.503 0 01-2.5 2.502 2.503 2.503 0 01-2.5-2.502 2.503 2.503 0 012.5-2.5c1.379 0 2.5 1.122 2.5 2.5zm4-8.003c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zm-1 0a2.503 2.503 0 012.5-2.501c1.379 0 2.5 1.122 2.5 2.501a2.503 2.503 0 01-2.5 2.501 2.503 2.503 0 01-2.5-2.5zm14 9.504c0-4.638-2.485-8.93-6.494-11.25-.721.145-1.416.344-2.28.657l-.34-.94a19.87 19.87 0 011.233-.405A12.95 12.95 0 0020 6.99c-.844 0-1.675.087-2.487.246.587.343 1.108.686 1.615 1.071l-.604.797c-.715-.543-1.457-1-2.426-1.51a13.016 13.016 0 00-9.007 10.963 17.602 17.602 0 013.116-.349l.025 1a16.32 16.32 0 00-3.218.389c-.004.132-.014.267-.014.398 0 4.335 2.146 8.33 5.676 10.736-.627-1.87-.95-3.638-.95-5.36 0-.985.169-1.793.347-2.649l.124-.602.981.193-.125.614c-.176.839-.327 1.562-.327 2.443 0 1.952.432 3.973 1.302 6.166a12.844 12.844 0 009.978.821c.502-.99.875-1.927 1.189-3.009l.961.28c-.228.787-.49 1.5-.801 2.21.804-.361 1.564-.81 2.279-1.33-.173-.426-.35-.85-.554-1.26l.895-.446c.171.343.313.701.463 1.054C31.335 27.377 33 23.83 33 19.995zm1 0c0 4.365-1.982 8.403-5.44 11.079a13.69 13.69 0 01-4.042 2.173c-1.44.5-2.961.754-4.518.754-2.3 0-4.584-.573-6.606-1.659A13.98 13.98 0 016.029 19.15C6.37 13.303 10.377 8.245 16 6.57c3.527-1.063 7.589-.632 10.842 1.208A14.015 14.015 0 0134 19.994zm-15.343-7.272l-.658-.753c-1.12.978-1.992 2.017-3.01 3.586l.838.544c.965-1.485 1.784-2.464 2.83-3.377zm-1.845 7.431c2.296.788 4.299 2.047 6.305 3.96l.69-.722c-2.113-2.018-4.233-3.347-6.67-4.184l-.325.946zm7.011-6.828c1.876 2.862 2.933 6.005 3.14 9.34l-.998.061c-.196-3.158-1.198-6.136-2.978-8.852l.836-.549z" fill="#FFF"></path>
        </g>
      </svg>
    ),
  },
];

function SkillIconsCloud() {
  return (
    <div className="skill-icons-panel">
      {skills.map((skill) => (
        <div className="skill-icon-card" key={skill.name}>
          <div className="skill-icon-svg">{skill.svg}</div>
          <div className="skill-icon-label">{skill.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SkillIconsCloud;