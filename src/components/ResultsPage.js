import React from 'react';
import { useLocation } from 'react-router-dom';
import '../components/ResultsPage.css';
import logo from '../images/logo.png';
import 'typeface-nunito';
import Export from './Export';

const CheckResults = () => {
  const location = useLocation();


  const factors = location.state?.factors || [];
  const weaknesses = location.state?.weaknesses || [];
  const opportunities = location.state?.opportunities || [];
  const threats = location.state?.threats || [];

  // Create content object for export
  const exportContent = {
   
    factors,
    weaknesses,
    opportunities,
    threats
  };

  return (
    <div style={{ fontFamily: 'Nunito, sans-serif' }}>
      <div class="result-container">

    

           
       
       
      </div>

      <div className="both">
        <div className="card10">
          <p className="strengths">
            <strong>Strengths:</strong>
          </p>
          {factors.length > 0 ? (
            <div>
              {factors.map((factor, index) => (
                <React.Fragment key={index}>
                  <p style={{ marginBottom: '10px' }}>&#8226; {factor}</p>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className='align'>No Strengths found</p>
          )}
        </div>

        <div className="card11">
          <p className="weakness">
            <strong>Weaknesses:</strong>
          </p>
          {weaknesses.length > 0 ? (
            <div>
              {weaknesses.map((weakness, index) => (
                <React.Fragment key={index}>
                  <p style={{ marginBottom: '10px' }}>&#8226; {weakness}</p>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className='align'> No weaknesses found</p>
          )}
        </div>
      </div>
      <div className="both">
        <div className="card12">
          <p className="opportunity">
            <strong>Opportunities:</strong>
          </p>
          {opportunities.length > 0 ? (
            <div>
              {opportunities.map((opportunity, index) => (
                <React.Fragment key={index}>
                  <p style={{ marginBottom: '10px' }}>&#8226; {opportunity}</p>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className='align'>No opportunities found</p>
          )}
        </div>
        <div className="card13">
          <p className="threats">
            <strong>Threats:</strong>
          </p>
          {threats.length > 0 ? (
            <div>
              {threats.map((threat, index) => (
                <React.Fragment key={index}>
                  <p style={{ marginBottom: '10px' }}>&#8226; {threat}</p>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className='align'>No threats found</p>
          )}
        </div>
      </div>

      {/* Add the Export component */}
      <Export content={exportContent} />
    </div>
  );
};

export default CheckResults;
