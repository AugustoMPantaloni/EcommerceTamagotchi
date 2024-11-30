import TextoCentral  from "./TextoCentral/TextoCentral"
import TextoInterior from "./TextoInferior/TextoInferior"
import PlantaBody from "./TextoInferior/PlantaBody"
import "./Body.css"

const Body = () =>{
    return (
        <>
            <div className="estilosTextoCentral">
                <TextoCentral />
            </div>    
            <div className="estilosTextoInferior">
                <TextoInterior />
                <PlantaBody />
            </div>
        </>
    )
}

export default Body