import './BotonFlotante.css'
import carrito from '../icons/Carrito.png'

export const BotonFlotante = () => {

    return(
        <>
        <button className='btn-flotante'>
            <img id='sizeImg' src={carrito} alt='Carro Compra' ></img>
        </button>
        </>
    )
}