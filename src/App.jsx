import Header from "./components/header/Header.jsx"
import router from "./router.jsx"
import {RouterProvider} from "react-router-dom"


function App() {
    return (
        <div className="container py-8">
            <Header />
            <div className="pt-8">
                <RouterProvider router={router} />
            </div>
        </div>
    )
}

export default App
