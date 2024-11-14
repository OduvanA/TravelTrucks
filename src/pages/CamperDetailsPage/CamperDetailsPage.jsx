import { Navigate, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/operations";
import css from './CamperDetailsPage.module.css'
import clsx from "clsx";
import { useEffect } from "react";
import { selectCurrentCamper, selectIsLoading } from "../../redux/selectors";
import RateLocateDetails from "../../components/RateLocateDetails/RateLocateDetails";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
}


export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCamperById(`${id}`));
  }, [dispatch, id]);

  const camper = useSelector(selectCurrentCamper);

  return (
    !loading &&
    camper && (
      <div className={css.container}>
        <div className={css.titleDetailsContainer}>
          <h2 className={css.title}>{camper.name}</h2>
          <RateLocateDetails camper={camper}/>
          <p className={css.title}>€{parseFloat(camper.price).toFixed(2)}</p>
        </div>
        <ul className={css.gallery}>
          {camper.gallery.map((item) => (
            <li className={css.listItem} key={item.thumb}>
              <img className={css.img} src={item.thumb} alt='camper' />
            </li>
          ))}
        </ul>
        <p className={css.description}>{camper.description}</p>
        <ul className={css.detailsList}>
        <li className={css.detailsLink}>
          <NavLink to='features' className={buildLinkClass}>Features</NavLink>
        </li>
        <li className={css.detailsLink}>
          <NavLink to='reviews' className={buildLinkClass}>Reviews</NavLink>
        </li>
        </ul>
        {location.pathname === `/catalog/${id}` && <Navigate to="features" replace />}
        <Outlet/>
      </div>
  ))
}
