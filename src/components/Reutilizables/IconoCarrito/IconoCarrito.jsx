import CarritoIcono from "../../../assets/carritoCompras.png";
import "./IconoCarrito.css";

const IconoCarrito = ({ className, onClick }) => {
    let productosEnCarrito = 3;
    return (
        <button onClick={onClick} className={className}>
            <img src={CarritoIcono} alt="Icono del carrito" className="etilosIconoCarritos"/>
            <span className="numeroCarrito">{productosEnCarrito} </span>
        </button>

    );
}

export default IconoCarrito;