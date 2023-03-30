import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Error404 from '../pages/Error404';
import Home from '../pages/home/Home';
import Logement from '../pages/logement/Logement';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default AppRoutes;