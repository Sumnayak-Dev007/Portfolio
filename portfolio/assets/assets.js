
import code_icon from './code-icon.png';
import api_icon from './api_icon.png'
import logo from './logo.png'
import mysql_icon from './mysql.png'
import cloud_icon_dark from './cloud_icon_dark.png'
import react_icon from './react_icon.png'
import server_icon from './server_icon.png'
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import me from './me.png'
import download_icon from './download-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {

    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    logo,
    figma,
    cloud_icon_dark,
    api_icon,
    server_icon,
    git,
    mysql_icon,
    react_icon,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    me,
    download_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: 'E-Commerce',
    description: 'Full Stack',
    bgImage: '/work-1.jpg',
    year: "2025",
    tag: "E-commerce",
    link: "https://flexcom.sumanayak.com/",
    features: "An e-commerce platform where users can purchase desired products with seamless payment options.",
    stack: ["Django", "Tailwind", "MySQL","JQuery", "JavaScript", "AWS"],
  },
  {
    title: 'BlogSite',
    description: 'Full Stack',
    bgImage: '/work-2.png',
    year: "2025",
    tag: "BlogSite",
    link: "https://blogsite.sumanayak.com/",
    features: "A dynamic blogging platform for users to post their creative blogs, manage and handle thier profile.",
    stack: ["Django", "Tailwind", "MySQL", "JavaScript", "AWS"],
  },
  {
    title: 'Game Design',
    description: 'Frontend Project',
    bgImage: '/work-3.png',
    year: "2024",
    tag: "Game Zone",
    link: "https://flipbook-jmkh.onrender.com/",
    features: "Browser-based fun game with interactive gameplay, and engaging UI giving users a realistic and immersive experience :)",
    stack: ["JavaScript"],
  },
  {
    title: 'UI/UX Designing',
    description: 'Frontend Project',
    bgImage: '/work-4.png',
    year: "2024",
    tag: "FlipBook",
    link: "https://flipbook-jfru.onrender.com/",
    features: "A Flip Book showcasing realistic page flip animations giving user a realistic and immersive experience.",
    stack: ["HTML", "CSS"],
  }
];




export const serviceData = [
    { icon: assets.web_icon, title: 'Web Design', description: "As a web developer, I create dynamic and functional websites using a combination of front-end and back-end technologies.", link: '' }, //I specialize in building responsive, user-friendly interfaces that enhance the user experience. Whether it's an e-commerce site, a blog, or a custom web application, I bring ideas to life through code.
    { icon: assets.server_icon, title: 'Backend Development', description: "I specialize in building secure, scalable, and high-performing server-side systems that power modern websites and apps.",  link: '' }, //and applications. From designing database structures and managing data flow to integrating authentication and business logic, I ensure smooth communication between the client and the server.
    { icon: assets.ui_icon, title: 'UI/UX Design', description: "UI/UX development focuses on creating the visual elements of a website or application. I specialize in turning design mockups into interactive UI.", link: '' }, //mockups into interactive interfaces using HTML, CSS, and JavaScript. My goal is to ensure that users have a seamless and enjoyable experience while interacting with your product.
    { icon: assets.api_icon, title: 'API Design', description: "I design and build RESTful and modern APIs that act as a bridge between the frontend and backend, ensuring fast and secure data transmission.",  link: '' }, // and secure data transmission. My approach focuses on creating well-structured endpoints, implementing authentication layers, and maintaining scalability for future integrations.
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'HTML, CSS, JavaScript React Js, Next Js, Python, Django, MySQL, C, C++' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Computer Applications' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' },
    { 
    icon: assets.cloud_icon,   // <-- add a cloud/infra icon here
    iconDark: assets.cloud_icon_dark, 
    title: 'DevOps Tools', 
    description: 'AWS, Nginx, Gunicorn, EC2, RDS' 
  }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mysql_icon, assets.react_icon, assets.git
];