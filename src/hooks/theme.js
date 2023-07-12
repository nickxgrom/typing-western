import {useEffect, useState} from "react"

const THEMES = ["serikaDark", "arch", "bounquet", "futureFunc", "dollar"]

export default function useTheme() {
    const [currentTheme, setTheme] = useState(localStorage.getItem("theme"))

    useEffect(() => {
        if (THEMES.includes(currentTheme)) {
            document.body.setAttribute("data-theme", currentTheme)
            localStorage.setItem("theme", currentTheme)
        }
    }, [currentTheme])

    return [currentTheme, setTheme, THEMES]
}