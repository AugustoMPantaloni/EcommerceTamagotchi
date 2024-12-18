import Logo from "../../Reutilizables/Logo/Logo";
import Titulo from "./Titulo/Titulo";
import NavBar from "../../Reutilizables/NavBar/NavBar";
import "./header.css";

const Header = () => {
    return (
        <div className="estilosHeader">
            <div className="logo-titulo">
                <Titulo className="titulo" />
            </div>
            <NavBar className="navBar" /> 
        </div>
    );
};

export default Header;