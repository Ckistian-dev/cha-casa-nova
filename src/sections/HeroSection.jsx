import React from 'react';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';

// Lembre-se de colocar uma imagem de fundo em 'public/hero-background.jpg'
const heroBackgroundImage = '/hero-background.jpg';

const HeroSection = () => {
    const eventDate = '2025-12-20T12:00:00';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const titleWords = "Chá de Casa Nova".split(" ");

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden">
            {/* Imagem de fundo com animação de zoom */}
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBackgroundImage})` }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Overlay em gradiente para mais profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 z-10" />
            
            <motion.div
                className="relative z-20 p-4 flex flex-col items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Texto adicionado no topo */}
                <motion.div 
                    variants={itemVariants} 
                    className="font-dancing-script text-4xl text-white/90 mb-6 tracking-wider"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
                >
                    Você está convidado
                </motion.div>

                <motion.p 
                    className="font-montserrat text-xl sm:text-2xl mb-4" 
                    variants={itemVariants}
                    style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                >
                    Com muita alegria, para o nosso
                </motion.p>
                <motion.h1 
                    className="text-7xl sm:text-9xl font-bold mb-6" 
                    variants={itemVariants}
                    style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
                >
                    {titleWords.map((word, index) => (
                        <span key={index} className="inline-block mr-2 md:mr-4">{word}</span>
                    ))}
                </motion.h1>
                <motion.p 
                    className="font-montserrat text-2xl sm:text-3xl" 
                    variants={itemVariants}
                    style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
                >
                    [Nome 1] & [Nome 2]
                </motion.p>
            </motion.div>
            <div className="absolute bottom-10 z-20 w-full px-4">
                <Countdown targetDate={eventDate} />
            </div>
        </section>
    );
};

export default HeroSection;
