import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Convector from './Components/Convector/Convector';

const App = () => {
  
  const [items, setItems] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then(
        (
          (error) => {
            setIsLoaded(true);
            setError(error);
          },
          (result) => {
            setIsLoaded(true);
            setItems(result)
          }
        )
      )
  }, []);

  return (
    <div className="wrapper">
      <Header error={error} items={items} isLoaded={isLoaded}  />
      <div className="page">
        <Convector />
      </div>
      <Footer />
    </div>
  );
}

export default App;
