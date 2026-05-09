import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import App from './App.jsx'
import Hello from './Hello.jsx'
import { Product } from './Product.jsx'

const DATA = [
  {title: "abóbora", price: 55},
  {title: "banana", price: 321},
  {title: "abacate", price: 123},
  {title: "pirulito de pirulito", price: 40000}
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello />
    <Hello name="Luis"/>
    <Hello name="Pedro"/>

    <Product t
  </StrictMode>,
)
