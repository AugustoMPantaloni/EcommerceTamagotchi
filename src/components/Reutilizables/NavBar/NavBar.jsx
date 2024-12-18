import { Link } from "react-router-dom"; 
import "./NavBar.css";
import IconoCarrito from "../IconoCarrito/IconoCarrito";

const NavBar = () => {
    return (
        <nav className="estilosNavBar">
            <Link to="/">Inicio</Link> 
            <Link to="/Tienda">Tienda</Link> 
            <Link to="/MisPlantas">MisPlantas</Link> 
            <IconoCarrito/>
        </nav>
    );
};

export default NavBar;