
import { NavBarD } from '../share/NavBarD'
import './OpcionesRegistro.css'

export const OpcionesRegistro = () => {
    return (
        <body>
            <NavBarD />
            <div id='container'>
                <div id='cardCentral'>
                    <form>
                        <label for="nombres">
                            Nombre
                            <input type='text' id='nombres' name='nombres'
                                placeholder='Patricia Maria'></input> </label>
                        <label for="apellidos">
                            Apellido
                            <input type='text' id='apellidos' name='apellidos'
                                placeholder='Estrella Estrella'></input>
                        </label>
                        <label for="correo">
                            Correo
                            <input type='email' id='correo' name='correo'
                            placeholder='hola@gmail.com'></input>
                        </label>
                    </form>

                </div>
            </div>
        </body>
    )
}