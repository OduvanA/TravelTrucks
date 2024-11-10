import { useSelector } from "react-redux"
import { selectCampers } from "../../redux/selectors";
import Camper from "../Camper/Camper";
import css from './CampersList.module.css';
import { useState } from "react";

export default function CampersList() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const campers = useSelector(selectCampers);
  const visibleCampers = campers.slice(0, visibleCount);
  
  return (
    <div>
    <ul className={css.list}>
      {visibleCampers.map((camper) => (
      <li key={camper.id} className={css.listItem}>
          <Camper camper={camper} />
      </li>
      ))}
      </ul> 
      {visibleCount < campers.length && (
        <button className={css.button} onClick={handleLoadMore} type="button">
          Load more
        </button>
      )}
    </div>  
  )
}