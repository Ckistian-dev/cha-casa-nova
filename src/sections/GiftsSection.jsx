import React from 'react';
import { motion } from 'framer-motion';
import StyleCard from '../components/common/StyleCard';

// Ícones para os títulos das seções
const HomeIcon = () => (
    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const PartyIcon = () => (
    <svg className="w-10 h-10 text-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


// Componente de Ícone para as Bebidas
const DrinkIcon = ({ children, label }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shadow-inner mb-2 text-beige">
      {children}
    </div>
    <p className="font-montserrat text-sm font-medium text-beige/80">{label}</p>
  </div>
);

const GiftsSection = () => {
    const animationProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: 'easeOut' },
    };

    return (
        <section id="gifts" className="py-20 sm:py-32 px-6 bg-white">
            <div className="container mx-auto text-center">
                <motion.h2 {...animationProps} className="text-6xl sm:text-7xl text-sage-green mb-4">Sugestões de Presente</motion.h2>
                <motion.p {...animationProps} transition={{ ...animationProps.transition, delay: 0.2 }} className="font-montserrat text-lg text-sage-green/90 max-w-3xl mx-auto mb-12">
                    Sua presença é o nosso maior presente! Mas se quiser nos mimar, pensamos em uma forma especial de colaboração para deixar nosso novo lar com a nossa cara e a festa mais animada.
                </motion.p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
                    {/* Coluna da Esquerda: Presentes para a Casa */}
                    <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.4 }} className="bg-beige/50 p-8 rounded-lg flex flex-col">
                        <div className="flex items-center gap-4 mb-2">
                            <HomeIcon />
                            <h3 className="text-4xl text-accent">Para a Casa</h3>
                        </div>
                        <p className="font-montserrat text-lg text-sage-green/80 mb-6 ml-14 -mt-2">(Sugestão para as mulheres)</p>
                        <p className="font-montserrat text-lg text-sage-green/90 mb-6">
                            Para nos ajudar a montar nosso cantinho, sugerimos itens com um design minimalista e moderno, em cores neutras como branco, bege, cinza e tons de madeira clara.
                        </p>
                        <div className="flex-grow">
                            <StyleCard
                                title="Decoração Escandinava"
                                colors={['#FFFFFF', '#F4F1EA', '#CCCCCC', '#D3C5B3']}
                                examples="Vasos, almofadas, porta-retratos, mantas, etc."
                            />
                            <StyleCard
                                title="Itens de Cozinha Modernos"
                                colors={['#FFFFFF', '#3A3F36', '#A88A6E', '#E5E5E5']}
                                examples="Utensílios de bambu, potes de vidro, tábuas de madeira, etc."
                            />
                        </div>
                    </motion.div>

                    {/* Coluna da Direita: Bebidas */}
                    <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.6 }} className="bg-sage-green p-8 rounded-lg text-white flex flex-col">
                         <div className="flex items-center gap-4 mb-2">
                            <PartyIcon />
                            <h3 className="text-4xl text-beige">Para a Festa</h3>
                        </div>
                        <p className="font-montserrat text-lg text-beige/80 mb-6 ml-14 -mt-2">(Sugestão para os homens)</p>
                        <p className="font-montserrat text-lg text-beige/90 mb-8">
                            Que tal nos ajudar a montar o bar? Traga o que você mais gosta de beber para compartilhar e vamos garantir que a festa não tenha hora para acabar!
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-auto">
                            <DrinkIcon label="Cervejas">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h3m-3 4h3m-7-4h.01M6 14h.01M10 20l-4-4 4-4M6 16h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                            </DrinkIcon>
                            <DrinkIcon label="Vinhos">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </DrinkIcon>
                            <DrinkIcon label="Destilados">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6" /></svg>
                            </DrinkIcon>
                            <DrinkIcon label="Refrigerantes">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </DrinkIcon>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GiftsSection;
