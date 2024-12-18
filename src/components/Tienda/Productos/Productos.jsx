import Cards from "../../Reutilizables/Cards/Cards";
import React, { useState, useEffect } from "react"; 


const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/productos.json')  
            .then(response => response.json())
            .then(data => { 
                setTimeout(() =>{
                    setProductos(data)
                    setLoading(false);
                },3000)
            })
            .catch(error => alert('Error al cargar los productos:', error.message));
    }, []);
    if (loading) {
        return <p className="estilosMensajeCarga"> Cargando la tienda...</p>
    }
    return (
        <>
            {productos.map(producto => (
            <Cards
                key={producto.id}  
                id={producto.id}
                imagen={producto.imagen}
                alt={producto.alt}
                descripcion={producto.descripcion}
                precio={producto.precio}
                nombre={producto.nombre}
                categoria={producto.categoria}
            />
        ))}
        </>
    );
};

export default Productos;


