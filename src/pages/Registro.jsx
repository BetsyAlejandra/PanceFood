import './Registro.css'
import { NavBarD } from "../share/NavBarD"
import { Link } from 'react-router-dom'

export const Registro = () => {

    return (
        <body>
            <NavBarD />
            <div id='container'>
                <div id='cardCentral'>
                    <div id='centrado'>
                        <Link to="/registrocorreo"><button class="btn btn-primary"> Registrarse </button></Link> <br />
                        <Link to="">
                            <button class="btn btn-primary"> Registrarse con Google </button>
                        </Link>
                    </div>
                </div>
            </div>
        </body>
    )
}