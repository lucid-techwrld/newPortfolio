import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Work from './Work.jsx';
import Education from './Education.jsx';
import Testimonial from './Testimonial.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const HomeLayout = () => {
  return (
    <>
      <Header />
        <Home id="home" />
        <About id="about" />
        <Work id="work" />
        <Education id="education" />
        <Testimonial id="testimonial" />
        <Contact id="contact" />
        <Footer id="footer" />
    </>
  );
}

export default HomeLayout;