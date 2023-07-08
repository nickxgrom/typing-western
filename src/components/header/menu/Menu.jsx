import { mdiKeyboard, mdiInformationVariant, mdiCog, mdiLogout } from "@mdi/js"
import Icon from "../../shared/icon/Icon.jsx"
import classes from "./menu.module.css"
import Account from "../account/Account.jsx"

export default function Menu() {
    return (
        <div className="flex justify-between w-full items-center">
            <div className="flex">
                <button className={`${classes.menuButton} ${classes.disabled}`}>
                    <Icon path={mdiKeyboard}/>
                </button>
                <button className={`${classes.menuButton} ${classes.disabled}`}>
                    <Icon path={mdiInformationVariant}/>
                </button>
                <button className={`${classes.menuButton} ${classes.disabled}`}>
                    <Icon path={mdiCog}/>
                </button>
            </div>
            <div className="flex gap-2">
                <Account />
                <button className={`${classes.menuButton} ${classes.disabled}`}>
                    <Icon path={mdiLogout}/>
                </button>
            </div>
        </div>
    )
}