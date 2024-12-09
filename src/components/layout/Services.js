import React from 'react';

const Services = () => {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I Do</h2>
      <div className="services">
        <div className="service">
          <h3>Full Stack Development</h3>
          <p>
            I build robust and scalable web applications using modern
            technologies like C#, JavaScript, React,React Native, Node.js, and Express. My
            expertise ensures seamless integration of front-end and back-end
            systems.
          </p>
        </div>
        <div className="service">
          <h3>Mobile Application Development</h3>
          <p>
            I create intuitive and user-friendly mobile apps using React Native,Node.js
            focusing on performance and responsiveness across platforms like
            iOS and Android.
          </p>
        </div>
        <div className="service">
          <h3>Database Management</h3>
          <p>
            Proficient in database technologies like NoSql,MongoDB and SQL Server, I
            design and manage efficient data structures to optimize
            application performance.
          </p>
        </div>
        <div className="service">
          <h3>Cloud and DevOps</h3>
          <p>
            Skilled in deploying and maintaining applications on cloud
            platforms, I leverage tools like Docker, Kubernetes, and CI/CD
            pipelines to ensure smooth development workflows.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};

export default Services;
