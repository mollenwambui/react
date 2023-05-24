import React from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import '../components/Navbar.css';

class Navbar extends React.Component {
  scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50, // Adjust the offset as needed to align with the fixed Navbar
    });
  };

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link
              to="/introduction"
              onClick={() => this.scrollToSection('introduction')}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              to="/user-guide"
              onClick={() => this.scrollToSection('user-guide')}
            >
              Template
            </Link>
          </li>
          <li>
            <Link
              to="/results"
              onClick={() => this.scrollToSection('results')}
            >
              Results
            </Link>
          </li>
          <li>
            <Link
              to="/export"
              onClick={() => this.scrollToSection('export')}
            >
              Export
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
