import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HashHandler = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const sectionId = location.hash.replace('#', '');
            
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
            }, 500);
        }
        
        if (location.pathname !== '/') {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return null;
};

export default HashHandler;