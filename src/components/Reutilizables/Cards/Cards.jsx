import "./Cards.css"

const Cards = ({ imagen, alt, descripcion, precio, nombre }) => {
    return (
        <div className="card">
            <img src={imagen} alt={alt} className="card-img" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5> 
                <p className="card-description">{descripcion}</p>
                <p className="card-price">${precio}</p>
                <button className="card-button">Comprar</button>
            </div>
        </div>
    );
};

export default Cards;