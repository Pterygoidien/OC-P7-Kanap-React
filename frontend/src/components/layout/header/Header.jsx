import Logo from '../../Logo';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container flex">
                <Logo fill="#FF6060" className="logo" />
                <nav>
                    <ul className="flex">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">A propos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;