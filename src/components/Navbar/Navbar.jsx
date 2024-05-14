import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-top'>
            <div className='navbar-top-left'>
                <img src={assets.logo_transformed} alt='logo' className='logo' />
                <div className="navbar-top-left-texts">
                    <h1 className='navbar-title'>CHAMBIMBE</h1>
                    <h1 className='navbar-title'>COLECTIVO CULTURAL</h1>
                    <p className='navbar-title'>TRANSFORMANDO TERRITORIOS PARA LA PAZ Y LA EDUCACION</p>
                </div>
            </div>
            <div className="navbar-top-right">
                <a href="https://www.facebook.com/chambimbe.colectivo.cultural" target="_blank">
                    <img src={assets.facebook_icon_black} alt='icon' className='icon' align='center' />
                </a>
                <a href="https://www.youtube.com/channel/UCT-_4L5NIU69FB027fyHNGg" target="_blank">
                    <img src={assets.youtube_icon_black} alt='icon' className='icon' align='center' />
                </a>
            </div>
        </div>
        <div className="menu">
            <Link to='/chambimbe-pagina/' ><button>NOSOTROS</button></Link>
            <Link to='/chambimbe-pagina/proyectos/cultura-en-tu-corregimiento' ><button>PROYECTOS</button></Link>
            <img src={assets.logo_indigena} alt='icon' className='icon' />
            <Link to='/chambimbe-pagina/relatos' ><button>RELATOS</button></Link>
            <Link to='/chambimbe-pagina/asociados' ><button>ASOCIADOS</button></Link>
        </div>
    </div>
  )
}
