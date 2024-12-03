import { useDispatch, useSelector } from "react-redux"
import { selectCampers, selectIsLoading, selectTotal } from "../../redux/selectors";
import Camper from "../Camper/Camper";
import css from './CampersList.module.css';
import { useEffect, useState } from "react";
import { fetchCampers } from "../../redux/operations";

export default function CampersList() {
  // const [page, setPage] = useState(1);
  const page = 1;
  const [limit, setLimit] = useState(4);
  // const limit = 4;

  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotal);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCampers({ page, limit }));
  }, [dispatch, page, limit]);

  const handleLoadMore = () => {
    if (!isLoading) {
    setLimit((prevLimit) => prevLimit + 4);
  }
  };

  return (
    <div>
    <ul className={css.list}>
      {campers.map((camper) => (
      <li key={camper.id} className={css.listItem}>
          <Camper camper={camper} />
      </li>
      ))}
      </ul> 
      {campers.length < totalCampers &&  (
        <button className={css.button} onClick={handleLoadMore} type="button" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>  
  )
}