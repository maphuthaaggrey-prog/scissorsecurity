import { projects, declaration } from '../data/Projects';
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import { useState } from 'react';

function WorkHistory() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [requesterEmail, setRequesterEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 


  const sendRequest = async () => {
    if (!requesterEmail) {
      setMessage("Please enter your email.");
      setMessageType("error");
      return;
    }
  
    setMessage("Sending request...");
    setMessageType("");
  
    try {
      const formData = new URLSearchParams();
      formData.append("project", selectedProject);
      formData.append("requester", requesterEmail);
  
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzhYBaAoAl3R3GCEkjl_w-quaXFuqbSKaHuTHZVg-fKLrhJcXwyv-GvrHfhxkjSP4IYLw/exec",
        {
          method: "POST",
          body: formData,
        }
      );
  
      const text = await res.text(); 
  
      if (text.trim() === "Success") {
        setMessage("Request sent! You will be contacted after verification.");
        setMessageType("success");
        setRequesterEmail("");
        setSelectedProject(null);
      } else {
        setMessage("Failed to send request. Try again.");
        setMessageType("error");
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error. Please try again.");
      setMessageType("error");
    }
  };
  
  return (
    <>
            <SEO 
                title="Work History - Emily Mahlehu Mlotshywa (Pty) Ltd"
                description="Explore our completed projects and achievements in industrial cleaning, transportation, and civil construction across South Africa."
                canonical="https://yourdomain.com/work-history"
            />
    <div className='wrap'>
      <div className="projects-container">
        <p className="text002">WORK</p>
        <p className="text003">WORK HISTORY</p>
        <p className="thick-line"></p>
        
        <div className="work-history-layout">
          <div className="work-history-left">
            <div className="timeline">
              {projects.map((project, index) => (
                <div key={project.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-circle"></div>
                    {index < projects.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <h3 className="job-title">{project.roles}</h3>
                    <p className="company-name">{project.client}</p>
                    <p className="job-period">Duration: {project.duration}</p>
                    <p className="project-title">{project.title}</p>
                    <ul className="achievements-list">
                      {project.scope.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
          {/*         <div className="contact-info">
                      <p>Contact: {project.contact.name}</p>
                      <p>Position: {project.contact.position}</p>
                      <p>Phone: {project.contact.phone}</p>
                    </div> */}  
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Projects in Cards */}
          <div className="projects-right">
            <p className='declaration-text'>{declaration}</p>
            <div className="projects-list">
              {projects.map(project => (
                <div key={project.id} className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-client">Client: {project.client}</p>
                  <p className="project-personnel">Personnel: {project.personnel.join(', ')}</p>
                  <p className="project-role">Role: {project.roles}</p>
                  <p className="project-duration">Duration: {project.duration}</p>
                  
                  <div className="scope-section">
                    <h4>Scope of Work:</h4>
                    <ul className="scope-list">
                      {project.scope.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="contact-section">
                    <h4>Contact Details:</h4>
                    <p>Not disclosed due to POPI Act</p>
                    <p>Available on verification request</p>
                    <button
                        className='request-contact'
                        onClick={() => {
                          setSelectedProject(project.client);
                          setShowModal(true);
                          setMessage("");
                          setMessageType("");
                          setRequesterEmail("");
                        }}
                      >
                        Request
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h3>Confirm Request</h3>
      <p>
        You are requesting contact details for:
        <br />
        <strong>{selectedProject}</strong>
      </p>

      <input
        type="email"
        placeholder="Enter your email for verification"
        value={requesterEmail}
        onChange={(e) => setRequesterEmail(e.target.value)}
      />

      {message && (
        <p className={`form-message ${messageType}`}>
          {message}
        </p>
      )}
      <div className="modal-actions">
      <button
          onClick={() => {
            setShowModal(false);
            setRequesterEmail("");
            setMessage("");
            setMessageType("");
          }}
        >
          Cancel
        </button>
        <button onClick={sendRequest}>
                  Confirm
                </button>

      </div>
    </div>
  </div>
)}


    </div>
          <section id="contact">
          <Footer />
        </section>
        </>
  );
}

export default WorkHistory;