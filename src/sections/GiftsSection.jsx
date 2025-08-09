import React from 'react';
import { motion } from 'framer-motion';
import StyleCard from '../components/common/StyleCard';

const GiftsSection = () => {
    const animationProps = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: 'easeOut' },
    };

    return (
        <section id="gifts" className="py-20 sm:py-16 px-6 bg-white">
            <div className="container mx-auto text-center">
                <motion.h2 {...animationProps} className="text-6xl sm:text-7xl text-sage-green mb-4">Como Presentear</motion.h2>
                <motion.p {...animationProps} transition={{ ...animationProps.transition, delay: 0.2 }} className="font-montserrat text-lg text-sage-green/90 max-w-3xl mx-auto mb-12">
                    Para deixar nossa casa com a nossa cara e a festa mais animada, pensamos em uma forma especial de colaboração:
                </motion.p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
                    <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.4 }}>
                        <h3 className="text-4xl text-accent mb-6">Sugestões de Presente</h3>
                        <p className="font-montserrat text-lg text-sage-green/90 mb-6">
                            Não temos uma lista fixa! Queremos que nossa casa tenha o estilo que amamos. Pense em itens com um design minimalista e moderno, em cores neutras como branco, bege, cinza e tons de madeira clara.
                        </p>
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
                    </motion.div>
                    <motion.div {...animationProps} transition={{ ...animationProps.transition, delay: 0.6 }}>
                        <h3 className="text-4xl text-accent mb-6">Garantindo o Brinde</h3>
                        <p className="font-montserrat text-lg text-sage-green/90">
                            Aos homens, pedimos que tragam o que gostam de beber para compartilhar com todos! Cerveja, vinho, gin, refrigerante... sintam-se em casa para abastecer nosso bar e garantir que a festa não tenha hora para acabar.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GiftsSection;
