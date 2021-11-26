import { useContext } from "react"
import { Context } from "../App"

export const useAuth = () => {
    const context = useContext(Context)
    return context
}