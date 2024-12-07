import React from 'react';
import { Link } from 'react-router-dom';
import portfolioItems from '../../data/projets/index';

const Work = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        {portfolioItems.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            state={{ project }}
            className="portfolio__item"
          >
            <div className="portfolio__card">
              <img
                src={project.ProjectImage}
                alt={project.title}
                className="portfolio__img"
              />
              <div className="portfolio__info">
                <h3>{project.title}</h3>
                <p><strong>{project.title}</strong></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
