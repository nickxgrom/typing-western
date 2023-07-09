import { mdiKeyboardOutline } from "@mdi/js"
import Icon from "../shared/icon/Icon.jsx"

export default function Brand() {
    return (
        <div className="header">
            <div className="logo">
                <Icon
                    className="w-10 h-10"
                    viewbox="2 2 20 20"
                    path={mdiKeyboardOutline}
                />
                <span>
                    TypingWestern
                </span>
            </div>
        </div>
    )
}