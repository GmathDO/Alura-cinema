import { useFavoritosContext } from "Context/Favoritos"
import style from "./Favoritos.module.css"
import Banner from "components/Banner"
import Titulo from "components/Titulo"
import Card from "components/Card"

const Favoritos = () => {
    const {favorito} = useFavoritosContext()

    return (
        <>
            <Banner img="favoritos" color="green"/>
            <Titulo><h1>Favoritos</h1></Titulo>
            <section className={style.container}>
                {favorito.map(favorito => {return <Card {...favorito} key={favorito.id} />})}
            </section>
        </>
    )
}

export default Favoritos