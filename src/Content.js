// import images
import Hero_person from "./assets/images/Hero/person.png";

// Import statements for logos
import laravel from "./assets/images/Skills/laravel.png";
import php from "./assets/images/Skills/php.jpg";
import sqlserver from "./assets/images/Skills/sqlserver.png";
import mysql from "./assets/images/Skills/mysql.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import expressjs from "./assets/images/Skills/express.png"; // Add this import
import mongodb from "./assets/images/Skills/mongodb.png"; // Add this import

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";


import rfq1 from "./assets/images/Projects/rfq1.png";
import rfq2 from "./assets/images/Projects/rfq2.png";
import rfq3 from "./assets/images/Projects/rfq3.png";
import bazel1 from "./assets/images/Projects/bazel1.png";
import bazel2 from "./assets/images/Projects/bazel2.png";
import bazel3 from "./assets/images/Projects/bazel3.png";
import rent1 from "./assets/images/Projects/rent1.png";
import rent2 from "./assets/images/Projects/rent2.png";
import rent3 from "./assets/images/Projects/rent3.png";
import thamrah1 from "./assets/images/Projects/thamrah1.png";
import thamrah2 from "./assets/images/Projects/thamrah2.png";
import thamrah3 from "./assets/images/Projects/thamrah3.png";
import person_project from "./assets/images/Projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "MAY",
    LastName: "DEEP",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Laravel",
        para: "Experienced in building robust and scalable web applications using Laravel, including RESTful APIs and backend services.",
        logo: laravel,
      },
      {
        name: "React.js",
        para: "Proficient in developing dynamic and responsive user interfaces with React.js, leveraging hooks and state management libraries.",
        logo: reactjs,
      },
      {
        name: "Node.js",
        para: "Skilled in building efficient server-side applications and APIs with Node.js and integrating them with various databases.",
        logo: nodejs,
      },
      {
        name: "Express.js",
        para: "Experienced in creating RESTful APIs and backend services using Express.js, with a focus on performance and scalability.",
        logo: expressjs,
      },
      {
        name: "MongoDB",
        para: "Proficient in designing and managing NoSQL databases with MongoDB, including schema design, indexing, and aggregation pipelines.",
        logo: mongodb,
      },
      {
        name: "PHP",
        para: "Strong background in server-side scripting and web development using PHP, with extensive experience in MVC frameworks.",
        logo: php,
      },
      {
        name: "MySQL",
        para: "Proficient in designing and managing relational databases, writing complex queries, and optimizing database performance with MySQL.",
        logo: mysql,
      },
      {
        name: "SQL Server",
        para: "Experienced in working with SQL Server, including database design, stored procedures, and performance optimization.",
        logo: sqlserver,
      },
      // {
      //   name: "Python",
      //   para: "Versatile in Python programming for backend development, data analysis, and scripting automation tasks.",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  }
  ,
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Project Management & Agile Coaching",
        para: "With experience as a Project Manager and Scrum Master, I provide expert guidance in managing projects with Agile methodologies. I ensure smooth project delivery through effective planning, resource management, and continuous team collaboration, fostering a high-performing work environment.",
        logo: services_logo1,
      },
      {
        title: "Team Leadership & Development",
        para: "As a Team Lead, I focus on empowering teams, optimizing workflows, and driving technical excellence. I support developers through mentorship, ensuring efficient development cycles and successful project outcomes. My leadership ensures alignment with business goals and fosters team growth.",
        logo: services_logo2,
      },
      {
        title: "Web & Backend Development",
        para: "I offer full-stack web and backend development services, specializing in React, Laravel, and database systems. My focus is on building robust and scalable applications, from the initial concept to deployment, ensuring seamless user experiences and efficient backend solutions.",
        logo: services_logo3,
      },
    ],
  },


  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Thamrah",
        link: "https://thamrah.net/en",
        images: [thamrah1, thamrah2, thamrah3], // Array of images
        description: "Thamrah is an educational website aimed at facilitating the understanding of university subjects for students. ",
      },
      {
        title: "Q Quotation",
        link: "https://www.qquotation.com/#home",
        images: [rfq1, rfq2, rfq3], // Array of images
        description: "Q Quotation is a B2B platform that provides a streamlined procurement solution through an intuitive RFQ/RFP system",
      },
      {
        title: "Bathel Al Nada Charity",
        link: "https://bathelalnada.com/en",
        images: [bazel1, bazel2, bazel3], // Array of images
        description: "AL Nada Association for Charitable Activities, a non-profit public benefit association, licensed by the Ministry of Social Affairs, by Ministerial Resolution No. 25/A of 2022.",
      },
      {
        title: "Rent Chicken",
        link: "https://www.winshakes.com",
        images: [rent1, rent2, rent3], // Array of images
        description: "You can enjoy the experience of raising chickens without having to bear the burden of daily care.",
      },
      {
        title: "Shake Shake",
        link: "https://www.winshakes.com",
        images: [bazel1, bazel1, bazel1], // Array of images
        description: "Unlock a load of surprises with every mystery box – discover products worth double or triple what you paid! Rest easy knowing there are no damaged items,with secure payment methods..",
      },
    ],
  }
  ,

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "may.m.deep@gmail.com",
        icon: GrMail,
        link: "mailto:may.m.deep@gmail.com",
      },
      {
        text: "+963 937532212",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "MayDeep",
        icon: BsFacebook,
        link: "https://www.facebook.com/may.mdeep?mibextid=ZbWKwL",
      },
      {
        text: "MayDeep",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/may-deep-b81202211",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
