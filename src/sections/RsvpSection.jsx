import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

// Função para formatar o número de telefone
const formatPhoneNumber = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g,'').slice(0, 11);
  value = value.replace(/(\d{2})(\d)/,"($1) $2");
  value = value.replace(/(\d)(\d{4})$/,"$1-$2");
  return value;
}

const RsvpSection = () => {
    // --- IMPORTANTE: Substitua pela URL do seu script do Google ---
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzRGxOXEL8ORB5MqU3Ylub8QPIkOxL3GvG36Jw4_lG-5eT9mtkoUUufZpDLdknjvwZQSg/exec';

    const [formData, setFormData] = useState({ name: '', guests: '1', phone: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Para o estado de "enviando"
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));

        if (name === 'phone') {
            setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }));
        } else if (name === 'guests') {
            setFormData(prev => ({ ...prev, guests: value.replace(/\D/g, '') }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleGuestCount = (amount) => {
        const currentGuests = parseInt(formData.guests, 10) || 0;
        const newGuests = currentGuests + amount;
        if (newGuests >= 1) {
            setFormData(prev => ({ ...prev, guests: String(newGuests) }));
            if (errors.guests) setErrors(prev => ({ ...prev, guests: null }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Por favor, preencha o nome.';
        if (formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = 'Por favor, insira um número de WhatsApp válido com DDD.';
        if (!formData.guests || parseInt(formData.guests) < 1) newErrors.guests = 'Por favor, insira pelo menos 1 convidado.';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Importante para evitar erros de CORS com o script do Google
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(() => {
            setIsSubmitted(true);
        })
        .catch(err => {
            console.error('Erro ao enviar:', err);
            setErrors({ submit: 'Ocorreu um erro ao enviar. Tente novamente.' });
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return (
        <section id="rsvp" className="py-20 sm:py-32 px-6 bg-beige">
            <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-6xl sm:text-7xl text-sage-green mb-4">Confirme sua Presença</h2>
                <p className="font-montserrat text-lg text-sage-green/90 mb-10">
                    Por favor, confirme sua presença até o dia 18 de Outubro. Apenas uma confirmação por família é necessária, ok?
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
                            <div>
                                <Input label="Nome de um responsável da família" name="name" value={formData.name} onChange={handleChange} placeholder="Ex: Família Silva" />
                                {errors.name && <p className="text-red-500 text-sm -mt-4 mb-4 text-left">{errors.name}</p>}
                            </div>
                            <div>
                                <Input label="WhatsApp para contato" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(XX) XXXXX-XXXX" maxLength="15" />
                                {errors.phone && <p className="text-red-500 text-sm -mt-4 mb-4 text-left">{errors.phone}</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="guests" className="block text-sage-green font-montserrat text-sm font-medium mb-2 text-left">Total de pessoas (incluindo crianças)</label>
                                <div className="relative">
                                    <input id="guests" name="guests" type="text" inputMode="numeric" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition pr-10" />
                                    <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center mr-1">
                                        <button type="button" onClick={() => handleGuestCount(1)} className="h-1/2 px-2 text-gray-500 hover:text-accent transition rounded-tr-md" aria-label="Aumentar convidados">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" transform="rotate(180 10 10)" /></svg>
                                        </button>
                                        <button type="button" onClick={() => handleGuestCount(-1)} className="h-1/2 px-2 text-gray-500 hover:text-accent transition rounded-br-md" aria-label="Diminuir convidados">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                        </button>
                                    </div>
                                </div>
                                {errors.guests && <p className="text-red-500 text-sm mt-2 text-left">{errors.guests}</p>}
                            </div>
                            {errors.submit && <p className="text-red-500 text-sm mb-4">{errors.submit}</p>}
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar Confirmação'}
                            </Button>
                        </motion.form>
                    ) : (
                        <motion.div key="thankyou" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: 'backOut' }}>
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
