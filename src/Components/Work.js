import React, { useState } from 'react';
import { Button, TextField, AppBar, Toolbar, Typography } from '@mui/material';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';  // Imported FaArrowUp for Back to Top
import './Work.css';  // Import CSS for styles and animations

const Work = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="work-container">
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" className="navbar-title">Flamboyant Landing</Typography>
          <div className="navbar-links">
            <Button color="inherit" className="navbar-link" onClick={() => scrollToTop()}>Home</Button>
            <Button color="inherit" className="navbar-link" onClick={() => scrollToSection('about')}>About</Button>
            <Button color="inherit" className="navbar-link" onClick={() => scrollToSection('services')}>Services</Button>
            <Button color="inherit" className="navbar-link" onClick={() => scrollToSection('contact')}>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to the Future</h1>
          <p className="hero-description">Explore our extraordinary services with a touch of style.</p>
          <div className="search-bar">
            <TextField
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              fullWidth
              className="search-input"
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
              <FaSearch />
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about-section">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel turpis at purus auctor sollicitudin. Nullam quis varius orci. In hendrerit, urna at varius scelerisque, metus lorem venenatis turpis, vel dictum enim neque at nisl. Vivamus non dolor est.</p>
        <p>Etiam et magna risus. Cras scelerisque, magna in volutpat vestibulum, ante justo sodales nisl, eget tincidunt lorem dui sed libero. Ut vitae elit et quam fermentum convallis.</p>
      </div>

      {/* Services Section */}
      <div id="services" className="services-section">
        <h2>Our Services</h2>
        <p>We provide cutting-edge solutions in technology, design, and digital marketing. Let us help you shape the future with innovative services that push the boundaries of what's possible.</p>
        <p>Our services include website development, app development, branding, social media strategies, and much more. We are committed to excellence and delivering results that matter.</p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or want to know more about our services, feel free to reach out. We'd love to hear from you!</p>
        <p>Email us at: contact@flamboyantlanding.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      <div className="social-media">
        <Button href="https://facebook.com" target="_blank" className="social-button">
          <FaFacebook />
        </Button>
        <Button href="https://twitter.com" target="_blank" className="social-button">
          <FaTwitter />
        </Button>
        <Button href="https://instagram.com" target="_blank" className="social-button">
          <FaInstagram />
        </Button>
      </div>

      {/* Back to Top Button */}
      <Button className="back-to-top" onClick={scrollToTop} title="Back to Top">
        <FaArrowUp />  {/* Added FaArrowUp for Back to Top icon */}
      </Button>
    </div>
  );
};

export default Work;
