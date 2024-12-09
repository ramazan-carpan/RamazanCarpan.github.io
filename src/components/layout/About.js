import React from 'react';
import ProfilPhoto from '../../assets/img/profil/ProfilPhoto.jpg';

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Full Stack Developer</p>
      <div className="about-me__body">
          <p>As a Full Stack Developer with a strong foundation in modern web and mobile application development, I specialize in creating robust, scalable, and user-centric solutions. Proficient in a wide range of programming languages and frameworks including HTML, CSS, JavaScript, Node.js, React Native, C#, and Python, I thrive on solving complex problems and continuously learning new technologies.</p>
          <p>My expertise extends to database management with SQL Server and MongoDB, and I'm skilled in implementing responsive design and agile methodologies. I've developed applications ranging from restaurant order management systems to staff scheduling apps, utilizing technologies like Express.js, ASP.NET Core MVC, and Entity Framework Core.</p>
          <p>Before transitioning into tech, I worked as a Registered Nurse in high-pressure emergency environments. This experience honed my critical thinking, teamwork, and communication skills—attributes that I bring to every project in the tech industry. My background in healthcare provides a unique perspective, allowing me to approach software development with empathy and a focus on user needs.</p>
          <p>I'm certified with an IBM Data Science Professional Certificate and hold multiple programming certifications from TAFE NSW. Currently, I'm part of the team at Gallipoli HomeCare as a Lifestyle Coordinator Team Member, where I enhance team collaboration and organizational skills.</p>
          <p>I'm passionate about contributing to innovative projects and am always open to connecting with like-minded professionals. Let's collaborate to build solutions that make a difference!</p>
      </div>
      <img src={ProfilPhoto} alt="Profile" className="about-me__img" />
    </section>
  );
};

export default About;
