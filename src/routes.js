import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";

const AppRoutes = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route index element={<Inicio />} />
                            <Route path="favoritos" element={<Favoritos />} />
                            <Route path=":id" element={<Player />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes