import React, { useState, useEffect } from 'react';

const SECURITY_CODE = 'ivan';

function UseState(props) {
  const { title } = props;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      if (!!loading) {
        if (value === SECURITY_CODE) {
          setLoading(false);
          setError(false);
        } else {
          setError(true);
          setLoading(false);
        }
      }
    }, 2000);
  }, [loading, value]);

  const onLoading = () => {
    setLoading(true);
    setError(false);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  console.log(value);

  return (
    <div>
      <h3>Eliminar {title}</h3>
      <p>Por Favor, escribe el código de seguirdad.</p>
      {loading && (
        <p>Loading...</p>
      )}
      {error && (
        <p>Error: el código es incorrecto</p>
      )}
      <input 
        placeholder="Código de seguirdad"
        value={value}
        onChange={handleChange}
        />
      <button
         onClick={onLoading}      
         disabled={loading}
      >
        Comprobar
      </button>
    </div>
  )
}

export { UseState };