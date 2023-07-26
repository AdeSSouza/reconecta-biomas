import { Link } from "react-router-dom";
import './header.css';

export default function Header(){
    return(   
        <header className="header">
            <Link to="/" ><p>LOGO</p></Link>
            <nav>
                <ul className="header-menu">
                    <li><Link to="/">Projeto</Link></li>
                    <li><Link to="/sobre">Biomas</Link></li>
                    <li><Link to="/projetos">Equipe</Link></li>
                    <li><Link to="/contato">Contatos</Link></li>
                </ul>
            </nav>           
        </header>
    )
}