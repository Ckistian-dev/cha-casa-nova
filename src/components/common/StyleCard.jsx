import React from 'react';

const StyleCard = ({ title, colors, examples }) => (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-gray-200/50 mb-6">
        <h4 className="font-montserrat font-bold text-xl text-sage-green mb-3">{title}</h4>
        <div className="flex space-x-2 mb-4">
            {colors.map((color, index) => (
                <div key={index} className="w-8 h-8 rounded-full shadow-inner" style={{ backgroundColor: color }}></div>
            ))}
        </div>
        <p className="font-montserrat text-sm text-gray-600">{examples}</p>
    </div>
);

export default StyleCard;
