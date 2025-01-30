import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './componentes/Home.jsx';
import { Pelicula } from './componentes/Pelicula.jsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
            <Route path="/" element={<Home />} />
            <Route path="/pelicula" element={<Pelicula />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
}

export default App;
