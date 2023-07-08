import PropTypes from "prop-types"
import classes from "./icon.module.css"

export default function Icon({path, viewbox, className = ""}) {

    return (
        <svg
            className={`${classes.icon} ${className}`}
            viewBox={viewbox  || "0 0 24 24"}
        >
            <path d={path}/>
        </svg>
    )
}

Icon.propTypes = {
    path: PropTypes.string.isRequired,
    viewbox: PropTypes.string,
    className: PropTypes.string
}