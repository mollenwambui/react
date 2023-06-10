import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Introduction.css';
import 'typeface-nunito';
import vector from '../images/Vector.png';
import swot from '../images/swot.png';
import question from '../images/question.png';
import need from '../images/need.png';
import user from '../images/user.png';
import arrow from '../images/arrow.png';

const Introduction = () => {
  return (
    <div className="introduction-container" style={{ fontFamily: 'Nunito' }}>

    
   
 
     <img src={vector} className= 'vector' alt='vector'/>

     <img src={swot}  alt='swot' className= 'swot'/>
    <h2 className='inst'>Introduction</h2>
     <div className='all'>
    <div className='card1'>
    <img src={question} alt='quiz' className= 'quiz'/>
     <h2 className='what'>What is this tool?</h2>
   <p className='content'> A SWOT analysis is a tool used to evaluate an organization's internal strengths and weaknesses as well as external opportunities and threats. <br/> It helps structure thoughts about the company and its environment, enabling strategic decision-making. <br/> By identifying strengths, weaknesses, opportunities, and threats, companies can develop strategies to leverage their strengths, address weaknesses, capitalize on opportunities, and mitigate threats.
</p>
    </div>
    <div className='card2'>
    <img src={need} className= 'need' alt='need'/>
    <h2 className='what'>Why do i need it??</h2>
  <p className='content'>You need a SWOT analysis because it provides a structured framework to assess your organization's internal strengths, weaknesses, and external opportunities and threats<br/>It helps you understand your competitive position, make informed decisions, and develop effective strategies <br/> Conducting a SWOT analysis enables you to identify areas of advantage, address limitations, capitalize on opportunities, and mitigate potential risks.
</p>

    </div>
    <div className='card22'>
    <img src={user} alt='user' className= 'user'/>
    <h2 className='what'>Why should I use it?</h2>
    <p className='content'>You should use a SWOT analysis when you want to evaluate your organization's internal strengths, weaknesses, and external opportunities and threats.<br/>  It is particularly useful during strategic planning, decision-making processes, and when entering new markets or industries. <br/> Conducting a SWOT analysis allows you to assess your competitive position, identify areas for improvement, and make informed choices based on a comprehensive understanding of your business environment.</p>

    
    </div>
    

     </div>
     <Link to="/user-guide">
  <div  className='last'>
    <h2 className='go' style={{ margin: 0 }}>Go to Template</h2>
    <img src={arrow} alt='arrow' className='arrow' style={{ marginLeft: '5px' }} />
  </div>
</Link>

      
    </div>
  );
};

export default Introduction;
