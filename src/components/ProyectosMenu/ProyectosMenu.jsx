import { Link } from 'react-router-dom'
import './ProyectosMenu.css'

export const Proyectos = () => {
    return (
        <div className='proyectos'>
            <h1>PROYECTOS</h1>
            <div className="proyectos-botones">
                <Link to='/chambimbe-pagina/proyectos/cultura-en-tu-corregimiento' ><button>CULTURA EN TU CORREGIMIENTO</button></Link>
                <Link to='/chambimbe-pagina/proyectos/chambimbe-ancestral' ><button>CHAMBIMBE ANCESTRAL</button></Link>
                <Link to='/chambimbe-pagina/proyectos/taller-teorico-practico' ><button>TALLER TEORICO PRACTICO</button></Link>
                <Link to='/chambimbe-pagina/proyectos/balonki' ><button>BALONKI</button></Link>
                <Link to='/chambimbe-pagina/proyectos/artes-plasticas' ><button>ARTES PLASTICAS</button></Link>
            </div>
        </div>
  )
}
