import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './componentes/Home.jsx';
import { Popular } from './componentes/Popular.jsx';
import { Pelicula } from './componentes/Pelicula.jsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Cartelera } from './componentes/Cartelera.jsx';
import { Proximamente } from './componentes/Proximamente.jsx';
import { MejorValoradas } from './componentes/MejorValoradas.jsx';

function App() {
  return (
    <Router>
      <TransitionGroup className="transition-wrapper">
        {/* Aplicamos CSSTransition a las rutas */}
        <CSSTransition
          timeout={4000}
          classNames="page"
          key={window.location.pathname} // Usamos la ruta como clave para que se active la animación
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/populares" element={<Popular />} />
            <Route path="/pelicula" element={<Pelicula />} />
            <Route path='/cartelera' element={<Cartelera/>}/>
            <Route path='/proximamente' element={<Proximamente/>} />
            <Route path='/mejor-valoradas' element={<MejorValoradas/>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
