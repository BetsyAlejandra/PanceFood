import './NavBarD.css';
import devolver from '../icons/Devolver.png'

export const NavBarD = () => {
    return(
        <>
        <div id='navBar'> 
            <h1 id='letterNav'> Pance Food </h1>
            <img id='devolver' src={devolver} alt='Atras' />
        </div>
        </>
    )
}