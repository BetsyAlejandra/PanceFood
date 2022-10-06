import { Buscador } from '../share/Buscador'
import './Home.css'

export const Home = () => {

    return(
        <body>
            <h1> Pance Food </h1>
            <Buscador />
            <button className='registrar'> Registrarse </button>
            <button className='inicioSesion'> Iniciar Sesion </button>
        </body>
    )
}