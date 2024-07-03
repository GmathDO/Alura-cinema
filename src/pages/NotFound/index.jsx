import styles from "./NotFound.module.css"

const NotFound = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.textError}>Página no encontrada</p>
        </section>
    )
}

export default NotFound;