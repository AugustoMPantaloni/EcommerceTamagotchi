import "./Misplantas.css"
import NavBar from "../Reutilizables/NavBar/NavBar"
import TituloMisPlantas from "./Header/TituloMisPlantas"

const Misplantas = () =>{
    return (
        <div className="estiloMisPlantas">
            <TituloMisPlantas/>
            <NavBar/>
            <div className="recuadroDePlantas"></div>
        </div>
    )
}

export default Misplantas;