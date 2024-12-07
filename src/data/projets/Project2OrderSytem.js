import Project2Image from '../../assets/img/project/2OrderSystemApp/Order.png';
import ReservationSystemVideo from '../../assets/video/OrderManagementApp_compressed.mov';

/* */
const project2 = {
  id: 2,
  /* */
  title: 'Restaurant Order Management App',

  /* Project Main Image for  intro*/
  ProjectImage: Project2Image,

  /* Project Descroption*/
  description: `The Restaurant Order Management App is a comprehensive system designed to manage and streamline restaurant operations, 
  specifically focusing on  orders, and user roles. This project demonstrates advanced mobile app  development skills using 
  React Native, CSS,JavaScript on the front and backend side  is Node.js and MongoDb`,

  /* Project Purpose*/
  purpose: `The purpose of this project was to build a responsive and feature-rich android application for managing restaurant 
  orders, and user roles effectively. It addresses the operational needs of restaurants, offering tailored 
  interfaces for different types of users.`,

  /* Roles*/
  features : [
    {
      feature: "Staff",
      info: [
        "Will be able to create, update and delete  order  based on table"
      ]
    },
    {
      feature: "Admin",
      info: [
        "able to create update and delete  new menu item.",
        "able to create,update and delete  new  staff acount.",
      ]
    },
  ],
  
  /* */
  images: [
    require('../../assets/img/project/2OrderSystemApp/Floor.png'),
    require('../../assets/img/project/2OrderSystemApp/Order.png'),
    require('../../assets/img/project/2OrderSystemApp/Note.png'),
    require('../../assets/img/project/2OrderSystemApp/Admin.png'),
    require('../../assets/img/project/2OrderSystemApp/UserCreate.png'),
    require('../../assets/img/project/2OrderSystemApp/UserEdit.png'),
    require('../../assets/img/project/2OrderSystemApp/UserLIst.png'),
  ],

  /*Tools for  What I used Section */
  tools: {
    languages: ['ReactNative', 'JavaScript', 'CSS', 'Node.js'],
    frameworks: [
      'react: 18.2.0',
      'react-native: 0.74.5',
      'jwt-decode: 3.1.2',
      'jest: 29.7.0',
      'mongodb: 6.10.0',
      'jsonwebtoken: 9.0.2',
    ],
  devops: ['MongoDb', 'Public Server', 'Mongoose', 'MongoDb Compass'],

  
  },
   /* Video section*/
  video: ReservationSystemVideo,
   /* Github Code Source*/
  githubLink:'https://github.com/Bean-Scene-Zachary-and-Alex/Bean-Scene-ReservationSystem',
};

export default project2;
