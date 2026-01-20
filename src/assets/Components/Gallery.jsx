import React, { useState } from 'react';
import Footer from './Footer'
import SEO from '../Components/SEO'

import before from '../images/WhatsApp Image 2026-01-18 at 21.09.55.jpeg'
import before1 from '../images/WhatsApp Image 2026-01-18 at 21.09.56 (1).jpeg'
import before2 from '../images/WhatsApp Image 2026-01-18 at 21.09.56.jpeg'
import before3 from '../images/WhatsApp Image 2026-01-18 at 21.09.57.jpeg'
import before4 from '../images/WhatsApp Image 2026-01-18 at 21.10.01 (1).jpeg'
import before5 from '../images/WhatsApp Image 2026-01-18 at 21.10.01.jpeg'
import after from '../images/WhatsApp Image 2026-01-18 at 21.10.02 (1).jpeg'
import after1 from '../images/WhatsApp Image 2026-01-18 at 21.10.02.jpeg'
import after2 from '../images/WhatsApp Image 2026-01-18 at 21.10.03.jpeg'
import after3 from '../images/WhatsApp Image 2026-01-18 at 21.10.04.jpeg'
import after4 from '../images/WhatsApp Image 2026-01-18 at 21.10.05.jpeg'
import after5 from '../images/WhatsApp Image 2026-01-18 at 21.15.38.jpeg'
import after6 from '../images/WhatsApp Image 2026-01-18 at 21.16.55.jpeg'
import after7 from '../images/WhatsApp Image 2026-01-18 at 21.30.34.jpeg'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // BEFORE images array - showing initial state
  const beforeImages = [
    {
      id: 1,
      image: before,
      title: 'Backup power for uninterrupted security',
      description: 'Powering your security, even during outages. We install maintenance-free backup batteries to ensure your gate motor, alarm, and access systems stay operational 24/7—no matter the electricity situation.',
      location: 'Komati Power Station'
    },
    {
      id: 2,
      image: after6,
      title: 'Double-layer protection installed.',
      description: 'Electric fencing deters intruders physically, while CCTV monitors and records every attempt—giving you both prevention and evidence in one secure perimeter.',
      location: 'Matla Power Station'
    },
    {
      id: 3,
      image: before2,
      title: 'Live CCTV surveillance',
      description: 'CCTV system operational and logging. After installation, our cameras provide continuous surveillance with accurate timestamps—offering you reliable monitoring and verifiable footage when it matters most.',
      location: 'Kriel Power Station'
    },
    {
      id: 4,
      image: before3,
      title: 'CCTV Camera',
      description: 'Visible security that works. A well-placed CCTV camera deters crime before it happens and records everything that does—protecting your home or business around the clock.',
      location: 'Lethabo Power Station'
    },
    {
      id: 5,
      image: before4,
      title: `Installed Gate Motor`,
      description: 'Our gate motor installation adds both convenience and security—allowing you to open and close your gate remotely while keeping unwanted visitors out.',
      location: 'Komati Power Station'
    },
    {
      id: 6,
      image: before5,
      title: 'Radial stockpile conveyor',
      description: 'Conveyor system requiring cleaning and maintenance before restoration.',
      location: 'Matla Power Station'
    }
  ];

  const afterImages = [
    {
      id: 1,
      image: after,
      title: 'Alarm System',
      description: `Your alarm system, armed and ready. This panel display confirms your security system is active and monitoring—providing protection whether you're home or away.`,
      location: 'Komati Power Station'
    },
    {
      id: 2,
      image: after1,
      title: 'Stairwell and Floor Area',
      description: 'The floor area restored to a clean and safe condition with all surfaces cleared, looking refreshed and well-maintained.',
      location: 'Matla Power Station'
    },
    {
      id: 3,
      image: after2,
      title: 'Installed Garage Motor',
      description: 'Open your garage without leaving the car. Our garage motor installations bring modern convenience and enhanced security to your home—controlled by remote.',
      location: 'Kriel Power Station'
    },
    {
      id: 4,
      image: after3,
      title: 'Installation of Garage Motor',
      description: 'From manual lift to automated ease. This installation moment captures the skilled work that transforms your garage into a secure, convenient entry point at the touch of a button.',
      location: 'Lethabo Power Station'
    },

    {
      id: 6,
      image: after5,
      title: 'Electric Fence Control',
      description: 'Electric fence control installed and configured. We set up and test every component—from the energizer to the alarm outputs—so your fence acts as both a physical and a psychological barrier.',
      location: 'Matla Power Station'
    }
  ];


  const openModal = (image, type) => {
    setSelectedImage({...image, type});
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='gallery-cont'>
      <SEO 
        title="Gallery - Emily Mahlehu Mlotshywa (Pty) Ltd"
        description="View our project gallery showcasing industrial cleaning, transportation, and construction work completed across South Africa."
        canonical="https://yourdomain.com/gallery"
      />
      <div className='wrap'>
        <div className="gallery-container">
          <br/>
          <br/>
          <p className="text002">Scissor Security Techmology Gallery</p>
          <p className="text003">PICTURES</p>
          <div className="gallery-intro">
            <p className='text006'>See our security solutions in action. From initial setup to completed installation, we document every 
    step to showcase our meticulous workmanship and attention to detail. Each project demonstrates our 
    commitment to providing reliable security and access solutions for homes and businesses across South Africa.</p>
          </div>

          {/* BEFORE Section */}
          <div className="gallery-section">
            <div className="gallery-grid">
              {beforeImages.map((item) => (
                <div key={item.id} className="gallery-item">
                  <div 
                    className="image-wrapper before-image"
                    onClick={() => openModal(item, 'before')}
                  >
                    <img src={item.image} alt={`Before - ${item.title}`} />
                    <div className="image-overlay">
                      <span>Click to enlarge</span>
                    </div>
                    <div className="image-info">
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER Section */}
          <div className="gallery-section">
            <div className="gallery-grid">
              {afterImages.map((item) => (
                <div key={item.id} className="gallery-item">
                  <div 
                    className="image-wrapper after-image"
                    onClick={() => openModal(item, 'after')}
                  >
                    <img src={item.image} alt={`After - ${item.title}`} />
                    <div className="image-overlay">
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal for enlarged images */}
          {selectedImage && (
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>×</button>
                <img 
                  src={selectedImage.image} 
                  alt={`${selectedImage.type} - ${selectedImage.title}`}
                />
                <div className="modal-info">
                  <h3>{selectedImage.title}</h3>
                  <p className="description">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default Gallery;