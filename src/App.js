import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import Home  from "./pages/Home";
import LynnEstiloDeAprendizaje  from "./pages/LynnEstiloDeAprendizaje";
import Default  from "./pages/Default";
import Dashboard  from "./pages/Dashboard";
import Login from './pages/Login';
import Politicadeprivacidad from './pages/Politicadeprivacidad';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="login" element={<Login />} />
           <Route path="/" element={<Home />} />
           <Route path="dashboard" element={<Dashboard />} />
           <Route path="lynnEstiloDeAprendizaje" element={<LynnEstiloDeAprendizaje />} />
           <Route path="Politicadeprivacidad" element={<Politicadeprivacidad />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
