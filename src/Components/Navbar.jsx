import { NavLink} from "react-router-dom";
import '../index.css';

const Navbar = () => {
    const setClaseActiva = ({isActive}) => (isActive ? "active" : "");

    return (
        <div>
            <nav className="navbar">
                <NavLink className={setClaseActiva} to='/'>
                    Home
                </NavLink>
                <NavLink className={setClaseActiva} to='/pokemon'>
                    Pokemon
                </NavLink>
            </nav>
        </div>
    );
};
export default Navbar;