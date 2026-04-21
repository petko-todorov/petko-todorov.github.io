'use client';
import { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export default function VantaBackground() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null); // Използваме ref вместо state

    useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
            vantaEffect.current = NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                color: '#00E5FF',
                backgroundColor: '#001016',
                points: 10.0,
                maxDistance: 20.0,
                spacing: 15.0,
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
