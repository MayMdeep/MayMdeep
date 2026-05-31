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
import person_project from "./assets/images/Projects/thamrah1.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine, RiMessage2Line } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaLanguage, FaGraduationCap } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";

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
      link: "#languages",
      icon: FaLanguage,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#experience",
      icon: AiOutlineHistory,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#education",
      icon: FaGraduationCap,
    },
    {
      link: "#recommendations",
      icon: RiMessage2Line,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Product Owner & Software Engineer",
    subtitle: "B2B/B2C SaaS Specialist | Agile Leader | Trilingual: Arabic, English & German",
    firstName: "MAY",
    LastName: "DEEB",
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
        name: "Leadership",
        para: "Proven leadership experience managing cross-functional teams and steering product strategy.",
        logo: services_logo1,
      },
      {
        name: "B2B",
        para: "Deep experience building business-to-business SaaS products and integrations.",
        logo: services_logo2,
      },
      {
        name: "B2C",
        para: "Built consumer-facing platforms with strong UX and scalable backend systems.",
        logo: services_logo3,
      },
      {
        name: "SaaS",
        para: "Design and operate multi-tenant SaaS platforms with monitoring and deployment pipelines.",
        logo: services_logo1,
      },
      {
        name: "ERPs",
        para: "Experience with ERP integrations and business process automation.",
        logo: services_logo2,
      },
      {
        name: "Decision-making",
        para: "Data-driven decision-making with prioritization frameworks and stakeholder alignment.",
        logo: services_logo3,
      },
      {
        name: "Agile",
        para: "Agile practitioner with product ownership and scrum facilitation experience.",
        logo: reactjs,
      },
      {
        name: "Scrum",
        para: "Hands-on Scrum implementation across product teams and distributed teams.",
        logo: nodejs,
      },
      {
        name: "System Architecture",
        para: "Designing resilient architectures for scale, security, and maintainability.",
        logo: sqlserver,
      },
      {
        name: "Full-Stack Dev",
        para: "End-to-end development from frontend interfaces to backend services and databases.",
        logo: reactjs,
      },
      {
        name: "Laravel",
        para: "Experienced in building robust and scalable web applications using Laravel, including RESTful APIs and backend services.",
        logo: laravel,
      },
      {
        name: "React",
        para: "Proficient in developing dynamic and responsive user interfaces with React.js, leveraging hooks and state management libraries.",
        logo: reactjs,
      },
      {
        name: "ASP.NET Core",
        para: "Backend development and APIs using ASP.NET Core for enterprise-grade services.",
        logo: services_logo1,
      },
      {
        name: "Odoo",
        para: "Custom Odoo modules and ERP workflows.",
        logo: services_logo2,
      },
      {
        name: "Elasticsearch",
        para: "Search and analytics using Elasticsearch for performant retrieval.",
        logo: services_logo3,
      },
      {
        name: "Pusher",
        para: "Realtime messaging and event-driven updates using Pusher.",
        logo: services_logo1,
      },
      {
        name: "JIRA",
        para: "Project tracking, sprint planning and issue management with JIRA.",
        logo: services_logo2,
      },
      {
        name: "Zoho CRM",
        para: "CRM integration and automation using Zoho platforms.",
        logo: services_logo3,
      },
      {
        name: "Docker",
        para: "Containerization for consistent environments and deployments.",
        logo: services_logo1,
      },
      {
        name: "Git",
        para: "Version control and collaborative workflows using Git.",
        logo: services_logo2,
      },
      {
        name: "Flutter",
        para: "Cross-platform mobile app development with Flutter.",
        logo: services_logo3,
      },
      {
        name: "Firebase",
        para: "Realtime databases, auth, and cloud functions using Firebase.",
        logo: services_logo1,
      },
      {
        name: "RESTful APIs",
        para: "Designing and documenting RESTful APIs for interoperability.",
        logo: services_logo2,
      },
      {
        name: "German Technical Communication",
        para: "Technical writing and communication in German for engineering teams.",
        logo: services_logo3,
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
        title: "Product Ownership & Strategy",
        para: "Define product vision, prioritization, and go-to-market strategy for B2B/B2C SaaS products.",
        logo: services_logo1,
      },
      {
        title: "Project & Team Leadership",
        para: "Lead cross-functional teams to deliver projects on time while fostering growth and best practices.",
        logo: services_logo2,
      },
      {
        title: "Full-Stack & System Architecture",
        para: "Design and build robust full-stack systems; support German-speaking teams for technical collaboration.",
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
        title: "Redeemly SaaS Platform",
        link: "https://redeemly.com",
        images: [person_project],
        description: "Product ownership and platform development for a SaaS voucher and rewards platform.",
      },
      {
        title: "UltraWares ISP Billing System",
        link: "",
        images: [rfq1],
        description: "ISP billing and management system developed for UltraWares / Pharaon Group.",
      },
      {
        title: "Alfahad Online Platform",
        link: "",
        images: [bazel1],
        description: "E-commerce and internal platforms for Alfahad Regional Company.",
      },
      {
        title: "Square Tech Educational Platform",
        link: "",
        images: [rent1],
        description: "Educational platform and learning tools developed while at Square Tech Company.",
      },
      {
        title: "Syria Hackathon 2025 Finalist Project",
        link: "",
        images: [thamrah1],
        description: "Project that reached Top 12 in Syria Hackathon 2025.",
      },
    ],
  }
  ,

  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a skilled professional to bring your project to life? I offer expertise in product ownership, full-stack development, and team leadership for international and German-speaking teams.",
    btnText: "Contact Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "may.m.deep@gmail.com",
        icon: GrMail,
        link: "mailto:may.m.deep@gmail.com",
      },
      {
        text: "+966 5X XXX XXXX",
        icon: MdCall,
        link: "https://wa.me/9665XXXXXXX",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/may-deeb",
      },
      {
        text: "Damascus, Syria",
        icon: TbSmartHome,
        link: "",
      },
    ],
    note: "Open to German-speaking roles and international remote work",
  },
  Footer: {
    text: "مرحبا • Hello • Hallo — All © Copy Right Reserved 2026",
  },
  languages: {
    title: "Languages",
    subtitle: "LANGUAGE SKILLS (CEFR)",
    languages: [
      {
        name: "Arabic",
        level: "Native",
        details: "",
      },
      {
        name: "English",
        level: "C1",
        details: "Listening, Speaking, Writing — Reading B1",
      },
      {
        name: "German",
        level: "B1",
        details: "Listening, Reading, Speaking — Writing: B2 (strength)",
        highlight: "Writing: B2",
      },
    ],
  },
  workExperience: {
    title: "Work Experience",
    subtitle: "PROFESSIONAL TIMELINE",
    roles: [
      {
        role: "Product Owner",
        company: "Redeemly.com",
        period: "Apr 2025–Present",
        location: "Remote from Riyadh",
      },
      {
        role: "Project Manager",
        company: "UltraWares – Pharaon Group",
        period: "Sep 2023–Mar 2025",
        location: "Damascus",
      },
      {
        role: "Backend Team Lead",
        company: "Alfahad Regional Company",
        period: "Jan 2022–Sep 2023",
        location: "Damascus",
      },
      {
        role: "Software Developer",
        company: "Square Tech Company",
        period: "Nov 2021–Dec 2022",
        location: "Kuwait",
      },
    ],
  },
  education: {
    title: "Education & Certifications",
    subtitle: "ACADEMIC & PROFESSIONAL",
    items: [
      {
        title: "BSc IT Engineering (AI)",
        org: "Damascus University",
        period: "2016–2024",
      },
      {
        title: "Generative AI for Product Managers",
        org: "LinkedIn",
        period: "2026",
      },
      {
        title: "AI-Driven Project Manager",
        org: "LinkedIn",
        period: "2026",
      },
      {
        title: "Syria Hackathon 2025 Top 12 Finalist",
        org: "Syria Hackathon",
        period: "2025",
      },
    ],
  },
  recommendations: {
    title: "Recommendations",
    subtitle: "ENDORSEMENTS",
    items: [
      {
        name: "Ammar Joukhadar",
        title: "Dean of ITE",
        text: "",
      },
      {
        name: "Anas Qudamani",
        title: "CEO, Redeemly",
        text: "",
      },
    ],
  },
};
