import React, { useState, useEffect } from 'react';
import './UserJourney.css';
import { useNavigate } from 'react-router-dom';



const UserJourney = ({ activeSlide }) => {
  const progressBarItems = [
    { title: 'Strengths', className: 'stren' },
    { title: 'Weaknesses', className: 'weak' },
    { title: 'Opportunities', className: 'oppo' },
    { title: 'Threats', className: 'threa' },
  ];

  const [checkboxes, setCheckboxes] = useState(
    progressBarItems.map((_, index) => index === 0)
  );

  const navigate = useNavigate();
  const [factors, setFactors] = useState(['']);
  const [weaknesses, setWeaknesses] = useState(['']);
  const [opportunities, setOpportunities] = useState(['']);
  const [threats, setThreats] = useState(['']);

  useEffect(() => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((_, index) => index <= activeSlide)
    );
  }, [activeSlide]);

  const handleNextSlide = () => {
    // Perform validation check here
    if (activeSlide === 0 && factors[0] === '') {
      // If the current slide is the first slide and factors input is empty, prevent navigation
      return;
    }

    if (activeSlide === 1 && weaknesses[0] === '') {
      // If the current slide is the second slide and weaknesses input is empty, prevent navigation
      return;
    }

    if (activeSlide === 2 && opportunities[0] === '') {
      // If the current slide is the third slide and opportunities input is empty, prevent navigation
      return;
    }

    // Proceed to the next slide
    navigate(`/slides/${activeSlide + 1}`);
  };

  const handleCheckResults = () => {
    navigate('/results', {
      state: {
        factors,
        weaknesses,
        opportunities,
        threats,
      },
    });
  };
  return (
    <div className="user-journey"         style={{ fontFamily: 'Nunito, sans-serif' }}
    >
      <h3 className="progress">Progress bar</h3>
      <div className="progress-bar">
        <div className="progress-line"></div>
        <div className="progress-dots">
          {progressBarItems.map((item, index) => (
            <div
              key={index}
              className={`progress-dot${activeSlide >= index ? ' active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="progress-labels">
        {progressBarItems.map((item, index) => (
          <div
            key={index}
            className={`progress-label${
              activeSlide === index ? ' active' : ''
            } ${item.className}`}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="checkboxes-container">
        {checkboxes.map((checkbox, index) => (
          <div key={index} className={`checkbox${checkbox ? ' active' : ''}`}>
            {checkbox && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="checkbox-icon"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <button className="result" >
        Results loading
      </button>
    </div>
  );
};

export default UserJourney;
