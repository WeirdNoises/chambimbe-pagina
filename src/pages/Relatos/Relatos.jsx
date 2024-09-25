import { Container } from 'react-bootstrap';
import { assets } from '../../assets/assets';
import './Relatos.css';

export const Relatos = () => {
  const videos = [
    {
      title: 'TRAILER PRIMER CAPITULO',
      src: 'https://www.youtube.com/embed/E-8tKvlI2Kk?si=2ellZcqNIf2HC0Eg'
    },
    {
      title: 'PRIMER CAPITULO',
      src: 'https://www.youtube.com/embed/-ohMNqoRBk4?si=OmFIemKlU2ewg_Nn'
    },
    {
      title: 'TRAILER SEGUNDO CAPITULO',
      src: 'https://www.youtube.com/embed/Mqiu3boiQm0?si=3dLau7KTsTDCoZCt'
    },
    {
      title: 'SEGUNDO CAPITULO',
      src: 'https://www.youtube.com/embed/4FVgHxUiUxI?si=DltXc5hkGDfRucL8'
    }
  ];

  return (
    <div className='encabezado-relatos'>
      <h1>RELATOS</h1>
      <p>
      Un poco más cerca de nuestra Historia. Es un espacio de visualización y aprendizaje en donde los descendientes de nuestros antepasados, nos enseñan y transmiten sus conocimientos, sentimientos y legados.... Nuestros apellidos, Alape, Capera, Tique, Cupitra, Cutivá, es decir Pijaos nos recuerdan a los antiguos mohanes, destacados por su inmenso valor e inteligencia, su gallardía y honor de guerreros. Famosos y temidos durante la colonia temprana por salir victoriosos en la defensa de su territorio por más de 60 años.
      </p>
      <p>
        Nos recuerdan a los antiguos mohanes, destacados por su inmenso valor e
        inteligencia, su gallardía y honor de guerreros...
      </p>
      <img className='group29_1' src={assets.group29} alt="group29" />
      <p>
      📜En su 2 Entrega, RELATOS, (Un poco mas cerca de nuestra Historia), un espacio de visualización de CHAMBIMBE
      </p>
      <p>
        NO TE LO PIERDASSS, todos los viernes iniciando este 26 de Abril del 2024,
        con el capítulo 1 (Territorio, un legado) !!!.🕐📣
      </p>
      <img src={assets.relatos} alt="relatos" className='relatos_3' />

      {videos.map((video, index) => (
        <div key={index}>
          <h1>{video.title}</h1>
          <Container className='youtube-container'>
            <div className="ratio ratio-16x9">
              <iframe
                width="100%"
                height="auto"
                src={video.src}
                title={`YouTube video player - ${video.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Container>
        </div>
      ))}

      <h1>TERCER CAPITULO</h1>
      <img src={assets.relatos_3} alt="relatos_3" className='relatos_3' />
    </div>
  );
};
