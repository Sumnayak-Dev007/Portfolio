
import code_icon from './code-icon.png';
import api_icon from './api_icon.png'
import logo from './logo.png'
import mysql_icon from './mysql_icon.png'
import react_icon from './react_icon.jpeg'
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
        title: 'E-Commerece ',
        description: 'Full Stack ',
        bgImage: '/work-1.jpg',
    },
    {
        title: 'Blogging Site',
        description: 'Full Stack ',
        bgImage: '/work-2.png',
    },
    {
        title: 'Game Design',
        description: 'Frontend project',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'Frontend project',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web Design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.server_icon, title: 'Backend Development', description: 'Backend development is the foundation of any web application...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX Design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.api_icon, title: 'API Design', description: 'An API (Application Programming Interface) is a way for two software systems to communicate with each other....', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Python, Django, MySQL, C, C++' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bachelor of Computer Applications' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mysql_icon, assets.react_icon, assets.git
];