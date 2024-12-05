import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import portfolioItems from '../../data/projets/index';

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from the URL

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component loads
  }, []);


  const project = portfolioItems[id];

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
      <h2>Features</h2>
      <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
           </div>
      <img src={project.ProjectImage} alt="Profile" className="about-me__img" />
    </section>
      </div>
      
      

      {/* Photo Section*/}
      <section className="project-photos">
        <h2>Photos</h2>
        <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {project.images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{ maxHeight: '800px', objectFit: 'cover' }}
                />
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
        <div className='video-container'>
          <video controls className="video">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
