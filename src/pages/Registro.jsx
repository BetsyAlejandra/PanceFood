import './Registro.css'
import { NavBarD } from "../share/NavBarD"

export const Registro = () => {

    return (
        <body>
            <NavBarD />
            <div id='container'>
                <div id='cardCentral'>
                    <div id='centrado'>
                        <button class="btn btn-primary"> Registrarse </button>
                        <button class="btn btn-primary"> Registrarse con Google </button>
                    </div>
                </div>
            </div>
        </body>
    )
}