import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import portfolioItems from '../../data/projets/index';

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from the URL

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component loads
  }, []);

  // Use .find() to locate the project by ID
  const project = portfolioItems.find((item) => item.id === parseInt(id, 10));

  if (!project) {
    return (
      <section className="project-details text-center">
        <h2 className="error-title">Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <a href="/" className="error-link">Go Back to Home</a>
      </section>
    );
  }

  return (
    <div className="project-details">
      <div className="project-header">
        {/* Intro Section */}
        <section className="about-me" id="about">
          <h2 className="section__title section__title--about">MVC Design</h2>
          <p className="section__subtitle section__subtitle--about">{project.title}</p>
          <div className="about-me__body">
            <div className="project-purpose">
              <h2>Project Purpose</h2>
              <p>{project.purpose}</p>
            </div>
            <div className="project-features">
              <h2>Features</h2>
              <ul>
                {project.features.map((featureItem, index) => (
                  <li key={index}>
                    <strong>{featureItem.feature}:</strong>
                    <ul>
                      {featureItem.info.map((infoDetail, idx) => (
                        <li key={idx}>{infoDetail}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img src={project.ProjectImage} alt="Profile" className="about-me__img" />
        </section>
      </div>

      {/* Photo Section */}
      <section className="project-photos">
        <h2>Photos</h2>
        <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="carousel-image-container">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>


      {/* What I Used Section */}
      <section className="my-services">
        <h2 className="section__title section__title--services">What I Used</h2>
        <div className="services">
          <div className="service">
            <h3>Languages</h3>
            <ul>
              {project.tools.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className="service">
            <h3>Frameworks & Libraries</h3>
            <ul>
              {project.tools.frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
          <div className="service">
            <h3>Cloud and DevOps</h3>
            <ul>
              {project.tools.devops.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="demo-video">
        <h2>Demo Video</h2>
        <div className="video-container">
          <video controls className="video">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Source Section */}
      <section className="source">
        <h2>Source</h2>
        <div className="source-links">
          {/* GitHub Repository */}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <img
              src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
              alt="GitHub"
              className="source-icon"
            />
            <h3>View Source Code</h3>
          </a>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetails;
