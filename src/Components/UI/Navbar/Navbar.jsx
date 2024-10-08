import { ItemNavbar } from './ItemNavbar/ItemNavbar'
import './StyleNav.css'



export const Navbar = () => {
  return (
    <nav>
        <ul>
            <ItemNavbar content={'¿Quien Soy?'}/>
            <ItemNavbar content={'Mi familia'}/>
            <ItemNavbar content={'Mis estudios'}/>
        </ul>
    </nav>
  )
}
