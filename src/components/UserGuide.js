import React, { useState } from 'react';
import '../components/UserGuide.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'typeface-nunito';




const UserGuide = ()=>{

   
     
        const handleCheckResults = () => {
            navigate('/check-results', {
              state: {
                business,
                size,
                product,
                factors,
                weaknesses,
                opportunities,
                threats,
              },
              
            });
          };
      

    const [business, setBusiness] = useState('');
    const [size, setSize] = useState('');
    const [product, setProduct] = useState('');
    const [factors, setFactors] = useState(['']); // Initialize with an empty input
    const [weaknesses, setWeaknesses] = useState(['']); // Initialize with an empty input
    const [opportunities, setOpportunities] = useState(['']); // Initialize with an empty input
    const [threats, setThreats] = useState(['']); // Initialize with an empty input


    const [client, setClient] = useState('');

    const handleBusinessChange = (e) => {
        setBusiness(e.target.value);
        };
        const handleSizeChange = (e) => {
          setSize(e.target.value);
          };
          const handleClientChange = (e) => {
            setClient(e.target.value);
          };
          const handleFactorChange = (index, value) => {
            const newFactors = [...factors];
            newFactors[index] = value;
            setFactors(newFactors);
          };
          const handleWeaknessChange = (index, value) => {
            const newWeaknesses = [...weaknesses];
            newWeaknesses[index] = value;
            setWeaknesses(newWeaknesses);
          };
          const handleOpportunityChange = (index, value) => {
            const newOpportunities = [...opportunities];
            newOpportunities[index] = value;
            setOpportunities(newOpportunities);
          };
          const handleThreatChange = (index, value) => {
            const newThreats = [...threats];
            newThreats[index] = value;
            setThreats(newThreats);
          };
          
          
         
          const navigate = useNavigate();
          
         

        
        


    return(
        <div style={{ fontFamily: 'Nunito, sans-serif' }}>
        {/* <div className='top'>
        <img src={logo} className= 'logo2'/>
        </div> */}
        
      
{/*        
         <div className='intro3'>
         <p className='intro2'>Instructions</p>
         </div> */}
         <div className='inst'>
            
         <div className='first'>
        
            <h4>First,define your company type,size and product</h4>
       
         </div>
         <div className='in'>
         <div className='label'>
         <label>
        What is your business type?
        <input type="text" value={business} onChange={(e) => setBusiness(e.target.value)}    style={{ marginLeft: '59px' }} />
      </label>
         </div>
         <div className='label2'>
         <label>
        What is the size of your business?
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)}    style={{ marginLeft: '19px' }} />
      </label>
         </div>
         <div className='label2'>
         <label>
        What is your product?
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)}    style={{ marginLeft: '104px' }} />
      </label>
         </div>
         </div>
       
             
         <div className='second'>
         <h3>Now you discuss the strengths of your business. What can you do better than your competitors? What makes you stand out?</h3>
         </div>
         <div className='label4'>
         <label>
 <div className="inputContainer">
  <p className="internal">
    What are the internal factors that give your business an advantage over the others?
  </p>

  {factors.map((factor, index) => (
    <div key={index}>
      <input
        className={`input${index + 1}`}
        type="text"
        value={factor}
        onChange={(e) => handleFactorChange(index, e.target.value)}
        style={{ display: 'block', marginLeft: '25%', width: '47%', marginBottom: '10px' }}
      />
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
</label>

         </div>
         <div className='third'>
        
          <h3>Now you discuss your company's weaknesses. What are you not as good at as your competitors? Where does the company still need improvement?</h3>
  
         </div>
         <div className='label4'>
         <label>
         <div className="inputContainer">
  <p className="internal1">
    What are the internal factors that place your business at a disadvantage over the others?
  </p>

  {weaknesses.map((weakness, index) => (
    <div key={index}>
      <p>
        <input
          className={`input${index + 1}`}
          type="text"
          value={weakness}
          onChange={(e) => handleWeaknessChange(index, e.target.value)}
          style={{ marginLeft: '25%', width: '47%', marginBottom: '10px' }}
        />
      </p>
    </div>
  ))}
</div>


<div className="button-container">
  <button className="plus" onClick={() => setWeaknesses([...weaknesses, ''])}>
    +
  </button>
  <button className="minus" onClick={() => setWeaknesses(weaknesses.slice(0, -1))}>
    -
  </button>
</div>
</label>

         </div>
         <div className='forth'>
       
         
          <h3>Now discuss your company's opportunities. What opportunities can your company seize? Which fields could be developed?</h3>

         </div>
         <div className='label4'>
         <label>
         <div className="inputContainer">
  <p className="internal2">
    What are the internal factors that give your business an advantage over the others?
  </p>

  {opportunities.map((opportunity, index) => (
    <div key={index}>
      <p>
        <input
          className={`input${index + 1}`}
          type="text"
          value={opportunity}
          onChange={(e) => handleOpportunityChange(index, e.target.value)}
          style={{ marginLeft: '25%', width: '47%', marginBottom: '10px' }}
        />
      </p>
    </div>
  ))}
</div>

<div className="button-container">
  <button className="plus" onClick={() => setOpportunities([...opportunities, ''])}>
    +
  </button>
  <button className="minus" onClick={() => setOpportunities(opportunities.slice(0, -1))}>
    -
  </button>
</div></label>

        
         </div>
         <div className='fifth'>
        
          <h3>Now discuss your company's threats. What factors could harm the company? What are the risks?</h3>
   
         </div>
         <div className='label4'>
         <label>
  <p className='internal4'>
    What are the internal factors that give your business an advantage over the others?
  </p>
  
  {threats.map((threat, index) => (
    <p className={`input${index + 1}`} key={index}>
      <input
        type="text"
        value={threat}
        onChange={(e) => handleThreatChange(index, e.target.value)}
        style={{ marginLeft: '25%', width: '47%' }}

      />
    </p>
  ))}

<div className="button-container">
  <button className="plus" onClick={() => setThreats([...threats, ''])}>
    +
  </button>
  <button className="minus" onClick={() => setThreats(threats.slice(0, -1))}>
    -
  </button>
</div></label>

         </div>
         <p className='border'></p>

         <div>
      {/* ... */}
      <button className='results' onClick={handleCheckResults}>Submit</button>
    </div>
  
         </div>
         
        </div>
    )
}

export default UserGuide;