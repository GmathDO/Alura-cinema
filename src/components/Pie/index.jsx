import styles from "./Pie.module.css"
import logo from "../Cabecera/logo-alura.png"

const Pie = () => {
    return (
        <footer className={styles.pie}>
            <section className={styles.textoPie}>
                <span>Desarrollado por</span><img src={logo} alt="Alura logo" />
            </section>
        </footer>
    )
}

export default Pie