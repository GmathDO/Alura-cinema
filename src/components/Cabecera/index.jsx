import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo-alura.png"
import CabeceraLink from "components/CabeceraLink"

const Cabecera = () => {
    return (
        <header className={styles.cabecera}>
                <Link to="./">
                    <section className={styles.logoContainer}>
                        <img src={logo} alt="Alura logo" /> <span>Cinema</span>
                    </section>
                </Link>
                <nav>
                    <CabeceraLink url="./">
                        Home
                    </CabeceraLink>
                    <CabeceraLink url="./Favoritos">
                        Favoritos
                    </CabeceraLink>
                </nav>
        </header>
    )
}

export default Cabecera