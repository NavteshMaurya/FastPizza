import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"

function Header() {
    return (
        <header className="bg-yellow-500 font-pizza p-4 sm:px-6 uppercase border-stone-200 flex items-center justify-between">
            <Link to='/' className="tracking-widest">
            Fast React Pizza Co.
            </Link>
            <SearchOrder></SearchOrder>
            <Username></Username>
            </header>
    
    )
}

export default Header
