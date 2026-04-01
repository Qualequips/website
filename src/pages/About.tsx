import { Target, Heart, Award } from 'lucide-react';
import SEO from '../components/ui/SEO';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page animate-fade-in">
      <SEO 
        title="About Us"
        description="Learn more about QualEquips, our mission, and our commitment to bringing top-tier medical devices to healthcare facilities in Kerala."
        keywords="about QualEquips, medical device distributor Kerala, Ababil Healthcare partner"
      />
      <div className="page-header bg-primary text-center">
        <div className="container">
          <h1 className="text-white">Our Story</h1>
          <p className="text-white" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
            Learn more about QualEquips, our mission, and our commitment to bringing top-tier medical devices to healthcare facilities in Kerala.
          </p>
        </div>
      </div>

      <div className="container section-padding">
        <div className="about-grid">
          <div className="about-content-section">
            <span className="section-tag text-primary">Who We Are</span>
            <h2>A Trusted Partner in Healthcare</h2>
            <p>
              QualEquips is a premier medical device distribution company headquartered in Kochi, Kerala. 
              We are dedicated to providing hospitals, clinics, and medical professionals with the highest quality 
              equipment to enhance patient care and streamline clinical workflows.
            </p>
            <p>
              As an authorized distributor for <strong>Ababil Healthcare</strong>, we hold ourselves to the highest standards 
              of quality and service. From critical care units to general ward setups, our comprehensive catalog ensures that 
              healthcare providers have access to the reliable tools they need to save lives.
            </p>
          </div>
          <div className="about-image-section">
            <div className="info-card">
              <h3>Our Core Values</h3>
              <ul className="values-list">
                <li>
                  <Award className="text-accent" />
                  <div>
                    <strong>Quality</strong>
                    <span>Uncompromising standards for every product.</span>
                  </div>
                </li>
                <li>
                  <Heart className="text-secondary" />
                  <div>
                    <strong>Care</strong>
                    <span>Driven by the desire to improve patient outcomes.</span>
                  </div>
                </li>
                <li>
                  <Target className="text-primary" />
                  <div>
                    <strong>Reliability</strong>
                    <span>Consistent service and timely delivery across India.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
