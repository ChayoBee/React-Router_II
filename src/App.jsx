import { PokeContext } from './Context/PokeContext';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Pokemon from './Views/Pokemon';
import PokeDetails from './Views/PokeDetails';

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/pokemon/:id' element={<PokeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
