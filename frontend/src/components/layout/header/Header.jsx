import Logo from '../../Logo';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container flex">
                <Logo fill="#FF6060" className="logo" />
                <nav>
                    <ul className="flex">
                        <li><Link to="./">Accueil</Link></li>
                        <li><Link to="./a-propos">A propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;