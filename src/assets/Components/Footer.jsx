import location from '../icons/location_on.png'
import phone from '../icons/Phone.png'
import email from '../icons/mail.png'
import { useState, useEffect } from 'react'
const Footer = () => {

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const year = now.getFullYear();
      setCurrentTime(`${year} - `);
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

    const [formData, setFormData] = useState({
        yourName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    
      const [loading, setLoading] = useState(false);
      const [sendMsg, setSendMsg] = useState("");
      const [errors, setErrors] = useState({});
    
      const contactScriptURL =
        "https://script.google.com/macros/s/AKfycbywruDonAlrGkccAQg6x7xePEwqCsDsARHOjCEv3D-amSUc4NbV77BOXgukat4XVg/exec";
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { yourName, phoneNumber, email, message } = formData;
    
        const newErrors = {};
        if (!yourName.trim()) newErrors.yourName = "Name is required!";
        if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
          newErrors.email = "Valid email is required!";
        if (!phoneNumber.match(/^[0-9]{10}$/))
          newErrors.phoneNumber = "A valid 10-digit phone number is required.";
        if (!message.trim()) newErrors.message = "Message is required.";
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }
    
        setLoading(true);
        setErrors({});
        try {
          const data = new URLSearchParams();
          for (const [key, value] of Object.entries(formData)) {
            data.append(key, value);
          }
    
          const response = await fetch(contactScriptURL, {
            method: 'POST',
            body: data,
          });
    
          if (response.ok) {
            setSendMsg('Thank you! Your message has been submitted.');
            setFormData({
              yourName: '',
              phoneNumber: '',
              email: '',
              message: '',
            });
          } else {
            throw new Error('Submission failed');
          }
        } catch (error) {
          console.error(error);
          setSendMsg('Something went wrong. Please try again later.');
        } finally {
          setLoading(false);
          setTimeout(() => setSendMsg(''), 5000);
        }
      };

    return (
        <>
        <div className="footer-container">
            <div className="footer-cont">
                <div className="footer-left-pane">
                        <p className="text002">CONTACT</p>
                        <p className="text003"style={{color: "white"}}>GET A QUOTE</p>
                        <p className="text002">Our mission is to provide affordable, reliable, and professional security and access control solutions that give our clients peace of mind, safety, and convenience.</p>
                        <section>
                    <a href="mailto:given.scissor@gmail.com" className="card005">
                        <div className="icon">
                          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailRoundedIcon"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg>
                        </div>
                          <div className="details">
                            <p>Email Address</p>
                            <p>given.scissor@gmail.com</p>
                          </div>
                    </a>
                    <a href="tel:+27 76 567 8097" className="card005">
                          <div className="icon">
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WhatsAppIcon"><path fill="currentColor" d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path></svg>
                          </div>
                          <div className="details">
                                  <p>Phone - Whatsapp</p>
                                  <p>+27 76 567 8097</p>
                          </div>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61579649803354" className="card005" target='_blank' rel="noopener noreferrer">
                          <div className="icon">
                          <svg fill="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
                              </svg>
                          </div>
                          <div className="details">
                                  <p>Facebook</p>
                                  <p>Scissor Security Technology</p>
                          </div>
                    </a>
                    <a href="https://www.google.com/maps/place/Maphutha+Street,+Ga-Masemola/@-24.5498581,29.6402589,77m/data=!3m1!1e3!4m6!3m5!1s0x1ec11030466df9b7:0x856e93c42983cef!8m2!3d-24.5497167!4d29.6404416!16s%2Fg%2F11svx0v5wk?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" className="card005">
                          <div className="icon">
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                          </div>
                          <div className="details">
                                <p>Physical Address</p>
                                <p>14 Dikbas Street, Brakpan | Gauteng,  South Africa</p>
                          </div>
                    </a>
          </section>        
                </div>
                <div className="footer-right-pane">
                <form onSubmit={handleSubmit} method="POST">

                        <fieldset>
                        <div className="name-and-phone">
                            <label htmlFor="yourName">
                            Enter Name:
                            <input
                                id="yourName"
                                name="yourName"
                                type="text"
                                placeholder="Example: Given"
                                value={formData.yourName}
                                onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                            />
                            {errors.yourName && <p className="error-message">{errors.yourName}</p>}
                            </label>

                            <label htmlFor="phoneNumber">
                            Phone Number:
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="Example: +27 76 567 8097"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
                            </label>
                            </div>
                            <label htmlFor="email">
                            Email Address:
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Example: given.scissor@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                            </label>
                        

                        <label htmlFor="message">
                            Message:
                            <textarea
                            id="message"
                            name="message"
                            rows="4"
                            cols="10"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            {errors.message && <p className="error-message">{errors.message}</p>}
                        </label>
                        </fieldset>

                        <input
                        type="submit"
                        value={loading ? "Submitting..." : "Get a Quote"}
                        name="send-message"
                        className="submit-btn"
                        disabled={loading}
                        />
                        {sendMsg && <p className="send-message">{sendMsg}</p>}
                    </form>

                </div>
            </div>
            <div className="footer-copyright">

            <p>Copyright &copy;{currentTime} SST (Pty) Ltd</p>
            <p style={{textDecoration: "underline"}}> <a href="https://www.aavenagency.co.za" target='_blank'>Aaven Agency   </a></p>
            </div>

        </div>
        </>
    )
}
export default Footer