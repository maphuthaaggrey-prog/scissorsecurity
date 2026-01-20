// Header.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import logo from '../images/logo1.png'
import { useScrollDetection } from './Hooks/useScrollDetection';
import { useSmoothScroll } from './Hooks/useSmoothScroll';
import { useActiveSection } from './Hooks/useActiveSection';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isAboutSection = useScrollDetection();
    const scrollToSection = useSmoothScroll();
    const activeSection = useActiveSection();
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavClick = (sectionId) => {
        // If we're not on the home page, navigate to home first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete, then scroll to section
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
        
            scrollToSection(sectionId);
        }
        setMenuOpen(false);
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
          
            navigate('/');
        } else {
           
            scrollToSection('home');
        }
        setMenuOpen(false);
    };

    const handlePageNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };


    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

  
    const isHomePage = location.pathname === '/';

    return ( 
        <>
            <div className={`navbar-container ${isHomePage && isAboutSection ? 'white-bg' : 'white-bg'}`}>
                <div className="navbar">
                    <div>
                        <Link to="/" onClick={handleHomeClick}>
                            <img src={logo} className='logo' alt="Logo"></img>
                        </Link>
                    </div>

                    <nav>
                        <ul className={menuOpen ? "nav ul open" : ""}>
                            <li>
                                <button className="close-btn" onClick={toggleMenu}>
                                    <svg width="45px" height="45px" viewBox="6 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Close">
                                                <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
                                                <line x1="16.9999" y1="7" x2="7.00001" y2="16.9999" id="Path" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
                                                <line x1="7.00006" y1="7" x2="17" y2="16.9999" id="Path" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </li>
                            
                            {/* Home Page Navigation */}
                            <li onClick={() => handleNavClick('home')}>
                                <Link 
                                    to="/" 
                                    onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                                    className={isHomePage && activeSection === 'home' ? 'active' : ''}
                                >
                                    Home
                                </Link>
                            </li>
                            <li onClick={() => handleNavClick('about')}>
                                <Link 
                                    to="/" 
                                    onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
                                    className={isHomePage && activeSection === 'about' ? 'active' : ''}
                                >
                                    About
                                </Link>
                            </li>
                            <li onClick={() => handleNavClick('services')}>
                                <Link 
                                    to="/" 
                                    onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                                    className={isHomePage && activeSection === 'services' ? 'active' : ''}
                                >
                                    Services
                                </Link>
                            </li>

                            <li onClick={() => handlePageNavigation('/gallery')}>
                                <Link 
                                    to="/gallery" 
                                    onClick={(e) => { e.preventDefault(); handlePageNavigation('/gallery'); }}
                                    className={location.pathname === '/gallery' ? 'active' : ''}
                                >
                                    Gallery
                                </Link>
                            </li>
                            
                            <li className="contact" onClick={() => handleNavClick('contact')}>
                                <Link 
                                    to="/" 
                                    onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                                >
                                    <button>Contact us</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="openmenu111">
                        <button className="menu-open" onClick={toggleMenu}>
                            <svg width="45px" height="45px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <g id="Menu / Menu_Alt_01">
                                    <path id="Vector" fill='currentColor' d="M12 17H19M5 12H19M5 7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Header;