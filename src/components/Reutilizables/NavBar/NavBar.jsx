import { Link } from "react-router-dom"; 
import "./NavBar.css";

const NavBar = ({ className }) => {
    return (
        <nav className={className}>
            <Link to="/">Inicio</Link> 
            <Link to="/tienda">Tienda</Link> 
            <Link to="/mis-plantas">MisPlantas</Link> 
        </nav>
    );
};

export default NavBar;