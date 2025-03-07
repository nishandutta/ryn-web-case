import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Works from './components/Works'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

//desktop site
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
