import aboutImage from '../images/WhatsApp Image 2026-01-18 at 21.30.34.jpeg'
import mission from '../images/WhatsApp Image 2026-01-18 at 21.30.34.jpeg'
const About = () => {
    return (
        <>     
        <div className="services-bg-image">   
        <div>
            <div className="about-container">
                <div className="about-left-pane">
                   <p className="text002">About Scissor Security Technology</p>
                   <p className="text003">WHO WE ARE</p>
                   <p className="text002">Scissor Security Technology (Pty) Ltd is a registered South African private company providing professional security and access solutions for homes and businesses.</p>
                   <br />
                   <p className="text002">We provide reliable solutions for homes, businesses, and estates, ensuring safety, convenience, and peace of mind.</p>
                   <br/>
                   <p className="text002">The company is officially registered with the Companies and Intellectual Property Commission (CIPC) and operates as an active business in South Africa.</p>
                    <br />
                    <p className='text002'>Founder: Given Masehla</p>
                </div>
                <div className="about-right-pane">
                    <img src={aboutImage} className='about-image' alt="About image"></img>
                </div>
           </div>

         </div>

            </div>
        </>

    );
}
export default About