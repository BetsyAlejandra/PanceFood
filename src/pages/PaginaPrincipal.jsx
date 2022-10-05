import { BarraVertical } from '../share/BarraVertical'
import { BotonFlotante } from '../share/BotonFlotante'
import { Buscador } from '../share/Buscador'
import './PaginaPrincipal.css'

export const PaginaPrincipal = () => {

    return (
        <body>
            <Buscador />
            <BarraVertical />
            <BotonFlotante />
        </body>
    )
}