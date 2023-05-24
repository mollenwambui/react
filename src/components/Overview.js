import React, { useState } from 'react';
import '../components/Overview.css';
import logo from '../images/logo.png';

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
'Poland',
'Portugal',
'Qatar',
'Romania',
'Russia',
'Rwanda',
'Saint Kitts and Nevis',
'Saint Lucia',
'Saint Vincent and the Grenadines',
'Samoa',
'San Marino',
'Sao Tome and Principe',
'Saudi Arabia',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'South Korea',
'South Sudan',
'Spain',
'Sri Lanka',
'Sudan',
'Suriname',
'Sweden',
'Switzerland',
'Syria',
'Taiwan',
'Tajikistan',
'Tanzania',
'Thailand',
'Timor-Leste',
'Togo',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Tuvalu',
'Uganda',
'Ukraine',
'United Arab Emirates',
'United Kingdom',
'United States of America',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Vatican City',
'Venezuela',
'Vietnam',
'Yemen',
'Zambia',
'Zimbabwe',
];

const departments =[
    'Accounting',
    'Business Development',
    'Customer Service',
    'Engineering',
    'Finance',
    'Human Resources',
    'Information Technology',
    'Legal',
    'Marketing',
    'Operations',
    'Product Management',
    'Quality Assurance',
    'Research and Development',
    'Sales',
    'Supply Chain',
    'Training and Development',
    'Public Relations',
    'Administration',
    'Design',
    'Logistics',
  ];
  
  const audiences = [
    'Customers',
    'Consultant',
    'Employees',
    'Investors',
    'Regulators',
   
    'Suppliers',
    'Partners',
    'Government',
    'Students',
    'Researchers',
    'Community',
    'Media',
    'Non-Profit Organizations',
    'Trade Associations',
    'Competitors',
    'Shareholders',
    'Strategic Alliances',
    'Startups',
    'Sponsors',
    // Add more audiences here
  ];


const industries = [
  'Automotive',
  'Banking',
  'Chemical',
  'Construction',
  'Education',
  'Energy',
  'Entertainment',
  'Fashion',
  'Food and Beverage',
  'Healthcare',
  'Hospitality',
  'Information Technology',
  'Insurance',
  'Manufacturing',
  'Media',
  'Mining',
  'Pharmaceutical',
  'Real Estate',
  'Retail',
  'Telecommunications',
  'Transportation',
  'Travel',
  'Aerospace',
  'Agriculture',
  'Biotechnology',
  'Consulting',
  'Defense',
  'Financial Services',
  'Government',
  'Logistics',
  'Technology',
];

const employees =[
  '0-10',
  '10-50',
  '51-100',
  '101-200',
  '201-300',
  '301-500',
  '401-600',
  '601-700',
  '701-800',
  '801-900',
  'Above 1000',
  

]



const Overview= () => {
  const [client, setClient] = useState('');
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [audience, setAudience] = useState('');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    };
    const handleDepartmentChange = (e) => {
      setDepartment(e.target.value);
      };
      const handleAudienceChange = (e) => {
        setAudience(e.target.value);
        };
        const handleIndustryChange = (e) => {
          setIndustry(e.target.value);
        };
        const handleEmployeeChange = (e) => {
          setEmployeeNumber(e.target.value);
        };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    // For now, let's log the values to the console
    console.log({
      client,
      department,
      date,
      audience,
      location,
      industry,
      employeeNumber,
    });

    // Reset the form fields
    setClient('');
    setDepartment('');
    setDate('');
    setAudience('');
    setLocation('');
    setIndustry('');
    setEmployeeNumber('');
  };

  return (
  
    <div className='Card'>
     <img src={logo} className= 'logos'/>
        <h3 className='swot'> SWOT Analysis</h3>
        <div  className='ev'>
        <p className='border'></p>
        <button className='orange-button' type="submit">Core information</button>
         <form onSubmit={handleSubmit}>
          <div className='line1'>
            <div className='client'> 
            <label>
        Client:
        <input type="text" value={client} onChange={(e) => setClient(e.target.value)}     style={{ marginLeft: '10px' }}/>
      </label>
            </div>
            <div className='department'>
            <label style={{ display: 'flex'}}>
Department:

<select className='input'   value={department} onChange={handleDepartmentChange}>

<option value=""></option>
{departments.map((department, index) => (
<option key={index} value={department}>
{department}
</option>
))}
</select>
</label>

            </div>

          </div>
      
<div className='line2'>
   <div className='date'>
   <label>
        Date:
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)}    style={{ marginLeft: '10px' }} />
      </label>


   </div>
   <div className='audience'>
   <label style={{ display: 'flex'}}>
      Audience:
      <select className='inputs'   value={audience} onChange={handleAudienceChange} style={{ marginLeft: '10px' }}>
        <option value=""></option>

{audiences.map((audience, index) => (
<option key={index} value={audience}>
{audience}
</option>
))}
</select>
</label>





   </div>
</div>
    
 <div className='line3'>

  <div className='location'>
  <label>
Location:

<select className='input'   value={location} onChange={handleLocationChange}>

<option value=""></option>
{countries.map((country, index) => (
<option key={index} value={country}>
{country}
</option>
))}
</select>
</label>


  </div>

  <div className='industry'> 
  <label style={{ display: 'flex', alignItems: 'center' }}>
      Industry:
      <select className='inputy'   value={industry} onChange={handleIndustryChange} style={{ marginLeft: '10px' }}>
        <option value=""></option>
        {industries.sort().map((industry, index) => (
          <option key={index} value={industry}>
            {industry}
          </option>
        ))}
      </select>
    </label>


  </div>

 </div>
    <div className='employee'>

    <label style={{ display: 'flex', alignItems: 'center' }}>
      Employee Number:
      <select className='i'   value={employeeNumber} onChange={handleEmployeeChange} style={{ marginLeft: '10px' }}>
        <option value=""></option>
        {employees.sort().map((employee, index) => (
          <option key={index} value={employee}>
            {employee}
          </option>
        ))}
      </select>
    </label>

    </div>
    <p className='border2'></p>
    
     
     

    


      <button className='navigation' type="submit">Navigation Menu</button>
      <p className='border3'></p>

      <button className='menu' type="submit">Export Menu</button>
    </form>
        </div>
      

    </div>
   
  );
};

export default Overview;
