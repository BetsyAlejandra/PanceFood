import { BarraVertical } from '../share/BarraVertical'
import { BotonFlotante } from '../share/BotonFlotante'
import { Buscador } from '../share/Buscador'
import './PaginaPrincipal.css'

export const PaginaPrincipal = () => {

    return (
        <body class="container-fluid">
            <Buscador />
            <button className='registrar'> Registrar Tienda </button>
            <BarraVertical />
            <BotonFlotante />
            <div className='ubicacion'>
                <div className='card1'></div>
                <div className='card2'></div>
                <div className='card3'></div>
            </div>
        </body>
    )
}