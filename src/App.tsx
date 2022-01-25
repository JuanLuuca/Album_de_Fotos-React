import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Album } from './pages/Album';
import { Photo } from './pages/Photo';

const App = () => {
  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/album/:id', element: <Album /> },
    { path: '/photo/:id', element: <Photo />}
  ]);
};

const AppWrapper = () => {
  return (
    <div>
      <h1>Galeria de fotos</h1>
      <hr/>
      <Router>
        <App />
      </Router>
    </div>
  )
}

export default AppWrapper;
