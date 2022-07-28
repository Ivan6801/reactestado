import React, { useState, useEffect } from 'react';

const SECURITY_CODE = 'ivan';

function Estados({ title }) {
  const [state, setState] = useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  useEffect(() => {
    setTimeout(() => {
      if (!!state.loading) {
        if (state.value === SECURITY_CODE) {
          setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
        }
      }
    }, 2000);
  }, [state, state.loading, state.value]);

  const onLoading = () => {
    setState({
      ...state,
      loading: true,
    });
  }

  const handleChange = (event) => {
    setState({ 
      value: event.target.value,
    });
  }

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h3>Eliminar {title}</h3>
        <p>Por Favor, escribe el código de seguirdad.</p>
        {state.loading && (
          <p>Loading...</p>
        )}
        {(!state.loading && state.error) && (
          <p> El Código es incorrecto</p>
        )}
        <input 
          placeholder="Código de seguirdad"
          value={state.value}
          onChange={handleChange}
          />
        <button
           onClick={onLoading}      
           disabled={state.loading}
        >
          Comprobar
        </button>
      </div>
    )
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <>
        <p>¿Seguro que quieres eliminar UseState?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true,
            })
          }}
        >
          Si, eliminar
        </button>      
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              value:'',
            })
          }}
        >
          No, volver
        </button>      
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>
        <button
          onClick={()=>{
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value:'',
            })
          }}
        >
          Recuperar
        </button>
      </>
    )
  }
}

export { Estados };