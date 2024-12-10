import "./Misplantas.css"
import NavBar from "../Reutilizables/NavBar/NavBar"
import IconoCarrito from "../Reutilizables/IconoCarrito/IconoCarrito"
import TituloMisPlantas from "./Header/TituloMisPlantas"

const Misplantas = () =>{
    return (
        <div className="estiloMisPlantas">
            <TituloMisPlantas/>
            <NavBar/>
            <IconoCarrito className="estilosCarritoMisPlantas"/>
            <div className="recuadroDePlantas"></div>
        </div>
    )
}

export default Misplantas;