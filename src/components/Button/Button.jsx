import { Link } from 'react-router-dom';
import css from './Button.module.css'

export default function Button({ path, text }) {
  return (
    <Link to={path} className={css.button}>
      {text}
    </Link>    
  );
}