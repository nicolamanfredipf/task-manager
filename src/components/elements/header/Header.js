import { Link } from "react-router-dom";
import './Header.module.scss';

function Header({ children }) {
    return (
        <header>
            <img src="/assets/logo.png" alt="logo.png"></img>
            <nav>
                <ul>
                    {children}
                </ul>
            </nav>

        </header>
    );
}

export default Header;