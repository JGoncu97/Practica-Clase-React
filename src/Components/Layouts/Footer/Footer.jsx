import imgFacebook from '../assets/facebook (1).png'
import imgWhatsapp from '../assets/whatsapp.png'
import imgInstagram from '../assets/instagram.png'
import './Footer.css'
export const FooterBanner = () => {
  return (
    <div className="Footer">
        <div className='IconsF'>
            <img src={imgFacebook} alt="" />
            <img src={imgWhatsapp} alt="" />
            <img src={imgInstagram} alt="" />
        </div>
        <p>
            Todos los derechos Reservados por Jose Gregorio Gonzalez Cuellar Copyright &copy; 2024;
        </p>
    </div>
  )
}
