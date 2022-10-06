import './BotonFlotante.css'
import carrito from '../icons/Carrito.png'

export const BotonFlotante = () => {

    return(
        <body class="container-fluid">
        <button className='btn-flotante'>
            <img id='sizeImg' src={carrito} alt='Carro Compra' ></img>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-dark"> 0 </span>
        </button>
        </body>
    )
}