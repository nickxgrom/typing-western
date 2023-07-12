import Header from "./components/header/Header.jsx"
import router from "./router.jsx"
import {RouterProvider} from "react-router-dom"
import useTheme from "./hooks/theme.js"


function App() {
    const [theme, setTheme, themes] = useTheme()

    function changeTheme(value) {
        setTheme(value)
    }

    return (
        <div className="container py-8">
            <Header />
            <div className="pt-8">
                <RouterProvider router={router} />
                <div className="my-5">Current theme: <span className="bg-secondary p-3 rounded">{theme}</span></div>
                <div className="flex gap-5">
                    {themes.map(item => {
                        return (
                            <button
                                className="bg-secondary p-3 rounded"
                                key={item}
                                onClick={() => changeTheme(item)}
                            >
                                {item}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default App
