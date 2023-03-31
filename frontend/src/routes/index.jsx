import { Routes, Route } from 'react-router-dom';
import About from '../pages/a-propos/About';
import Error404 from '../pages/Error404';
import Home from '../pages/home/Home';
import Logement from '../pages/logement/Logement';


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/logements/:id" element={<Logement />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

export default AppRoutes;