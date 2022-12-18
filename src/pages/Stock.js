import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Stock() {
  const params = useParams();
  const symbol = params.symbol;

  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=f0458377386c61fea5f1dc61373c8fd0`;
  const [stock, setStock] = useState("null");

  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
  };

  useEffect(() => {
    getStock();
  }, []);
  console.log(stock);
  return (
    <div className="Stock">
      {stock === "null" ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>{stock[0].name}</h1>
          <h2>{symbol}</h2>
          <h3>Price: ${stock[0].price}</h3>
          <h3
            className="change"
            style={{
              color: Math.sign(stock[0].change) === -1 ? "red" : "green",
            }}
          >
            Change: ${stock[0].change}
          </h3>
          <h3>Open: ${stock[0].open}</h3>
          <h3>Day Low: ${stock[0].dayLow}</h3>
          <h3>Day High: ${stock[0].dayHigh}</h3>
          <h3>Volume: {stock[0].volume}</h3>
          <h3
            className="change"
            style={{
              color: Math.sign(stock[0].eps) === -1 ? "red" : "green",
            }}
          >
            EPS: ${stock[0].eps}
          </h3>
        </div>
      )}
    </div>
  );
}

export default Stock;
