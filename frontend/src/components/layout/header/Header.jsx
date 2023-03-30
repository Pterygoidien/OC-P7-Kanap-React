import Logo from '../../Logo';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <div className="container flex justify-between items-center">
                <Logo fill="#FF6060" className="logo" />
                <nav>
                    <ul className="flex justify-between">
                        <li><Link to="./">Accueil</Link></li>
                        <li><Link to="./a-propos">A propos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;