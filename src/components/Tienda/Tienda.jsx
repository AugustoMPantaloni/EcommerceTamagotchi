import "./Tienda.css"
import TituloTienda from "./Header/TituloTienda"
import NavBar from "../Reutilizables/NavBar/NavBar"
import Productos from "./Productos/Productos"
import Categorias from "./Categorias/Categorias"


const Tienda = () => {
    return (
        <div className="estiloTienda">
            <div>
                <TituloTienda/>
                <NavBar/>
            </div>
            <div className="posicionamientoCategoria">
                <Categorias/>
            </div>
            <div className="estiloProductos">
                <Productos/>
            </div>
        </div>
    )
}

export default Tienda