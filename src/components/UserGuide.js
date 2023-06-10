import React, { useState, useEffect } from 'react';
import '../components/UserGuide.css';
import { useNavigate } from 'react-router-dom';
import 'typeface-nunito';
import UserJourney from './UserJourney';


const UserGuide = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const getCardBackgroundColor = (slideIndex) => {
    switch (slideIndex) {
      case 0:
        return '#FDF7F3';
      case 1:
        return ' #FDF7F3';
      case 2:
        return '#FDF7F3';
      case 3:
        return '#FDF7F3';
      default:
        return '#FDF7F3'; // Default background color if slide index is out of range
    }
  };
  const handleNextSlide = () => {
    let errorMessage = '';
  
    if (activeSlide === 0) {
      // Validate fields for the first slide
      if (factors.some((factor) => factor.trim() === '')) {
        // If any factor field is empty, set the error message
        errorMessage = 'Please fill in your strengths!';
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          strengths: errorMessage
        }));
      } else {
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          strengths: ''
        }));
      }
    } else if (activeSlide === 1) {
      // Validate fields for the second slide
      if (weaknesses.some((weakness) => weakness.trim() === '')) {
        // If any weakness field is empty, set the error message
        errorMessage = 'Please fill in your weaknesses!';
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          weaknesses: errorMessage
        }));
      } else { setErrorMessages((prevErrorMessages) => ({
        ...prevErrorMessages,
        weaknesses: ''
      }));
        
        
      }
    } else if (activeSlide === 2) {
      // Validate fields for the third slide
      if (opportunities.some((opportunity) => opportunity.trim() === '')) {
        // If any opportunity field is empty, set the error message
        errorMessage = 'Please fill in your opportunities!';
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          opportunities: errorMessage
        }));
      } else {
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          opportunities: ''
        }));
      }
    } else if (activeSlide === 3) {
      // Validate fields for the fourth slide
      if (threats.some((threat) => threat.trim() === '')) {
        // If any threat field is empty, set the error message
        errorMessage = 'Please fill in your threats!';
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          threats: errorMessage
        }));
      } else {
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          threats: ''
        }));
      }
    }
  
    if (errorMessage) {
      // Display the error message and prevent the user from proceeding to the next slide
      return;
    }
  
    setActiveSlide(activeSlide + 1);
  };


  
  const handlePreviousSlide = () => {
    setActiveSlide(activeSlide - 1);
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

  const [factors, setFactors] = useState(['']);
  const [weaknesses, setWeaknesses] = useState(['']);
  const [opportunities, setOpportunities] = useState(['']);
  const [threats, setThreats] = useState(['']);
  const [errorMessages, setErrorMessages] = useState(['', '', '', '']);

  
  const handleFactorChange = (index, value) => {
    const newFactors = [...factors];
    newFactors[index] = value;
    setFactors(newFactors);
  
    setErrorMessages((prevErrorMessages) => {
      const updatedErrorMessages = { ...prevErrorMessages }; // Create a copy of the object
      updatedErrorMessages.strengths = ''; // Clear the error message for strengths
      return updatedErrorMessages;
    });
  };
  
  const handleWeaknessChange = (index, value) => {
    const newWeaknesses = [...weaknesses];
    newWeaknesses[index] = value;
    setWeaknesses(newWeaknesses);
  
    setErrorMessages((prevErrorMessages) => {
      const updatedErrorMessages = { ...prevErrorMessages }; // Create a copy of the object
      updatedErrorMessages.weaknesses = ''; // Clear the error message for strengths
      return updatedErrorMessages;
    });
  };
  
  const handleOpportunityChange = (index, value) => {
    const newOpportunities = [...opportunities];
    newOpportunities[index] = value;
    setOpportunities(newOpportunities);
  
    setErrorMessages((prevErrorMessages) => {
      const updatedErrorMessages = { ...prevErrorMessages }; // Create a copy of the object
      updatedErrorMessages.opportunities = ''; // Clear the error message for opportunities
      return updatedErrorMessages;
    });
  };
  
  const handleThreatChange = (index, value) => {
    const newThreats = [...threats];
    newThreats[index] = value;
    setThreats(newThreats);
  
    setErrorMessages((prevErrorMessages) => {
      const updatedErrorMessages = { ...prevErrorMessages }; // Create a copy of the object
      updatedErrorMessages.threats = ''; // Clear the error message for threats
      return updatedErrorMessages;
    });
  };

  

  const navigate = useNavigate();



  useEffect(() => {
    const inputElements = document.querySelectorAll('.inputContainer input');
    if (inputElements.length > 0) {
      inputElements.forEach((inputField) => {
        inputField.addEventListener('input', () => {
          inputField.setCustomValidity('');
        });
      });
    }
  }, [activeSlide]);




  return (
    <div>
   
     

      <div
        className="card"
        style={{ fontFamily: 'Nunito, sans-serif', backgroundColor: getCardBackgroundColor(activeSlide) }}
      >
        <div>
          <div className="slide">
            {activeSlide === 0 && (
              <div>
                <h3 className="strength">Strengths</h3>
                <div className="inputContainer">
                  <p className="internal">What are the internal factors that give your business an advantage over the others?</p>

                  {factors.map((factor, index) => (
  <div key={index}>
<input
  className={`input ${errorMessages.strengths ? 'error' : ''}`}
  type="text"
  value={factor}
  onChange={(e) => handleFactorChange(index, e.target.value)}
  onInput={() => {
    setErrorMessages((prevErrorMessages) => {
      if (typeof prevErrorMessages === 'object' && prevErrorMessages !== null) {
        return {
          ...prevErrorMessages,
          strengths: ''
        };
      } else {
        return {
          strengths: ''
        };
      }
    });
  }}
  style={{ display: 'block', marginLeft: '5%', width: '90%', marginBottom: '10px', paddingLeft: '2%' }}
/>
{index === factors.length - 1 && (
  <span className="error-message" data-slide-index={0}>
    {errorMessages.strengths}
  </span>
)}


  </div>
))}



                  <div className="button-container">
                    <button className="plus" onClick={() => setFactors([...factors, ''])}>
                      +
                    </button>
                    <button className="minus" onClick={() => setFactors(factors.slice(0, -1))}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSlide === 1 && (
              <div>
                <h3 className="weaknes">Weaknesses</h3>
                <div className="inputContainer">
                  <p className="internal1">
                    What are the internal factors that place your business at a disadvantage over the others?
                  </p>
                  {weaknesses.map((weakness, index) => (
  <div key={index}>
    <input
      className={`input ${errorMessages.weaknesses ? 'error' : ''}`}
      type="text"
      value={weakness}
      onChange={(e) => handleWeaknessChange(index, e.target.value)}
      onInput={() => {
        setErrorMessages((prevErrorMessages) => {
          if (typeof prevErrorMessages === 'object' && prevErrorMessages !== null) {
            return {
              ...prevErrorMessages,
              weaknesses: ''
            };
          } else {
            return {
              weaknesses: ''
            };
          }
        });
      }}
      style={{ display: 'block', marginLeft: '5%', width: '90%', marginBottom: '10px' , paddingLeft: '2%'}}
    />
    {index === weaknesses.length - 1 && (
      <span className="error-message" data-slide-index={1}>
        {errorMessages.weaknesses}
      </span>
    )}
  </div>
))}




                  <div className="button-container">
                    <button className="plus" onClick={() => setWeaknesses([...weaknesses, ''])}>
                      +
                    </button>
                    <button className="minus" onClick={() => setWeaknesses(weaknesses.slice(0, -1))}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSlide === 2 && (
              <div className="opp">
                <h3 className="opportunities">Opportunities</h3>
                <div className="inputContainer">
                  <p className="internal2">What are the internal factors that give your business an advantage over the others?</p>
                  {opportunities.map((opportunity, index) => (
  <div key={index}>
    <input
      className={`input ${errorMessages.opportunities ? 'error' : ''}`}
      type="text"
      value={opportunity}
      onChange={(e) => handleOpportunityChange(index, e.target.value)}
      onInput={() => {
        setErrorMessages((prevErrorMessages) => {
          if (typeof prevErrorMessages === 'object' && prevErrorMessages !== null) {
            return {
              ...prevErrorMessages,
              opportunities: ''
            };
          } else {
            return {
              opportunities: ''
            };
          }
        });
      }}
      style={{ display: 'block', marginLeft: '5%', width: '90%', marginBottom: '10px', paddingLeft: '2%' }}
    />
    {index === opportunities.length - 1 && (
      <span className="error-message" data-slide-index={2}>
        {errorMessages.opportunities}
      </span>
    )}
  </div>
))}


                  <div className="button-container">
                    <button className="plus" onClick={() => setOpportunities([...opportunities, ''])}>
                      +
                    </button>
                    <button className="minus" onClick={() => setOpportunities(opportunities.slice(0, -1))}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSlide === 3 && (
              <div>
                <h3 className="threat">Threats</h3>
                <div className="inputContainer">
                  <p className="internal4">What are the internal factors that give your business an advantage over the others?</p>
                  {threats.map((threat, index) => (
  <div key={index}>
    <input
      className={`input ${errorMessages.threats ? 'error' : ''}`}
      type="text"
      value={threat}
      onChange={(e) => handleThreatChange(index, e.target.value)}
      onInput={() => {
        setErrorMessages((prevErrorMessages) => {
          if (typeof prevErrorMessages === 'object' && prevErrorMessages !== null) {
            return {
              ...prevErrorMessages,
              threats: ''
            };
          } else {
            return {
              threats: ''
            };
          }
        });
      }}
      style={{ display: 'block', marginLeft: '5%', width: '90%', marginBottom: '5px' , paddingLeft: '2%'}}
    />
    {index === threats.length - 1 && (
      <span className="error-message" data-slide-index={3}>
        {errorMessages.threats}
      </span>
    )}
  </div>
))}


                  <div className="button-container">
                    <button className="plus" onClick={() => setThreats([...threats, ''])}>
                      +
                    </button>
                    <button className="minus" onClick={() => setThreats(threats.slice(0, -1))}>
                      -
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="button-container">
              {activeSlide > 0 && (
                <button className={`previous previous-${activeSlide}`} onClick={handlePreviousSlide}>
                  Previous
                </button>
              )}

              {activeSlide < 3 ? (
                <button className={`next next-${activeSlide}`} onClick={handleNextSlide}>
                  Next
                </button>
              ) : (
                <button className="results" onClick={handleCheckResults}>
                  Check Results
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    

      <UserJourney activeSlide={activeSlide} />
      
    </div>
    
  );
};

export default UserGuide;
