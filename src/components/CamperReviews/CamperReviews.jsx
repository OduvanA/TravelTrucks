import { useSelector } from "react-redux";
import { selectCurrentCamper } from "../../redux/selectors";
import { FaStar } from "react-icons/fa6";
import css from './CamperReviews.module.css'

export default function CamperReviews() {
  const camper = useSelector(selectCurrentCamper);
  
  return (
    <div className={css.container}>
      <div className={css.reviewsContainer}>
        <ul className={css.list}>
          {camper.reviews.map((item, i) => (
            <li className={css.listItem} key={i}>
              <div className={css.avatarContainer}>
                <div className={css.avatar}>
                  <p className={css.letter}>{item.reviewer_name[0]}</p>
                </div>
                <div>
                  <p>{item.reviewer_name}</p>
                  <ul className={css.stars}>
                    {[...Array(5)].map((_, index) => (
                      <li key={index} >
                        <FaStar className={index < item.reviewer_rating ? css.star : css.emptyStar}/>
                      </li>
                      
                    ))}
                  </ul>
                </div>
              </div>
              <p>{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.bookForm}></div>
    </div>
  );
}