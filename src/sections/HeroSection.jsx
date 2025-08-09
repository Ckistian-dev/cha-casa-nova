import React from 'react';
import { motion } from 'framer-motion';
import Countdown from '../components/Countdown';

// --- INSTRUÇÕES PARA VOCÊ ---
// 1. Coloque suas duas imagens na pasta `public`.
//    - Exemplo de nome para desktop: `hero-desktop.jpg`
//    - Exemplo de nome para mobile: `hero-mobile.jpg`
// 2. Substitua os nomes dos arquivos abaixo pelos nomes que você usou.

const heroDesktopImage = '/hero-desktop.jpg';
const heroMobileImage = '/hero-mobile.jpg';

const HeroSection = () => {
    const eventDate = '2025-10-19T12:00:00';

    return (
        // O container principal ainda ocupa a tela inteira.
        <section className="relative h-screen w-full flex flex-col items-center justify-end text-center text-white overflow-hidden">
            
            {/* Imagem de fundo para DESKTOP (visível em telas grandes 'lg' e maiores) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center hidden lg:block"
                style={{ backgroundImage: `url(${heroDesktopImage})` }}
            />

            {/* Imagem de fundo para MOBILE (visível em telas menores que 'lg') */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center block lg:hidden"
                style={{ backgroundImage: `url(${heroMobileImage})` }}
            />
            
            {/* O cronômetro agora fica na parte de baixo da seção, sobre a imagem */}
            {/* Adicionei um fundo semi-transparente para garantir a legibilidade do cronômetro */}
            <motion.div 
                className="relative z-20 w-full p-4 mb-5 bg-black/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
                <Countdown targetDate={eventDate} />
            </motion.div>
        </section>
    );
};

export default HeroSection;
