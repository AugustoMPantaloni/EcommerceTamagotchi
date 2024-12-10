import "./Tienda.css"
import TituloTienda from "./Header/TituloTienda"
import NavBar from "../Reutilizables/NavBar/NavBar"
import IconoCarrito from "../Reutilizables/IconoCarrito/IconoCarrito"
import Productos from "./Productos/Porductos"

const Tienda = () => {
    return (
        <div className="estiloTienda">
            <div>
                <TituloTienda/>
                <NavBar/>
                <IconoCarrito className="estilosCarritoTienda"/>
            </div>
            <div className="estiloProductos">
                <Productos/>
            </div>
        </div>
    )
}

export default Tienda