import { Link } from 'react-router-dom'

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offset = 80;
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
        <div className="hero" >
            <div className="wrap">
                <div className="main-hero">
                    <p className="text001">Scissor Security Technology</p>
                    <p className="text002">Professional security and access solutions for homes and businesses.</p>
                    <div className="hero-btns">
                        <button 
                            className="hero-contact-btn" 
                            onClick={scrollToContact}
                        >
                            Contact us
                        </button>
                        <Link to="/gallery">
                            <button className="hero-work-btn">Gallery</button>
                        </Link>
                    </div>
                    <p className='experience'>+10 Years Experience</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero