import logo from './logo.svg';
//import './App.css';
import {Link} from 'react-router-dom'

function Nav() {

    const navStyle = {
        color:'red'
    }

    return (
        <nav>
            <ul>
                <Link to='/' style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to='/about' style={navStyle}>
                    <li>About</li>
                </Link>
                <Link to='/services' style={navStyle}>
                    <li>Services</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
