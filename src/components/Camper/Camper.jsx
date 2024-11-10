import clsx from 'clsx';
import css from './Camper.module.css';
import { BsSuitHeart } from "react-icons/bs";
import Button from '../Button/Button';
import RateLocateDetails from '../RateLocateDetails/RateLocateDetails';
import { selectFavorites } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import FeaturesList from '../FeaturesList/FeaturesList';


export default function Camper({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((item) => item.id === camper.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper));
    }
  };
  return (
    <>
      <div className={css.imgContainer}>
        <img
          className={css.img}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        ></img>
      </div>
      <div className={css.infoContainer}>
        <div className={css.titleContainer}>
          <h2>{camper.name}</h2>
          <div className={css.priceSubCntr}>
            <p>€{parseFloat(camper.price).toFixed(2)}</p>
              <BsSuitHeart
                onClick={handleFavorite}
                className={clsx(css.heart, isFavorite && css.redHeart)} />
          </div>
        </div>
        <RateLocateDetails camper={camper}/>
        <p className={css.description}>{camper.description}</p>
        <FeaturesList camper={camper} /> 
        <Button text="Show more" path={`/catalog/${camper.id}`} />
      </div>
    </>
  )
}

   