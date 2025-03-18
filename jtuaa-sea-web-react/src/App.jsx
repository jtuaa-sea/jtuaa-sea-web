import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Router>
      <header>
        <div className="container">
          <div className="logo">
            <h1>JTUAA Seattle</h1>
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
              <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
              <li><Link to="/membership" onClick={closeMenu}>Membership</Link></li>
              <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </nav>
          <div className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

// Placeholder components
const Home = () => (
  <>
    <section className="hero">
      <div className="container">
        <h2>Welcome to JiaoTong and ChiaoTung University Alumni Association</h2>
        <h3>Greater Seattle Area</h3>
        <p>Connecting alumni and building a stronger community</p>
        <Link to="/about" className="btn">Learn More</Link>
      </div>
    </section>

    <section className="features">
      <div className="container">
        <div className="feature-box">
          <i className="fas fa-users"></i>
          <h3>Community</h3>
          <p>Join our vibrant community of JiaoTong and ChiaoTung University alumni in the Greater Seattle Area.</p>
        </div>
        <div className="feature-box">
          <i className="fas fa-calendar-alt"></i>
          <h3>Events</h3>
          <p>Participate in our regular events, networking opportunities, and social gatherings.</p>
        </div>
        <div className="feature-box">
          <i className="fas fa-graduation-cap"></i>
          <h3>Education</h3>
          <p>Access to educational resources, career development, and mentorship programs.</p>
        </div>
      </div>
    </section>
  </>
)

const About = () => <div>About Page</div>
const Events = () => <div>Events Page</div>
const Membership = () => <div>Membership Page</div>
const Gallery = () => <div>Gallery Page</div>
const Contact = () => <div>Contact Page</div>

export default App
