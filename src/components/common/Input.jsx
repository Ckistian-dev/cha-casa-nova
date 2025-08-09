import React from 'react';

const Input = ({ label, name, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="w-full mb-6">
      <label htmlFor={name} className="block text-sage-green font-montserrat text-sm font-medium mb-2 text-left">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition"
      />
    </div>
  );
};

export default Input;
