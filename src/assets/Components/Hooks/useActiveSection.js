import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        const sections = ['home', 'about', 'services', 'director', 'contact'];
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-100px 0px -100px 0px'
            }
        );

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [location.pathname]);

    return activeSection;
};