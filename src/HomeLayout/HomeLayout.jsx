import Home from './Home.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Work from './Work.jsx'
import Education from './Education.jsx'
import Testimonial from './Testimonial.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Work />
      <Education />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default HomeLayout