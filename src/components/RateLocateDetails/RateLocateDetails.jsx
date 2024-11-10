import css from './RateLocateDetails.module.css';
import { FaStar } from "react-icons/fa6";
import { BsMap } from "react-icons/bs";

export default function RateLocateDetails({camper}) {
  return (
    <div className={css.container}>
      <div className={css.subContainer}>
        {camper.rating ? 
          <FaStar className={css.star}/>
         : <FaStar className={`${css.star} ${css.emptyStar}`} />
        }
        <p className={css.text}>
          {camper.rating} ({camper.reviews.length} Reviews)
        </p>
      </div>
      <div className={css.subContainer}>
        <BsMap className={css.map} />
        <p className={css.text}>{camper.location}</p>
      </div>
    </div>
  )
}