import { Buscador } from '../share/Buscador'
import { BotonFlotante } from '../share/BotonFlotante'
import './Home.css'
import imagen from '../img/image_1.png'
import prom1 from '../img/promocion01.jpg'
import prom2 from '../img/promocion02.jpg'
import { Link } from 'react-router-dom'



export const Home = () => {

    return (
        <body>
            <h1> Pance Food </h1>
            <Buscador />
            <Link to="opcionesregistro"><button className='registrar'> Registrarse </button></Link>
            <Link to="iniciosesion"><button className='inicioSesion'> Iniciar Sesion </button></Link>
            <BotonFlotante />
            <img id='fondoI' src={imagen} alt='fondo' ></img>
            <div className='circulo3'></div>
            <div className='circulo2'></div>
            <div className='circulo1'>
                <h2> Hambre!? ¡En Pance se lo llevamos!</h2>
            </div>

            <div class="container-fluid">
                <h3> Promociones del Dia </h3>
                <div className='card'>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={prom1} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <p>Proximas Promociones</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={prom2} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <p>Proximas Promociones</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                </div>
            </div>

        </body>
    )
}