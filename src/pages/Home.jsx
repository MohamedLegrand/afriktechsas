import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Footer from '../components/sections/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default Home
