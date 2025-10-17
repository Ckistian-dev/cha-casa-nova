import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StyleCard from '../components/common/StyleCard';

// Ícones para os títulos das seções
const HomeIcon = () => (
    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const GiftIcon = () => (
    <svg className="w-10 h-10 text-beige" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm6 4h-2v-1c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v1H6c-1.103 0-2 .897-2 2v4h16v-4c0-1.103-.897-2-2-2z"></path>
    </svg>
);


const GiftsSection = () => {
    const [pixCopied, setPixCopied] = useState(false);
    const pixKey = "45999861237";

    const handleCopyPix = () => {
        navigator.clipboard.writeText(pixKey);
        setPixCopied(true);
        setTimeout(() => {
            setPixCopied(false);
        }, 2000); // O texto volta ao normal após 2 segundos
    };

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
                    Sua presença é o nosso maior presente! Mas se quiser nos mimar, aqui estão algumas sugestões para nos ajudar a montar nosso novo lar.
                </motion.p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
                    {/* Coluna da Esquerda: Presentes para a Casa */}
                    <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.4 }} className="bg-beige/50 p-8 rounded-lg flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <HomeIcon />
                            <h3 className="text-4xl text-accent">Para a Casa</h3>
                        </div>
                        <p className="font-montserrat text-lg text-sage-green/90 mb-6">
                            Para nos ajudar a montar nosso cantinho, sugerimos itens com um design minimalista e moderno, em cores neutras como branco, bege, cinza e tons de madeira clara.
                        </p>
                        <div className="flex-grow space-y-4">
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

                    {/* Coluna da Direita: Presente em Dinheiro (PIX) */}
                    <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.6 }} className="bg-sage-green p-8 rounded-lg text-white flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <GiftIcon />
                            <h3 className="text-4xl text-beige">Presente em Dinheiro</h3>
                        </div>
                        <p className="font-montserrat text-lg text-beige/90 mb-8">
                            Se preferir, você pode nos presentear com um valor em dinheiro para ajudar nos custos da casa nova. Agradecemos imensamente o carinho!
                        </p>
                        <div className="bg-white/10 p-6 rounded-lg text-center mt-auto">
                            <p className="font-montserrat text-sm text-beige/80 mb-1">CHAVE PIX (Celular)</p>
                            <p className="text-2xl font-bold text-white tracking-wider mb-4">{pixKey}</p>
                            
                            <p className="font-montserrat text-sm text-beige/80 mb-1">Nome</p>
                            <p className="text-lg font-semibold text-white mb-4">Cristian Gabriel Kist</p>

                            <p className="font-montserrat text-sm text-beige/80 mb-1">Instituição</p>
                            <p className="text-lg font-semibold text-white mb-6">Nubank</p>
                            
                            <button
                                onClick={handleCopyPix}
                                className={`w-full py-3 px-6 rounded-lg font-bold font-montserrat text-lg transition-all duration-300 ease-in-out ${
                                    pixCopied
                                    ? 'bg-accent text-white'
                                    : 'bg-beige text-sage-green hover:bg-beige/80'
                                }`}
                            >
                                {pixCopied ? 'Chave Copiada!' : 'Copiar Chave PIX'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GiftsSection;