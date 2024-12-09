import ProjectImage from '../../assets/img/project/3ReactWebsite/WhoIam.png';
import DemoVideo from '../../assets/video//ReactWebSite_compressed.mov';

const project3 = {

  /* Project ID */
  id: 3,

  /* Project Title */
  title: 'React Portfolio Website',

  /* Project Main Image for Intro */
  ProjectImage: ProjectImage,

  /* Project Description */
  description: 'This project is a portfolio website built with React, showcasing my skills, projects, and professional journey as a web developer.',

  /* Project Purpose */
  purpose: 'The purpose of this project is to provide a responsive, interactive platform where visitors can learn about my skills, view my projects, and connect with me.',

  /* Roles */
  features: [
    {
      feature: "Homepage",
      info: [
        "Provides a personal introduction with an engaging design.",
        "Highlights key achievements and expertise."
      ]
    },
    {
      feature: "Projects",
      info: [
        "Displays a portfolio of completed projects with images, descriptions, and technologies used.",
        "Includes links to live demos and GitHub repositories."
      ]
    },
    {
      feature: "Skills",
      info: [
        "Highlights technical skills with visually appealing sections.",
        "Categorizes skills by languages, frameworks, and tools."
      ]
    },
    {
      feature: "Contact",
      info: [
        "Enables users to reach out via a contact form.",
        "Includes links to social media and GitHub."
      ]
    },
  ],

  /* Project Carousel Images */
  images: [
    require('../../assets/img/project/3ReactWebsite/Intro.png'),
    require('../../assets/img/project/3ReactWebsite/WhatIDO.png'),
    require('../../assets/img/project/3ReactWebsite/WhoIam.png'),
    require('../../assets/img/project/3ReactWebsite/Work.png'),
    require('../../assets/img/project/3ReactWebsite/Project.png'),
    require('../../assets/img/project/3ReactWebsite/Crusel.png'),
    require('../../assets/img/project/3ReactWebsite/WhatIUsed.png'),
    require('../../assets/img/project/3ReactWebsite/DemoVideo.png'),
    require('../../assets/img/project/3ReactWebsite/Footer.png'),
  ],
  
  /* Tools for What I Used Section */
  tools: {
    languages: ['JavaScript', 'CSS', 'HTML'],
    frameworks: ['React', 'Bootstrap', 'Material-UI'],
    devops: ['GitHub', 'Netlify', 'VS Code'],
  },
  
  /* Video Section */
  video: DemoVideo,

  /* GitHub Code Source */
  githubLink: 'https://github.com/ramazan-carpan/RamazanCarpan.github.io.git',

};

export default project3;
