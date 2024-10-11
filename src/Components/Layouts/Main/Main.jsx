
import { FooterBanner } from '../Footer/Footer'
import {HeaderPage} from '../Header/Header'
import { Family } from '../Presentation/Family/Family'
import { Presentation } from '../Presentation/Presentation'
import { Studies } from '../Presentation/Studies/Studies'



import './Main.css'
export const Main = () => {
  return (
    <div className='main'>
        <HeaderPage/>
        <Presentation/>
        <Family/>
        <Studies/>
        <FooterBanner/>
    </div>
  )
}
