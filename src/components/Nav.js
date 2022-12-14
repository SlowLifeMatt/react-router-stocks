import { Link } from 'react-router-dom'

function Nav() {
    return <div className="nav">
        <Link to="/" >
            <div>This is the Homepage</div>
        </Link>
        <Link to="/stocks" >
            <div>All Stocks</div>
        </Link>

    </div>;
  }
  export default Nav;