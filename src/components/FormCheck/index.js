import React, { useState, useEffect } from 'react';

function FormCheck({ data }) {
  const [isChecked, setIsChecked] = useState(null);

  const handleChange = e => {
    if (isChecked === e.target.checked) return;
    setIsChecked(!!e.target.checked);
  }

  return (
    <div className="form-group form-check">
      <label className="form-check-label">
        <input type="checkbox" name="isSocial"checked={!!isChecked} onChange={handleChange} />
        <span className="form-check-sign"></span>
        Is Social
      </label>
    </div>
  )
}

export default FormCheck;
