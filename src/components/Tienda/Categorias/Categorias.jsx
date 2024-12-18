import "./Categoria.css"
import { Link } from "react-router-dom"; 


const Categorias =() =>{
    return (
        <div className="estilosCategorias">
            <Link to="/Categoria/PlantasZen">PlantasZen</Link>
            <Link to="/Categoria/PlantasExoticas">PlantasExoticas</Link>
        </div>
    )
}

export default Categorias;