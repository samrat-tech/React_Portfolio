import React from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import data from "./components/portfolio/data"


function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Education />
      <Portfolio props = {data}/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
