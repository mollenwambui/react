import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'typeface-nunito';
import logo from '../images/powerpoint.jpeg';
import pdf from '../images/pdf.png';
import '../components/Export.css';

const Export = ({ content }) => {
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
    try {
      setLoading(true);
      const pdfContent = await generatePDFContent(content);
      if (pdfContent) {
        saveAs(pdfContent, 'results.pdf');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };
//// ...






// ...

  



const generatePDFContent = async (content) => {
  if (!content) {
    return null;
  }

  const {
    factors = [],
    weaknesses = [],
    opportunities = [],
    threats = [],
  } = content;

  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Set background color
  pdf.setFillColor('white');
  pdf.rect(0, 0, pageWidth, pageHeight, 'F');

  // Set font
  pdf.setFont('nunito');

  // Set card colors
  const cardColors = {
    strengths: '#2e75f0',
    weaknesses: '#f86c0f',
    opportunities: '#46aa08',
    threats: '#d19f09',
  };

  // Set card positions and dimensions
  const cardPositions = {
    strengths: { x: 15, y: 20 }, // Adjust the y position to reduce whitespace
    weaknesses: { x: pageWidth / 2 + 5, y: 20 }, // Adjust the y position to reduce whitespace
    opportunities: { x: 15, y: 80 + factors.length * 20 }, // Adjust the y position to reduce whitespace
    threats: { x: pageWidth / 2 + 5, y: 80 + factors.length * 20 }, // Adjust the y position to reduce whitespace
  };
  const cardWidth = pageWidth * 0.4;
  const borderRadius = 4;

  // Set card title styles
  pdf.setFontSize(18);
  pdf.setTextColor('#FFFFFF');

  // Set card content styles
  pdf.setFontSize(10);
  pdf.setTextColor('#000000');

  const calculateCardHeight = (lines) => {
    const lineHeight = 10; // Adjust the line height as per your preference
    const maxLines = Math.max(lines, weaknesses.length);
    const cardHeight = maxLines * lineHeight + 40; // Adjust the height padding as per your preference
    return cardHeight;
  };
  const generateCard = (title, content, position, color) => {
  const lines = pdf.splitTextToSize(content, cardWidth - 20);
  const cardHeight = calculateCardHeight(lines.length);

  pdf.setFillColor(color);
  pdf.roundedRect(
    position.x,
    position.y,
    cardWidth,
    cardHeight,
    borderRadius,
    borderRadius,
    'F'
  );

  pdf.setFontSize(18);
  pdf.setTextColor('#FFFFFF');
  pdf.text(title, position.x + 5, position.y + 10);

  pdf.setFontSize(10);
  pdf.setTextColor('#000000');

  // Calculate the vertical position for the content text
  const contentY = position.y + 18; // Adjust the value as per your preference
  const bulletSpacing = 4; // Adjust the spacing after each bullet point as per your preference

  // Draw the content text with extra spacing after each line
  lines.forEach((line, index) => {
    const lineY = contentY + index * (bulletSpacing + 4); // Adjust the line spacing and extra spacing as per your preference
    pdf.text(line, position.x + 4, lineY);
  });
};

  
  

  // Generate card for strengths
  const strengthsText = factors.map((factor) => `\u2022 ${factor}`).join('\n');
  generateCard('Strengths', strengthsText, cardPositions.strengths, cardColors.strengths);

  // Generate card for weaknesses
  const weaknessesText = weaknesses.map((weakness) => `\u2022 ${weakness}`).join('\n');
  generateCard('Weaknesses', weaknessesText, cardPositions.weaknesses, cardColors.weaknesses);

  // Generate card for opportunities
  const opportunitiesText = opportunities.map((opportunity) => `\u2022 ${opportunity}`).join('\n');
  generateCard('Opportunities', opportunitiesText, cardPositions.opportunities, cardColors.opportunities);

  // Generate card for threats
  const threatsText = threats.map((threat) => `\u2022 ${threat}`).join('\n');
  generateCard('Threats', threatsText, cardPositions.threats, cardColors.threats);

  // Generate PDF content
  return pdf.output('blob');
};



  return (
    <div>
      <div className='export'>
        <h3>Would you like to Export your results?</h3>
      </div>
      <div className='final'>
        <div className="ppt">
          <img src={logo} alt="PowerPoint Logo"  />
          {loading && <p>Generating PowerPoint...</p>}
        </div>
        <div className="content">
          <h4>PowerPoint</h4>
          <p>Click the PowerPoint button</p>
          <p>A new PowerPoint with the content will be created</p>
        </div>
      </div>
      <div className='pd' >
        <div className='pdf'>
          <img src={pdf} alt="PDF Logo" onClick={generatePDF} style={{ cursor: 'pointer' }} />
          {loading && <p>Generating PDF...</p>}
        </div>
        <div className="content2">
          <h4>PDF</h4>
          <p>Click PDF button</p>
          <p>A new PDF with the content will be created</p>
        </div>
      </div>
    </div>
  );
};

export default Export;
