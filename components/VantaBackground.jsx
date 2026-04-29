'use client';
import { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export default function VantaBackground() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        const width = window.innerWidth;

        const isMobile = width < 768;
        const isTablet = width >= 768 && width <= 1024;

        if (!vantaEffect.current && vantaRef.current) {
            vantaEffect.current = NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: false,
                gyroControls: false,
                minHeight: 1000.0,
                minWidth: 400.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: '#00E5FF',
                backgroundColor: '#001016',
                // points: 12,
                points: isMobile ? 4 : isTablet ? 9 : 10,
                maxDistance: 20,
                // spacing: 18,
                spacing: isMobile ? 20 : isTablet ? 19 : 15,
                showDots: false,
            });
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return <div ref={vantaRef} className="w-full h-full -z-10" />;
}
