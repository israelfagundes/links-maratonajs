import React, { useState, useEffect } from 'react';

const FormGroup = ({ data, name, label, type }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : undefined;

    if (initialValue !== undefined) setValue(initialValue);

  }, [name, data]);

  const handleChange = e => {
    if (value === e.target.value) return;
    
    setValue(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <input 
        type={type} 
        className="form-control" 
        name={name} value={value} 
        onChange={handleChange} 
      />
    </div>
  )
}

export default FormGroup;