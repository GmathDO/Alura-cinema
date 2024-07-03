import FavoritoProvider from "Context/Favoritos";
import Cabecera from "components/Cabecera";
import Container from "components/Container";
import Pie from "components/Pie";
import { Outlet } from "react-router-dom";


const PaginaBase = () => {
    return (
        <main>
            <Cabecera />
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase;