import { Link } from "react-router-dom"
import LinkComponent from "./LinkComponent"



const Navbar = () => {

    return (
        <div className="min-h-[7vh] border-b-2 flex items-center justify-between py-5 px-6">
            <Link to="/">
                <img src="/assets/logo.png" alt="Logo" className="h-[35px]" />
            </Link>
            {/* <div className="flex align-center justify-center flex-1">
                    <h1 className="text-3xl font-extrabold">Go</h1><h1 className="text-3xl font-medium">Eco</h1>
                </div>                 */}
            <ul className="flex items-center gap-9">
                <li>
                    <LinkComponent  name="Strona Główna" to="/"/>
                </li>
                <li>
                    <LinkComponent  name="O Nas" to="/about"/>
                </li>
                <li>
                    <LinkComponent name="Kalkulator" to="/calculator" />
                </li>
            </ul>
        </div>
    )
}

export default Navbar