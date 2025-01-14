import Home from './Home.jsx'
import Header from './Header.jsx'
import About from './About.jsx'
import Work from './Work.jsx'
import Education from './Education.jsx'
//import Footer from './Footer.jsx'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Work />
      <Education />
      {/*<Footer />*/}
    </>
  )
}

export default HomeLayout