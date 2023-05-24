import React from 'react';
import { useLocation } from 'react-router-dom';
import '../components/ResultsPage.css';
import logo from '../images/logo.png';
import 'typeface-nunito';
import Export from './Export';

const CheckResults = () => {
  const location = useLocation();

  // Check if location.state and business are defined
  const business = location.state?.business || '';
  const size = location.state?.size || '';
  const product = location.state?.product || '';
  const factors = location.state?.factors || [];
  const weaknesses = location.state?.weaknesses || [];
  const opportunities = location.state?.opportunities || [];
  const threats = location.state?.threats || [];

  // Create content object for export
  const exportContent = {
    business,
    size,
    product,
    factors,
    weaknesses,
    opportunities,
    threats
  };

  return (
    <div style={{ fontFamily: 'Nunito, sans-serif' }}>
      {/* <div className="top">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="intro">
        <h2 className="intro-title">Results</h2>
      </div> */}
      <div className="bizz">
        <p className="type">Business type: {business}</p>
        <p className="size">Size: {size}</p>
        <p className="product">Product: {product}</p>
      </div>
      <div className="both">
        <div className="card10">
          <p className="strength">
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
            <p>No Strengths found</p>
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
            <p>No weaknesses found</p>
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
            <p>No opportunities found</p>
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
            <p>No threats found</p>
          )}
        </div>
      </div>
      
      {/* Add the Export component */}
      <Export content={exportContent} />
    </div>
  );
};

export default CheckResults;
