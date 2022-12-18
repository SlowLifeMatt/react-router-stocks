import { Link } from "react-router-dom";

function Dashboard() {
  const stocks = [
    {
      name: "Apple Inc.",
      symbol: "AAPL",
      lastPrice: 140.64,
      change: -0.280000000000001,
 
    },
    {
      name: "Microsoft Corporation",
      symbol: "MSFT",
      lastPrice: 64.98,
      change: 0.109999999999999,

    },
    {
      name: "Alphabet Inc.",
      symbol: "GOOGL",
      lastPrice: 835.14,
      change: -4.50999999999999,
 
    },
    {
      name: "Facebook, Inc.",
      symbol: "META",
      lastPrice: 140.34,
      change: 0.810000000000002,

    },
    {
      name: "Oracle Corporation",
      symbol: "ORCL",
      lastPrice: 44.65,
      change: -0.300000000000004,

    },
    {
      name: "Intel Corporation",
      symbol: "INTL",
      lastPrice: 36.16,
      change: -0.370000000000005,

    },
  ];
  return (
    <div className="Stocks">
      {stocks.map((stock) => {
        const { name, symbol, lastPrice, change } = stock;
        return (
          <div>
            <table
              style={{
                width: "100%",
              }}
            >
              <h3>
                Company:
                <Link to={`/stocks/${symbol}`}>
                  <th>{name}</th>
                </Link>
              </h3>
              <tr></tr>
              <tr>
                <h3>Price: ${lastPrice}</h3>
              </tr>
              <tr>
                <h3>Change:</h3>
                <h3
                  className="change"
                  style={{
                    color: Math.sign(change) === -1 ? "red" : "green",
                  }}
                >
                  ${change.toFixed(2)}
                </h3>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
