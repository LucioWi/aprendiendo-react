import { StrictMode, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx'
import './index.css' 
const root = createRoot(document.getElementById('root'));

/*
const Button = ({text}) => {
  return <button>{text}</button>;
}; // Esto es un componente, su nombre tiene que ser si o si en PascalCase (Empezar por mayúscula y todo junto).
*/

root.render(
  <App /> 
); // Utilizado para mostrar cosas en la página.
