import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../components/Introduction.css';
import 'typeface-nunito';

const Introduction = () => {
  return (
    <div className="introduction-container" style={{ fontFamily: 'Nunito, sans-serif' }}>
     
      <div className="card5">
        <h3 className="card-title">What is this tool?</h3>
        <p className="card-text">
          SWOT is an acronym that stands for Strengths, Weaknesses,
          Opportunities, and Threats. SWOT analysis is a framework used to
          evaluate and analyze the internal and external factors that can impact
          the success of a business or project. The strengths and weaknesses
          refer to the internal factors of an organization, while opportunities
          and threats are external factors. By conducting a SWOT analysis,
          businesses and individuals can gain a better understanding of their
          current position, identify potential challenges and opportunities, and
          develop effective strategies to achieve their goals.
        </p>
      </div>
      <div className="card6">
        <h3 className="card-title">Why do I need it?</h3>
        <p className="card-text">
          SWOT analysis is a valuable framework that can be used to evaluate and
          analyze the internal and external factors that can impact the success
          of a business or project. Conducting a SWOT analysis can help you to
          identify the strengths and weaknesses within your organization or
          project, as well as external opportunities and threats that can affect
          your success. By conducting a SWOT analysis, you can gain a better
          understanding of your current position, identify potential challenges
          and opportunities, and develop effective strategies to achieve your
          goals. This tool is particularly useful for strategic planning, risk
          management, decision-making, performance evaluation, and competitive
          analysis.
        </p>
      </div>
      <div className="card7">
        <h3 className="card-title">When should I use it?</h3>
        <p className="card-text">
          SWOT analysis is a versatile tool that can be used in various personal
          and professional settings. You should use it when you are starting a
          new business or project, improving an existing one, considering a new
          product or service, evaluating competition, or assessing personal or
          professional development. By conducting a SWOT analysis, you can gain
          valuable insights into your situation, identify areas for improvement
          and growth, and develop effective strategies to achieve success.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
