import React from "react";
import '../stylesheets/Boton.css';

function Boton(props) {
  const esOperador = (valor) => {
    // Si el valor del boton no es un numero isNaN (is not a number), no es un punto y no es valor de igual se retorna como true y afecta cambia la clase en del div del boton. Si es falso no va a hacer ningun cambio
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return(
    // Plantilla literal para crear cadena de caracteres para definir el resultado
    // Separar las clases de botones segun si son numeros o operadores como +-*/=
    // ${} permite escribir codigo javascript, ? es "entonces", : es "sino"
    // trimEnd() es un metodo que elimina los espacios al final
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    // Funcion de manejar Click con funcion anonima dentro del evento que llama a otra accion (manejarClick)
    onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
};

export default Boton;