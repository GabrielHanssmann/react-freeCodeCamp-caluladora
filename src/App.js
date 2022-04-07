import './App.css';
import freeCodeCampLogo from './img/FreeCodeCamp_logo.svg.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/Clear.jsx'
import { useState } from 'react';
// Libreria para hacer opreraciones matematicas
import { evaluate } from 'mathjs';
import Logo from './componentes/Logo';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput(input + valor)
  };

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input))
    } else {
      alert('Por favor ingresar valores antes de calcular resultado')
    }
  };

  return (
    <div className="App">

      <Logo />

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>  
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>  
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>  
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>  
          <BotonClear 
          manejarClear={() => setInput('')}>
            Clear 
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
