import { useRoutes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Actors from "./pages/Actors"

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/movies",
                    element: <Movies />
                },
                {
                    path: "/actors",
                    element: <Actors />
                }
            ]
        }
    ])
}
