// hooks/useScrollDetection.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollDetection = () => {
    const [isAboutSection, setIsAboutSection] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Only observe on home page
        if (location.pathname !== '/') {
            setIsAboutSection(false);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsAboutSection(true);
                    } else {
                        setIsAboutSection(false);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px 0px 0px'
            }
        );

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, [location.pathname]);

    return isAboutSection;
};