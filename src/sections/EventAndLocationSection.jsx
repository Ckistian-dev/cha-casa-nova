import React from 'react';
import { motion } from 'framer-motion';

// Ícones para a seção de informações
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


const EventAndLocationSection = () => {
    // IMPORTANTE: Substitua esta URL pela URL do Google Maps do local da sua festa.
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10252.604644602443!2d-53.7229513595933!3d-24.69791857658052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3bf8c377b4c97%3A0xb60fa2dd34390bc7!2sCh%C3%A1cara%20girassol!5e0!3m2!1spt-BR!2sbr!4v1757082292409!5m2!1spt-BR!2sbr";
    
    const animationProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: 'easeOut' },
    };

    return (
        <section id="location" className="py-20 sm:py-16 px-6 bg-white">
            <div className="container mx-auto">
                <motion.h2 {...animationProps} className="text-6xl sm:text-7xl text-sage-green mb-12 text-center">A Festa e o Local</motion.h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Coluna da Esquerda: Informações e Mapa */}
                    <motion.div {...animationProps}>
                        <div className="flex items-center mb-6">
                            <CalendarIcon />
                            <p className="font-montserrat text-xl text-sage-green font-medium">Sábado, 18 de Outubro de 2025</p>
                        </div>
                        <div className="flex items-center mb-8">
                            <ClockIcon />
                            <p className="font-montserrat text-xl text-sage-green font-medium">A partir das 11:00h</p>
                        </div>
                        
                        <h3 className="font-montserrat text-2xl font-bold text-sage-green mt-8 mb-2">Chácara Girassol</h3>
                        <p className="font-montserrat text-lg text-sage-green/90 mb-4">Linha bue cae Sitio - Atrás do Centro de Eventos Ismael Sperafico</p>

                        <p className="font-montserrat text-lg text-sage-green/90 leading-relaxed mb-8">
                            Prepare-se para um almoço delicioso que se estenderá por uma tarde inteira de celebração, boa conversa e música!
                        </p>

                        <div className="w-full h-80 rounded-lg overflow-hidden shadow-xl">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização do Evento"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Coluna da Direita: Mosaico de Imagens */}
                    <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.2 }} className="grid grid-cols-2 grid-rows-2 gap-4 h-[400px] md:h-[600px]">
                        <div className="col-span-2 row-span-1 overflow-hidden rounded-lg shadow-md">
                            <img src="https://i.ibb.co/3yzQ0HR2/Whats-App-Image-2025-09-05-at-10-55-08-5b7e06db.jpg" alt="Foto do local 1" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 object-[30%_60%]" />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <img src="https://i.ibb.co/wZqS0rQ4/Whats-App-Image-2025-09-05-at-10-55-13-6f7a3682.jpg" alt="Foto do local 2" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </div>
                        <div className="overflow-hidden rounded-lg shadow-md">
                            <img src="https://i.ibb.co/20DHBg5T/Whats-App-Image-2025-09-05-at-10-55-09-46fcac75.jpg" alt="Foto do local 3" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EventAndLocationSection;
