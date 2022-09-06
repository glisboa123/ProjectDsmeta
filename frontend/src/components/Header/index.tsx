import logo from '../../assets/img/logotop.svg'
import './styles.css'


function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Primeiro projeto</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/giuliano_rodriguess"> @giuliano_rodriguess</a>
                </p>
            </div>
        </header>
    )
}

export default Header