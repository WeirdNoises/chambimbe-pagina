import { Navbar } from './components/Navbar/Navbar'
import { Pie } from './components/Pie/Pie'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nosotros } from './pages/Nosotros/Nosotros';
import { NotFound } from './components/NotFound/NotFound';
import { CulturaEnTuCorregimiento } from './pages/Proyectos/CulturaEnTuCorregimiento/CulturaEnTuCorregimiento';
import { ChambimbeAncestral } from './pages/Proyectos/ChambimbeAncestral/ChambimbeAncestral';
import { TallerTeoricoPractico } from './pages/Proyectos/TallerTeoricoPractico/TallerTeoricoPractico';
import { Balonki } from './pages/Proyectos/Balonki/Balonki';
import { ArtesPlasticas } from './pages/Proyectos/ArtesPlasticas/ArtesPlasticas';
import { Relatos } from './pages/Relatos/Relatos';
import { Asociados } from './pages/Asociados/Asociados';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar/>
        <div className='content'>
          <Routes>
              <Route exact path="/chambimbe-pagina/" element={<Nosotros />}></Route>

              <Route path="/chambimbe-pagina/proyectos/cultura-en-tu-corregimiento" element={<CulturaEnTuCorregimiento />}></Route>
              <Route path="/chambimbe-pagina/proyectos/chambimbe-ancestral" element={<ChambimbeAncestral/>}></Route>
              <Route path="/chambimbe-pagina/proyectos/taller-teorico-practico" element={<TallerTeoricoPractico/>}></Route>
              <Route path="/chambimbe-pagina/proyectos/balonki" element={<Balonki/>}></Route>
              <Route path="/chambimbe-pagina/proyectos/artes-plasticas" element={<ArtesPlasticas/>}></Route>

              <Route path="/chambimbe-pagina/relatos" element={<Relatos/>}></Route>
              <Route path="/chambimbe-pagina/asociados" element={<Asociados/>}></Route>

              <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </div>
        <Pie/>
      </div>
  </Router>
  );
}

export default App
