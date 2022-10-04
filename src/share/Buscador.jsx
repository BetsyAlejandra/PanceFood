import './Buscador.css'
import search from '../icons/search.png'

export const Buscador = () => {

    

    return (
        <body>
            <div id='centrar'>
                <div id='buscador'>
                    <img id='img' src={search} alt='buscar' />
                    <input id='buscar' type='search'></input>
                </div>
            </div>
        </body>
    )
}