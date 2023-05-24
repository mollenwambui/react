import React, { useState } from 'react';
import pptxgen from 'pptxgenjs';
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
  

  const generatePowerPoint = async () => {
    try {
      setLoading(true);
      const pptxContent = await generatePowerPointContent(content);
      if (pptxContent) {
        saveAs(new Blob([pptxContent], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' }), 'results.pptx');
      }
    } catch (error) {
      console.error('Error generating PowerPoint:', error);
    } finally {
      setLoading(false);
    }
  };
  

  const generatePowerPointContent = async (content) => {
    if (!content) {
      return null;
    }
  
    const { business = '', size = '', product = '', factors = [], weaknesses = [], opportunities = [], threats = [] } = content;
  
    const pptx = new pptxgen();
  
    // Set default slide background color
    pptx.defineSlideMaster({
      title: 'Master',
      background: { fill: '#FDF7F3' }, // Set your desired background color
    });
  
    const addTitleAndPointsSlide = (title, points) => {
      const slide = pptx.addSlide({ masterName: 'Master' });
      slide.addText(title, { x: 1, y: 1, fontFace: 'Arial', fontSize: 18 });
  
      points.forEach((point, index) => {
        slide.addText(`- ${point}`, { x: 1, y: index + 2, fontFace: 'Arial', fontSize: 14 });
      });
    };
  
    const slide1 = pptx.addSlide({ masterName: 'Master' });
    slide1.addText('Results', { x: 1, y: 1, fontFace: 'Arial', fontSize: 24 });
  
    slide1.addText(`Business type: ${business}`, { x: 1, y: 2, fontFace: 'Arial', fontSize: 18 });
    slide1.addText(`Size: ${size}`, { x: 1, y: 3, fontFace: 'Arial', fontSize: 18 });
    slide1.addText(`Product: ${product}`, { x: 1, y: 4, fontFace: 'Arial', fontSize: 18 });
  
    if (factors.length > 0) {
      addTitleAndPointsSlide('Strengths:', factors);
    }
  
    if (weaknesses.length > 0) {
      addTitleAndPointsSlide('Weaknesses:', weaknesses);
    }
  
    if (opportunities.length > 0) {
      addTitleAndPointsSlide('Opportunities:', opportunities);
    }
  
    if (threats.length > 0) {
      addTitleAndPointsSlide('Threats:', threats);
    }
  
    return pptx.write('arraybuffer', { base64: false });
  };
  const generatePDFContent = async (content) => {
    if (!content) {
      return null;
    }
  
    const { business = '', size = '', product = '', factors = [], weaknesses = [], opportunities = [], threats = [] } = content;
  
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
  
    // Set background color
    pdf.setFillColor('white');
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
  
    // Set font
    pdf.setFont('nunito');
  
    pdf.setFontSize(24);
    pdf.setTextColor('#000000');
    pdf.text('Results', 15, 15);
  
    pdf.setFontSize(18);
    pdf.setTextColor('#000000');
    pdf.text(`Business type: ${business}`, 15, 30);
    pdf.text(`Size: ${size}`, 15, 40);
    pdf.text(`Product: ${product}`, 15, 50);
  
    pdf.setFontSize(18);
    pdf.setTextColor('#2e75f0');
    pdf.text('Strengths:', 15, 65);
  
    pdf.setFontSize(14);
    pdf.setTextColor('#000000');
    factors.forEach((factor, index) => {
      pdf.text(`- ${factor}`, 25, 75 + index * 10);
    });
  
    pdf.setFontSize(18);
    pdf.setTextColor('#f86c0f');
    pdf.text('Weaknesses:', 15, 90 + factors.length * 10);
  
    pdf.setFontSize(14);
    pdf.setTextColor('#000000');
    weaknesses.forEach((weakness, index) => {
      pdf.text(`- ${weakness}`, 25, 100 + factors.length * 10 + index * 10);
    });
  
    pdf.setFontSize(18);
    pdf.setTextColor('#46aa08');
    pdf.text('Opportunities:', 15, 125 + (factors.length + weaknesses.length) * 10);
  
    pdf.setFontSize(14);
    pdf.setTextColor('#000000');
    opportunities.forEach((opportunity, index) => {
      pdf.text(`- ${opportunity}`, 25, 135 + (factors.length + weaknesses.length) * 10 + index * 10);
    });
  
    pdf.setFontSize(18);
    pdf.setTextColor('#d19f09');
    pdf.text('Threats:', 15, 160 + (factors.length + weaknesses.length + opportunities.length) * 10);
  
    pdf.setFontSize(14);
    pdf.setTextColor('#000000');
    threats.forEach((threat, index) => {
      pdf.text(`- ${threat}`, 25, 170 + (factors.length + weaknesses.length + opportunities.length) * 10 + index * 10);
    });
  
    // Generate PDF content
    return pdf.output('blob');
  };
  

  
  return (
    <div>
        <div className='export'>
            <h3>Would you like to Export your results?</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center',marginLeft:'15%' }}>
      <div className="ppt">
        <img src={logo} alt="PowerPoint Logo" onClick={generatePowerPoint} style={{ cursor: 'pointer' }} />
        {loading && <p>Generating PowerPoint...</p>}
      </div>
      <div className="content">
        <h4>PowerPoint</h4>
        <p>Click the PowerPoint button</p>
        <p>A new PowerPoint with the content will be created</p>
      </div>
    </div>
      <div className='pd' style={{ display: 'flex', alignItems: 'center',marginLeft:'58%',marginTop:'-15%' }}>
        <div className='pdf'>
        <img src={pdf} alt="PDF Logo" onClick={generatePDF} style={{ cursor: 'pointer' }} />
      {loading && <p>Generating PDF...</p>}
        </div>
        <div className="content">
        <h4>PDF</h4>
        <p>Click PDF button</p>
        <p>A new PDF with the content will be created</p>
      </div>
        </div>
    </div>
   
  

  );
};

export default Export;
