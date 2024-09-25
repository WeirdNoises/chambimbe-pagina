import { assets } from '../../assets/assets';
import './Pie.css';

export const Pie = () => {
  return (
    <div className="pie-pagina">
      
      <div className="pie-pagina-content">
        <div className="pie-pagina-top-left">
          <div className="top">
            <img src={assets.logo_original} alt="logo" className="logo" />
            <div className="pie-pagina-texts">
              <h1>CHAMBIMBE</h1>
              <h1>COLECTIVO CULTURAL</h1>
              <p>TRANSFORMANDO TERRITORIOS PARA LA PAZ Y LA EDUCACION</p>
            </div>
          </div>
          <div className="bottom">
            <a href="https://www.facebook.com/chambimbe.colectivo.cultural" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" className="icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCT-_4L5NIU69FB027fyHNGg" target="_blank" rel="noopener noreferrer">
              <img src={assets.youtube_icon} alt="YouTube" className="icon" />
            </a>
          </div>
        </div>
        <div className="pie-pagina-top-right">
          <h1>CONTACTANOS</h1>
          <div className="pie-list">
            <img src={assets.gmail_icon} alt="Gmail" className="icon" />
            <a href="mailto:chambimbetransformando@gmail.com">chambimbetransformando@gmail.com</a>
          </div>
          <div className="pie-list">
            <img src={assets.lugar_icon} alt="Lugar" className="icon" />
            <a>Calle 11B # 86-64 Barrio Centro, Ataco, Tolima</a>
          </div>
          <div className="pie-list">
            <img src={assets.whatsapp_icon} alt="WhatsApp" className="icon" />
            <a href="tel:+573156090833">(+57) 315 6090833</a>
          </div>
        </div>
      </div>
      <p>&copy; 2024 CHAMBIMBE COLECTIVO CULTURAL</p>
    </div>
  );
};
