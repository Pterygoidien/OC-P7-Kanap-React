import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/home/Home';
import Logement from '../pages/logement/Logement';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/logement" element={<Logement />} />
        </Routes>
    );
}

export default AppRoutes;