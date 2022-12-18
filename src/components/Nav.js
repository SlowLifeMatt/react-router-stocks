import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <h2 className="navlink">Homepage</h2>
      </Link>
      <Link to="stocks">
        <h2 className="navlink">Stocks</h2>
      </Link>
      <Link to="about">
        <h2 className="navlink">About</h2>
      </Link>
    </div>
  );
}
export default Nav;
