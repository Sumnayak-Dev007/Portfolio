'use client'

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import SkillGrid from "./components/SkillGrid";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <SkillGrid/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
