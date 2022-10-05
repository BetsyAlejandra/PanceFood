import { NavBarD } from '../share/NavBarD'
import './OpcionesRegistro.css'

export const OpcionesRegistro = () => {
    return (
        <body>
            <NavBarD />
            <div id='container'>
                <div id='cardCentral'>
                    <form id='centrado'>
                        <div className='inputs'>
                            <label for="nombres" id='labelf'>
                                Nombre </label>
                            <input type='text' id='inputf' name='nombres'
                                placeholder='Patricia Maria' required></input> <br /> <br />
                            <label for="apellidos" id='labelf'>
                                Apellido </label>
                            <input type='text' id='inputf' name='apellidos'
                                placeholder='Estrella Estrella' required></input> <br /> <br />
                            <label for="correo" id='labelf'>
                                Correo </label>
                            <input type='email' id='inputf' name='correo'
                                placeholder='hola@gmail.com' required></input> <br /> <br />
                            <label for="contrasena" id='labelf'>
                                Contraseña </label>
                            <input type='password' id='inputf' name='contrasena'
                                placeholder='********' required></input> <br /> <br />
                            <label id='labeltyc'>
                                <input type="checkbox" id="teyco" value="teyco"></input>
                                Acepto los Terminos y Condiciones</label>
                            <button class="btn btn-primary" id='boton' type="submit"> Registrarse </button>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    )
}