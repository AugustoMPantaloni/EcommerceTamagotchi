import Cards from "../../Reutilizables/Cards/Cards"
import Bonsai from "../../../assets/bonsai.jpg"
import Cactus from "../../../assets/cactus.jpg"


const Productos = () =>{
    return(
        <>
    <Cards  
        id="1"
        imagen=""
        alt ="Flor de loto"
        descripcion="Lumi es una flor de loto virtual que florece en paz y serenidad. Cuídala y disfruta de su calma, ya que mientras más tranquila esté, más brillante y hermosa se vuelve. ¡Deja que su energía te inspire!"
        precio="2300"
        nombre="Lumi"
        >
    </Cards>
    <Cards  
        id="2"
        imagen={Cactus}
        alt ="Cactus Tamagotchi"
        descripcion="Un encantador cactus que no solo requiere tus cuidados, sino que también purifica el aire virtual de tu entorno. ¡Mientras más feliz esté, más limpia y fresca será la atmósfera digital que genera para ti!"
        precio="1500"
        nombre="Cactuchi"
        >
    </Cards>
    <Cards  
        id="3"
        imagen={Bonsai}
        alt ="Bonsai Tamagotchi"
        descripcion="Un Bonsai encantador que no solo necesita tu atención, sino que también trae serenidad y armonía a tu espacio virtual. ¡Cuídalo bien y verás cómo se llena de vitalidad, creando un ambiente más tranquilo y equilibrado para ti!"
        precio="950"
        nombre="Zenaki"
        >
    </Cards>
    <Cards  
        id="4"
        imagen=""
        alt ="Planta Carnivora"
        descripcion="Munchy es una planta carnívora virtual que no solo adora el sol, sino que también disfruta de un buen 'bocado' digital. Cuídala bien, ¡y verás cómo atrapa insectos virtuales mientras se vuelve más fuerte y feroz con el tiempo!"
        precio="3000"
        nombre="Munchy"
        >
    </Cards>
    </>
    )
}

export default Productos;