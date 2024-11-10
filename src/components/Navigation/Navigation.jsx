import { Link, NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import logo from '../../../public/logo.svg'
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}

export default function Navigation() {
  return (
    <div className={css.navbar}>
      <Link to="/" className={css.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <nav className={css.navLinks}>
        <NavLink to='/' className={buildLinkClass}>Home</NavLink>
        <NavLink to='/catalog' className={buildLinkClass}>Catalog</NavLink>
      </nav>
    </div>
  )
}