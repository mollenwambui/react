import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Introduction from './components/Introduction';
import UserGuide from './components/UserGuide';
import CheckResults from './components/ResultsPage';
import Export from './components/Export';
import Navbar from './components/Navbar';
import { BrowserView, MobileView } from 'react-responsive';

const App = () => {
  const [content, setContent] = useState(null);

  const handleCheckResultsSubmit = (data) => {
    setContent(data);
  };

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      offset: -100,
    });
  };

  return (
    <Router>
      <div>
        <Navbar scrollToSection={scrollToSection} />
        <div className="scrollable-content">
          <div className="card" id="introduction">
            <Introduction />
          </div>
          <div className="card3" id="user-guide">
            <UserGuide />
          </div>
          <div className="card4">
            <CheckResults onSubmit={handleCheckResultsSubmit} />
            {content && (
              <MobileView>
                <Export content={content} />
              </MobileView>
            )}
          </div>
          {content && (
            <div className="card4" id="export">
              <BrowserView>
                <Export content={content} />
              </BrowserView>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
