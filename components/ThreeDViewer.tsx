import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ThreeDViewerProps {
    src: string;
    alt: string;
}

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ src, alt }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    // Motion values for mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for rotation
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [25, -25]), {
        stiffness: 400,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-25, 25]), {
        stiffness: 400,
        damping: 30,
    });

    // Glare effect opacity and position
    const glareOpacity = useTransform([x, y], ([latestX, latestY]: number[]) => {
        const distance = Math.sqrt(latestX ** 2 + latestY ** 2);
        return Math.min(distance * 1.5, 0.6);
    });
    const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative w-full max-w-md aspect-square"
            >
                {/* Product Image */}
                <motion.img
                    src={src}
                    alt={alt}
                    style={{
                        transform: 'translateZ(50px)',
                    }}
                    className="w-full h-full object-contain drop-shadow-2xl pointer-events-none"
                />
                {/* Dynamic Glare Overlay */}
                <motion.div
                    style={{
                        opacity: glareOpacity,
                        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
                        transform: 'translateZ(60px)',
                    }}
                    className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay"
                />
            </motion.div>
        </motion.div>
    );
};

export default ThreeDViewer;
