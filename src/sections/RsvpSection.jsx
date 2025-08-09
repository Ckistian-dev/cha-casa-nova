import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const RsvpSection = () => {
    const [formData, setFormData] = useState({ name: '', guests: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio para um backend ou serviço aqui
        console.log('Confirmação enviada:', formData);
        setIsSubmitted(true);
    };

    return (
        <section id="rsvp" className="py-20 sm:py-32 px-6 bg-beige">
            <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-6xl sm:text-7xl text-sage-green mb-4">Confirme sua Presença</h2>
                <p className="font-montserrat text-lg text-sage-green/90 mb-10">
                    Por favor, confirme sua presença até o dia 10 de Dezembro. Apenas uma confirmação por família é necessária, ok?
                </p>
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.form
                            key="form"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Input
                                label="Nome de um responsável da família"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ex: Família Silva"
                            />
                            <Input
                                label="Total de pessoas (incluindo crianças)"
                                name="guests"
                                type="number"
                                value={formData.guests}
                                onChange={handleChange}
                                placeholder="Ex: 4"
                            />
                            <Button type="submit">Enviar Confirmação</Button>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="thankyou"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: 'backOut' }}
                        >
                            <h3 className="text-5xl text-accent mb-4">Obrigado!</h3>
                            <p className="font-montserrat text-xl text-sage-green">Sua presença foi confirmada. Esperamos por vocês!</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default RsvpSection;
