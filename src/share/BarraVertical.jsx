import './BarraVertical.css'
import iconoPerfil from '../icons/IconoPerfil.png'
import soporte from '../icons/soporte.png'
import pedidos from '../icons/pedidos.png'
import direcciones from '../icons/direcciones.png'
import tienda from '../icons/tienda.png'
import logout from '../icons/logout.png'
import { Link } from 'react-router-dom'


export const BarraVertical = () => {

    return (
        <div class="container-fluid">
            <div id='estiloBarra'>
                <button id='perfil'> <img id='tamañoIc' src={iconoPerfil} alt='Perfil'></img>
                    Nombre  <br /> Mi perfil
                </button> <br />
                <button id='informacion1'> <img id='tamañoIconos' src={soporte} alt='Soporte' ></img>
                    Soporte </button>
                <button id='informacion2'> <img id='tamañoIconos' src={pedidos} alt='pedidos' ></img>
                    Pedidos </button>
                <button id='informacion3' > <img id='tamañoIconos' src={direcciones} alt='Direcciones'></img>
                    Direccion </button>
                <button id='informacion4'> <img id='tamañoIconos' src={tienda} alt='tienda'></img>
                    Tienda </button>
                <Link to="/"> <button id='cerrar'> <img id='iconoCer' src={logout} alt='cerrar' ></img>
                    Cerrar <br /> Sesion</button></Link>

            </div>
        </div>

    )
}