import imageProfile from '../assets/Perfil.jpeg'
import './Presentation.css'
export const Presentation = () => {
  return (
    <div className='WhoIsI'>
        <img src={imageProfile} alt="Perfil" />
        <p>Soy Jose, tengo 27 años soy una persona proactiva, muy comprometida, responsable y me caracterizo por se diciplinado y puntual.
            <br/>
            Soy una persona muy familiar y de un circulo social pequeño, respetuoso y empatico.
        </p>
        
    </div>
  )
}
