import { NavLink } from 'react-router-dom';
import './NavBar.css';

const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");

function NavBar() {
  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>Inicio</NavLink>
      <NavLink to="/reviews" className={customClassName}>Reseñas de emojis</NavLink>
      <NavLink to="/about-me" className={customClassName}>Sobre mí</NavLink>
      <NavLink to="/about-us" className={customClassName}>Sobre nosotros</NavLink>
    </nav>
  )
}

export default NavBar;