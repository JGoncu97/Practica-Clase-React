import { ContentHobby } from '../../../UI/Navbar/ContentHobby'
import imgDeveloper from '../assets/Developer.jpg'

import './Studies.css'

export const Studies = () => {
  return (
    <div className='MyStudy'>
        <h3>Mis Estudios</h3>
        <div className='content'>
            <div >
                <ContentHobby title={'Cocina'} content={'Tengo una aficion hacia la gastronomia, me parece un mundo interesante y de muchas variadades y sabores'} />
                <ContentHobby title={'Programacion'} content={'Estudio Programacion de Software en el Sena, actualmente cursando mi 5to trimestre '} />
                <ContentHobby title={'Deporte'} content={'Me encanta los ejercicios de fuerzas y deportes de contacto'} />
            </div>
            <img className='imgDev' src={imgDeveloper} alt="" />
        </div>
    </div>
  )
}
