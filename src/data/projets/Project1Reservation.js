import Project1Image from '../../assets/img/project/1ReservationSystem/ReservationSystem.png';
import ReservationSystemVideo from '../../assets/video/RestaurantResevationMVC_compressed.mov';

const project1 = {

  /* Project ID*/
  id: 1,

  /* Project Title*/
  title: 'Restaurant Reservation Management',

  /* Project Main Image for  intro*/
  ProjectImage: Project1Image,

  /* Project Descroption*/
  description: 'This is a detailed description of Portfolio Item 1. It is designed to showcase key features and technologies used.',
 
  /* Project Purpose*/
  purpose: 'The purpose of this project was to build a responsive web application for managing restaurant reservations.',
   
  /* Roles*/
  features : [
    {
      feature: "Guest",
      info: ["Will be able to make a reservation."]
    },
    {
      feature: "Member",
      info: [
        "Will be able to create reservations without entering personal information.",
        "View existing reservations.",
        "Search."
      ]
    },
    {
      feature: "Staff",
      info: [
        "Will be able to create, edit, and delete reservations."
      ]
    },
    {
      feature: "Admin",
      info: [
        "Will be able to create sitting times.",
        "Assign 'member' roles to 'staff'."
      ]
    },
    {
      feature: "Manager",
      info: [
        "Will be able to assign the 'Member'  and 'Staff' role to Admin."
      ]
    }
  ],

  /* Project Curosel image*/
  images: [
    require('../../assets/img/project/1ReservationSystem/BookingPage.png'),
    require('../../assets/img/project/1ReservationSystem/HomePage.png'),
    require('../../assets/img/project/1ReservationSystem/MenuPage.png'),
    require('../../assets/img/project/1ReservationSystem/SeachPage.png'),
    require('../../assets/img/project/1ReservationSystem/SittingList.png'),
    require('../../assets/img/project/1ReservationSystem/StaffBookingPage.png'),
    require('../../assets/img/project/1ReservationSystem/StaffReservationList.png'),
    require('../../assets/img/project/1ReservationSystem/TimeSlotPage.png'),
    require('../../assets/img/project/1ReservationSystem/UserController.png'),
  ],
   
  /*Tools for  What I used Section */
  tools: {
    languages: ['C#', 'HTML', 'CSS', 'JavaScript'],
    frameworks: [
      'Diagnostics.EntityFrameworkCore v8.0.8',
      'Identity.EntityFrameworkCore v8.0.8',
      'Identity.UI v8.0.8',
      'EntityFrameworkCore.SqlServer v8.0.8',
      'EntityFrameworkCore.Tools v8.0.8',
      'NUnit v3.13.3',
    ],
    devops: ['Azure Sql Server', 'GitHub', 'Docker', 'Azure Database Studio', 'SSMS'],
  },
  
  /* Video section*/
  video: ReservationSystemVideo,

  /* Github Code Source*/
  githubLink:'https://github.com/Bean-Scene-Zachary-and-Alex/Bean-Scene-ReservationSystem',
};

export default project1;
