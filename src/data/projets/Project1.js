import Project1Image from '../../assets/img/project/1ReservationSystem/ReservationSystem.png';
import ReservationSystemVideo from '../../assets/video/RestaurantResevationMVC.mov';

const project1 = {
  id: 1,
  title: 'Restaurant Reservation Management',
  description: 'This is a detailed description of Portfolio Item 1. It is designed to showcase key features and technologies used.',
  ProjectImage: Project1Image,
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
  technologies: ['React', 'Node.js', 'CSS', 'MongoDB'],
  purpose: 'The purpose of this project was to build a responsive web application for managing restaurant reservations.',
  features: [
    'Guest: Will be able to make a reservation.',
    'Member: Will be able to create reservations without entering personal information, view existing reservations, and search.',
    'Staff: Will be able to create, edit, and delete reservations.',
    'Admin: Will be able to create sitting times and assign "member" roles to "staff".',
    'Manager: Will be able to assign the "member" role to Admin.',
  ],
  video: ReservationSystemVideo,
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
};

export default project1;
