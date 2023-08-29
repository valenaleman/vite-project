import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import Card from './components/Card';
import Contador from './components/Contador';
import { useState } from 'react';

const MostrarState = () => {
  const [buttonText, setButtonText] = useState('Apreta en este boton');

  return (
    <div>
      <button onClick={() => setButtonText('Gracias por hacer click en este boton')}>
      {buttonText}
      </button>
    </div>
  )
}

function App() {
  const products = [
    { id: 1, name: 'Babysec - Ultrasec', price: 3200, content: 60 },
    { id: 2, name: 'Pampers - Premium care, piel delicada', price: 5900, content: 58},
    { id: 3, name: 'Pampers - Premium care, recién nacido hipoalergénico', price: 2420, content: 36},
  ]

return (
    <div className='container'>
      <NavbarComponent />
      <h1>Productos de nuestra pañalera</h1>
    <ol>
      {products.map(product => {
        return (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.content}
          </li>
        )
      })}
    </ol>
    <h1>Productos con mayor cantidad de pañales</h1>
    <ul>
      {products.filter(product => product.content >50).map(product => {
        return(
          <li key={product.id}>
            {product.name} - {product.price} - {product.content}
          </li>
        )
        })}
    </ul>
    <h1>Imagenes de nuestros productos</h1>
        <Card
        image='https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png'
        pañalesuno='Babysec - Ultrasec (60 pañales, para peso: 8,5 - 12 kg)' /> 
        <MostrarState />
        <Contador />
        <Card description="Dirección: Av. Piedra Buena 4978 Villa Lugano, CABA, Argentina" />
    </div>
  )
}

export default App
