import { Lightbulb, Wrench, ShieldCheck, AlertCircle, Settings, Activity, CheckCircle2 } from 'lucide-react';
import SEO from '../components/ui/SEO';
// Deprecated Button import
import './Services.css';

const servicesOptions = [
  {
    title: "Application Training",
    description: "Helping healthcare teams use equipment correctly and confidently.",
    icon: <Lightbulb size={32} className="text-primary" />,
    points: [
      "Clinical and application training for staff",
      "Best practices for safe and effective use",
      "Tailored training for hospitals and clinics",
      "Guidance on QC planning and maintenance",
      "Better workflow and equipment utilization"
    ]
  },
  {
    title: "Annual Maintenance Contract (AMC)",
    description: "Reliable scheduled support to keep equipment running smoothly.",
    icon: <Wrench size={32} className="text-secondary" />,
    points: [
      "Monthly preventive maintenance",
      "Breakdown support when needed",
      "On-site visit within 24 hours",
      "Direct access to engineers",
      "Online technical support",
      "Spare parts, replacements, and accessories support"
    ]
  },
  {
    title: "Comprehensive AMC (CAMC)",
    description: "Complete end to end maintenance coverage for long-term equipment performance.",
    icon: <ShieldCheck size={32} className="text-accent" />,
    points: [
      "All AMC benefits included",
      "Hardware servicing and repair",
      "Breakdown maintenance support",
      "Fast on-site response",
      "Engineer assistance by phone and online",
      "Support for spares and accessories"
    ]
  },
  {
    title: "Breakdown Support",
    description: "Fast response service to restore equipment and reduce downtime.",
    icon: <AlertCircle size={32} className="text-error" style={{ color: '#EF4444' }} />,
    points: [
      "Quick issue diagnosis and rectification",
      "On-site support from expert engineers",
      "Spare and accessory replacement",
      "Handling of complex technical issues",
      "Centrally tracked repair process",
      "Service records maintained for future reference"
    ]
  },
  {
    title: "Preventive Maintenance",
    description: "Regular maintenance to improve reliability and extend equipment life.",
    icon: <Settings size={32} className="text-primary" />,
    points: [
      "Certified maintenance protocols",
      "Calibration using specified tools and kits",
      "Safety, performance, and functional checks",
      "Cleaning and care support",
      "Scheduled maintenance planning",
      "Training for basic user-side maintenance"
    ]
  },
  {
    title: "Calibration Service",
    description: "Accurate calibration to ensure precision, safety, and consistent performance.",
    icon: <Activity size={32} className="text-secondary" />,
    points: [
      "On-site and in-house calibration",
      "Testing of medical equipment across departments",
      "Fault diagnosis and service recommendation",
      "Quality assurance checks",
      "Support for ICU, OT, OPD, Paediatrics, and more",
      "Advanced biomedical test equipment and simulators."
    ]
  }
];

const Services: React.FC = () => {
  return (
    <div className="services-page animate-fade-in">
      <SEO 
        title="Our Services"
        description="QualEquips offers professional application training, CAMC/AMC, and breakdown support to ensure reliable after-sales care for our medical equipment."
        keywords="medical equipment maintenance, AMC, CAMC, hospital training, preventive maintenance Kerala"
      />
      
      {/* Header Section */}
      <div className="page-header bg-primary text-center">
        <div className="container">
          <h1 className="text-white">Our Services</h1>
          <p className="text-white" style={{ opacity: 0.9, maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem' }}>
            These services are offered for our products and to support our customers with reliable after-sales care.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container section-padding">
        <div className="services-grid">
          {servicesOptions.map((service, index) => (
            <div key={index} className="service-card shadow-md">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
              </div>
              <p className="service-desc text-muted">{service.description}</p>
              
              <div className="service-points-container">
                <h4 className="points-heading">Key Points</h4>
                <ul className="service-points-list">
                  {service.points.map((point, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="text-secondary point-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action / Service Form */}
      <div className="services-cta bg-light section-padding text-center">
        <div className="container">
          <h2>Need Service or Support?</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '1rem auto 2rem' }}>
            Our expert engineering team is standing by. Fill out the service request form below to schedule maintenance, training, or emergency breakdown support.
          </p>
          
          <div className="service-form-wrapper shadow-md" style={{ maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: 'var(--radius-lg)', backgroundColor: 'transparent' }}>
            <iframe 
              aria-label="Service Request Form" 
              frameBorder="0" 
              style={{ height: '750px', width: '100%', border: 'none' }} 
              src="https://forms.zohopublic.in/founderquale1/form/MedicalDistributionServiceRequestForm/formperma/WedvWhcZUPso2s1AXxPRSRLQ_daPN_5b5XdjnbBaWnE">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
