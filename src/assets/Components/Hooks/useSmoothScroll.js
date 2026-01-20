import { useCallback } from 'react';

export const useSmoothScroll = () => {
    const scrollToSection = useCallback((sectionId) => {
        if (sectionId === 'home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

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
    }, []);

    return scrollToSection;
};