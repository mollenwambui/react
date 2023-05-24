import React from 'react';
import { scroller } from 'react-scroll';

class UserJourney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: null,
      introductionCompleted: false,
      userGuideCompleted: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const introductionSection = document.getElementById('introduction');
    const userGuideSection = document.getElementById('user-guide');
    const resultsSection = document.getElementById('results');

    if (introductionSection && userGuideSection && resultsSection) {
      const scrollPosition = window.scrollY;
      const introductionOffset = introductionSection.offsetTop;
      const userGuideOffset = userGuideSection.offsetTop;
      const resultsOffset = resultsSection.offsetTop;

      if (
        scrollPosition >= introductionOffset &&
        scrollPosition < userGuideOffset &&
        !this.state.introductionCompleted
      ) {
        this.setState({
          activeStep: 'introduction',
          introductionCompleted: true,
          userGuideCompleted: false,
        });
      } else if (
        scrollPosition >= userGuideOffset &&
        scrollPosition < resultsOffset &&
        !this.state.userGuideCompleted
      ) {
        this.setState({
          activeStep: 'user-guide',
          userGuideCompleted: true,
        });
      } else if (scrollPosition >= resultsOffset) {
        this.setState({
          activeStep: 'results',
        });
      }
    }
  };

  scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };

  render() {
    const { activeStep, introductionCompleted, userGuideCompleted } = this.state;

    return (
      <div className="user-journey" style={{ position: 'fixed', top: '50%', transform: 'translateY(-50%)' }}>
        <div
          className={`user-journey-step ${activeStep === 'introduction' ? 'active' : ''}`}
          onClick={() => this.scrollToSection('introduction')}
        >
          <input
            type="checkbox"
            checked={introductionCompleted}
            readOnly
          />
          Introduction
        </div>
        <div
          className={`user-journey-step ${activeStep === 'user-guide' ? 'active' : ''}`}
          onClick={() => this.scrollToSection('user-guide')}
        >
          <input
            type="checkbox"
            checked={userGuideCompleted}
            readOnly
          />
          User Guide
        </div>
        <div
          className={`user-journey-step ${activeStep === 'results' ? 'active' : ''}`}
          onClick={() => this.scrollToSection('results')}
        >
          <input
            type="checkbox"
            checked={activeStep === 'results'}
            readOnly
          />
          Results
        </div>
      </div>
    );
  }
}

export default UserJourney;
