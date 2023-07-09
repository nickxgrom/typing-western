import {createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Root page</div>
    },
    {
        path: "/some-page",
        element: <div>Page</div>
    },
])

export default router