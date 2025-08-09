import React from 'react';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';

// Lembre-se de colocar uma imagem de fundo em 'public/hero-background.jpg'
const heroBackgroundImage = '/hero-background.jpg';

const HeroSection = () => {
    const eventDate = '2025-12-20T12:00:00';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const titleWords = "Chá de Casa Nova".split(" ");

    return (
        <section 
            className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center" 
            style={{backgroundImage: `url(${heroBackgroundImage})`}}
        >
            <div className="absolute inset-0 bg-black/50 z-0" />
            <motion.div
                className="relative z-10 p-4 flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p className="font-montserrat text-lg sm:text-2xl mb-4" variants={itemVariants}>
                    Com muita alegria, convidamos você para o nosso
                </motion.p>
                <motion.h1 className="text-7xl sm:text-9xl font-bold mb-6" variants={itemVariants}>
                    {titleWords.map((word, index) => (
                        <span key={index} className="inline-block mr-2 md:mr-4">{word}</span>
                    ))}
                </motion.h1>
                <motion.p className="font-montserrat text-xl sm:text-3xl" variants={itemVariants}>
                    [Nome 1] & [Nome 2]
                </motion.p>
            </motion.div>
            <div className="absolute bottom-10 z-10 w-full px-4">
                <Countdown targetDate={eventDate} />
            </div>
        </section>
    );
};

export default HeroSection;
