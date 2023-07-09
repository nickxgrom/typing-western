import Brand from "./Brand.jsx"
import Menu from "./menu/Menu.jsx"

export default function Header() {
    return (
        <div className="flex gap-5">
            <Brand/>
            <Menu />
        </div>
    )
}