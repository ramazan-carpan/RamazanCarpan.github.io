import React from 'react';
import { Link } from 'react-router-dom';
import ProfilPhoto from '../../assets/img/profil/ProfilPhoto.jpg';
import Project1 from '../../assets/img/project/1ReservationSystem/ReservationSystem.png';


const Work = () => {
  const portfolioItems = [
    { id: 1, img: Project1, title: 'Restaurant Reservation Management', description: 'C#,MVC,SQL,Razor' },
    { id: 1, img: Project1, title: 'Restaurant Reservation Management', description: 'C#,MVC,SQL,Razor' },
    { id: 1, img: Project1, title: 'Restaurant Reservation Management', description: 'C#,MVC,SQL,Razor' },
  ];

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <div className="portfolio">
        {portfolioItems.map((item) => (
          <Link
            key={item.id}
            to={`/project/${item.id}`} // Navigate to the dynamic project details page
            className="portfolio__item"
          >
            <img
              src={item.img}
              alt={item.title}
              className="portfolio__img"
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;
