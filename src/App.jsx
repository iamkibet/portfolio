import { BrowserRouter } from 'react-router-dom';
import { About, Hero, Navbar, Works, Footer } from './components'

const App = () => {
  

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
