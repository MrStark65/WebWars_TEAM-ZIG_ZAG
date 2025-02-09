import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { 
  FaUniversity, 
  FaCalendarAlt, 
  FaUsers, 
  FaBook, 
  FaMedal, 
  FaGlobe, 
  FaCheck,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt 
} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Home.css';


// Import your images
import slide1 from '../assets/slider/confSlider1.webp';
import slide2 from '../assets/slider/confSlider2.webp';
import slide3 from '../assets/slider/confSlider3.webp';
import slide4 from '../assets/slider/confSlider4.webp';
import slide5 from '../assets/slider/confSlider5.webp';
import ieeeXploreLogo from '../assets/logos/ieee.png';
import universityLogo from '../assets/slider/galgotias.jpg';
// Remove this line if not using the component
import '../components/HeroSlider.js'

const Home = () => {
    
  // Data arrays for different sections
  const conferenceTopics = [
    {
      category: "Artificial Intelligence & Machine Learning",
      topics: [
        "LLM (Large Language Models)",
        "Federated Learning",
        "Data Science",
        "Big Data",
        "Machine Learning",
        "Deep Learning",
        "Soft Computing",
        "Quantum Computing",
        "AI in Fashion Technology"
      ]
    },
    {
      category: "Security & Blockchain",
      topics: [
        "Blockchain",
        "Cryptography",
        "Watermarking",
        "Privacy and Preservation",
        "Information Security",
        "Cyber Security",
        "Digital Services and Protection",
        "Bitcoin",
        "Cryptocurrency"
      ]
    },
    {
      category: "Communication & Networks",
      topics: [
        "5G/6G/7G Technologies",
        "IoT (Internet of Things)",
        "IIoT (Industrial IoT)",
        "IMoT (Internet of Medical Things)",
        "Wireless Communication Network",
        "Electronics & Communication",
        "Smart Grid",
        "Electric Vehicles"
      ]
    },
    {
      category: "Computing & Applications",
      topics: [
        "Cloud Computing",
        "Edge Computing",
        "Fog Computing",
        "Mobile Computing",
        "Distributed Computing",
        "High Performance Computing",
        "AR/VR/Metaverse",
        "Computer Vision",
        "Image Processing"
      ]
    }
  ];

  const tracks = [
    {
      title: "Emerging Trends in ML/DL",
      chairs: [
        "Dr. Bhanu Sharma, Chitkara University",
        "Dr. Gurjinder Singh, Chitkara University"
      ]
    },
    // Add all other tracks here
  ];

  return (
    <div className="home">
      {/* Hero Section */}<Swiper
  modules={[Autoplay, Navigation, Pagination, EffectFade]}
  effect="fade"
  spaceBetween={0}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  loop={true}
  className="mySwiper"
>
  <SwiperSlide>
    <div className="slide">
      <img src={slide1} alt="Conference" />
      <div className="slide-content">
        <div className="conference-tag">ICCSAI - 2025 (#64074)</div>
        <h1>3rd International Conference on Communication, Security, and Artificial Intelligence</h1>
        <p>Technically Sponsored by IEEE Uttar Pradesh Section</p>
      </div>
    </div>
  </SwiperSlide>
  
  <SwiperSlide>
    <div className="slide">
      <img src={slide2} alt="Conference Dates" />
      <div className="slide-content">
        <div className="conference-tag">Conference Dates</div>
        <h1>4th - 6th April, 2025</h1>
        <p>Join us at Galgotias University, Greater Noida</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="slide">
      <img src={slide3} alt="Publication" />
      <div className="slide-content">
        <div className="conference-tag">Publication</div>
        <h1>IEEE Xplore Digital Library</h1>
        <p>All accepted papers will be published in IEEE Xplore</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="slide">
      <img src={slide4} alt="Mode" />
      <div className="slide-content">
        <div className="conference-tag">Hybrid Mode</div>
        <h1>Physical & Virtual Participation</h1>
        <p>Join us on-site or participate virtually</p>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="slide">
      <img src={slide5} alt="Mode" />
      <div className="slide-content">
        <div className="conference-tag">Hybrid Mode</div>
        <h1>Physical & Virtual Participation</h1>
        <p>Join us on-site or participate virtually</p>
      </div>
    </div>
  </SwiperSlide>
</Swiper>

      {/* Quick Info Banner */}
      <section className="quick-info-banner">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <FaCalendarAlt />
              <div>
                <h3>Date</h3>
                <p>4th - 6th April, 2025</p>
              </div>
            </div>
            <div className="info-item">
              <FaUniversity />
              <div>
                <h3>Venue</h3>
                <p>Galgotias University, Greater Noida</p>
              </div>
            </div>
            <div className="info-item">
              <FaGlobe />
              <div>
                <h3>Mode</h3>
                <p>Hybrid (Physical & Virtual)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About The Conference</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                ICCSAI - 2025 will be held at Galgotias University, Greater Noida, India (NCR New Delhi). 
                This prestigious event brings together global researchers, academics, and industry professionals 
                to discuss advancements in Communication, Security, and Artificial Intelligence.
              </p>
              <div className="conference-objective">
                <h3>Conference Objective</h3>
                <p>
                  ICCSAI-2025 is a non-profit international conference designed to advance knowledge 
                  in Computer & Communication Engineering. With multiple tracks covering diverse topics 
                  in computing, communication, information security, and artificial intelligence, 
                  the conference fosters global collaboration and sets new directions in research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Conference Topics */}
      <section className="topics-section">
        <div className="container">
          <h2 className="section-title">Conference Topics</h2>
          <p className="section-subtitle">Including but not limited to:</p>
          <div className="topics-grid">
            {conferenceTopics.map((category, index) => (
              <div className="topic-category" key={index}>
                <h3>{category.category}</h3>
                <ul>
                  {category.topics.map((topic, i) => (
                    <li key={i}>
                      <FaCheck className="topic-icon" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="tracks-section">
        <div className="container">
          <h2 className="section-title">Conference Tracks and Track Chairs</h2>
          <div className="tracks-grid">
            <div className="track-card">
              <h3>Emerging Trends and Applications in Machine Learning and Deep Learning</h3>
              <div className="track-chairs">
                <h4>Track Chairs:</h4>
                <ul>
                  <li>Dr. Bhanu Sharma, Chitkara University, Punjab, India</li>
                  <li>Dr. Gurjinder Singh, Chitkara University, Punjab, India</li>
                </ul>
              </div>
            </div>

            <div className="track-card">
              <h3>Artificial Intelligence and Soft Computing in Power Systems</h3>
              <div className="track-chairs">
                <h4>Track Chairs:</h4>
                <ul>
                  <li>Dr. Anurag Dwivedi, Bansal Institute of Engineering</li>
                  <li>Dr. Saurabh Kumar, IERT Prayagraj</li>
                  <li>Dr. Punit Kumar Chaubey, Bansal Institute</li>
                </ul>
              </div>
            </div>

            {/* Add more track cards similarly */}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title">Key Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <FaUsers className="highlight-icon" />
              <h3>Focus Areas</h3>
              <p>Advanced computing, information security, AI, and emerging trends in communication technologies</p>
            </div>
            <div className="highlight-card">
              <FaGlobe className="highlight-icon" />
              <h3>Global Participation</h3>
              <p>International researchers, practitioners, and experts sharing cutting-edge research</p>
            </div>
            <div className="highlight-card">
              <FaBook className="highlight-icon" />
              <h3>Expert Sessions</h3>
              <p>Keynote addresses and technical talks from industry leaders and academic pioneers</p>
            </div>
          </div>
        </div>
      </section>

      {/* About University */}
      <section className="university-section">
        <div className="container">
          <h2 className="section-title">About Galgotias University</h2>
          <div className="university-content">
            <div className="university-image">
              <img src={universityLogo} alt="Galgotias University" />
            </div>
            <div className="university-info">
              <p>
                Galgotias University hosts over 35,000 students across 100+ undergraduate 
                and postgraduate programs. Renowned for excellence in teaching, research, 
                and innovation, the university is committed to nurturing leaders who make 
                a global impact.
              </p>
              <div className="university-stats">
                <div className="stat-item">
                  <h3>35,000+</h3>
                  <p>Students</p>
                </div>
                <div className="stat-item">
                  <h3>100+</h3>
                  <p>Programs</p>
                </div>
                <div className="stat-item">
                  <h3>Global</h3>
                  <p>Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="dates-section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="dates-grid">
            <div className="date-card">
              <div className="date-icon">
                <FaCalendarAlt />
              </div>
              <h3>Paper Submission Deadline</h3>
              <p>January 15, 2025</p>
            </div>
            <div className="date-card">
              <div className="date-icon">
                <FaCalendarAlt />
              </div>
              <h3>Notification of Acceptance</h3>
              <p>February 15, 2025</p>
            </div>
            <div className="date-card">
              <div className="date-icon">
                <FaCalendarAlt />
              </div>
              <h3>Camera Ready Submission</h3>
              <p>March 1, 2025</p>
            </div>
            <div className="date-card">
              <div className="date-icon">
                <FaCalendarAlt />
              </div>
              <h3>Conference Dates</h3>
              <p>April 4-6, 2025</p>
            </div>
          </div>
        </div>
      </section>
      {/* Publication Section */}
      <section className="publication-section">
        <div className="container">
          <h2 className="section-title">Publication Opportunity</h2>
          <div className="publication-content">
            <div className="publication-info">
              <img src={ieeeXploreLogo} alt="IEEE Xplore" className="ieee-logo" />
              <p>
                Accepted papers, meeting IEEE Xplore's scope and quality standards, 
                will be submitted for inclusion in IEEE Xplore, ensuring global 
                visibility and recognition for the authors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Conference Organizing Team</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <p>
                    Galgotias University<br />
                    Greater Noida, Uttar Pradesh<br />
                    India
                  </p>
                </div>
                <div className="contact-item">
                  <FaEnvelope />
                  <p>contact@iccsai2025.com</p>
                </div>
                <div className="contact-item">
                  <FaPhone />
                  <p>+91 XXXXXXXXXX</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
};

export default Home;