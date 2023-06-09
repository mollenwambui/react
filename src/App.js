import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './components/Introduction';
import UserGuide from './components/UserGuide';
import CheckResults from './components/ResultsPage';
import Export from './components/Export';
import Navbar from './components/Navbar';
import UserJourney from './components/UserJourney';

const App = () => {
  const [content, setContent] = useState(null);

  const handleCheckResultsSubmit = (data) => {
    setContent(data);
  };

  return (
    <Router>
      <div>
        <Navbar />
        {/* <UserJourney /> */}
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/user-guide" element={<UserGuide />} />
          <Route
            path="/results"
            element={<CheckResults onSubmit={handleCheckResultsSubmit} />}
          />
          <Route
            path="/export"
            element={content && <Export content={content} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
