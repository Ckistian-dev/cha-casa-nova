import React from 'react';
import { useCountdown } from './useCountdown';

const DateTimeDisplay = ({ value, type }) => (
    <div className="flex flex-col items-center justify-center mx-2 sm:mx-4 text-white">
        <p className="font-montserrat text-3xl sm:text-5xl font-bold">{value < 0 ? 0 : value}</p>
        <span className="font-montserrat text-xs sm:text-sm uppercase tracking-widest">{type}</span>
    </div>
);

const Countdown = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <p className="text-white text-2xl font-dancing-script">O grande dia chegou!</p>;
    }

    return (
        <div className="flex items-center justify-center">
            <DateTimeDisplay value={days} type={'Dias'} />
            <DateTimeDisplay value={hours} type={'Horas'} />
            <DateTimeDisplay value={minutes} type={'Minutos'} />
            <DateTimeDisplay value={seconds} type={'Segundos'} />
        </div>
    );
};

export default Countdown;
