import { mdiAccount } from "@mdi/js"
import Icon from "../../shared/icon/Icon.jsx"
import classes from "./account.module.css"


export default function Account() {
    return (
        <div className={classes.account}>
            <Icon path={mdiAccount}/>
            <span className="mr-1 text-xs">nxgr</span>
            <div className={classes.levelChip}>20</div>
        </div>
    )
}