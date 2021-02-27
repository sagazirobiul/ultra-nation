import './App.css';
import {useState, useEffect } from 'react';
import Country from './components/Country';
import Cart from './components/cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart , setCart] = useState([])
  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, []);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  }
  return (
    <div className="App">
      <h1>All countries : {countries.length}</h1>
      <Cart cart={cart}></Cart>
      <div className="allCountryDiv">
        {
          countries.map(country =><Country handleAddCountry={handleAddCountry} key={country.numericCode} country={country}></Country>)
        }
      </div>
    </div>
  );
}

export default App;
