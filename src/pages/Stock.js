import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

function Stock() {
// const apiKey = "f0458377386c61fea5f1dc61373c8fd0"
  const params = useParams();
  // console.log(params);
  const symbol = params.symbol;


  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=f0458377386c61fea5f1dc61373c8fd0`
  const [stock, setStock] = useState("null");

  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data)
  };

  useEffect (() => {
    getStock();
  }, []);
console.log(stock)
    return (
     <div className="Stock">
      {stock === "null" ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>{symbol}</h1>
          <h2>${stock[0].price}</h2>
          <h2>${stock[0].change}</h2>
          <h2>${stock[0].open}</h2>
          <h2>${stock[0].dayLow}</h2>
          <h2>${stock[0].dayHigh}</h2>
        </div>
      )}
    </div>
  );
}
  
  export default Stock;