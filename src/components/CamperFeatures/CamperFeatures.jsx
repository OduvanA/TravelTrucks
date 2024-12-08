import { useSelector } from "react-redux";
import { selectCurrentCamper } from "../../redux/selectors";
import css from './CamperFeatures.module.css';
import FeaturesList from "../FeaturesList/FeaturesList";
import BookingForm from "../BookingForm/BookingForm";


export default function CamperFeatures() {
const camper = useSelector(selectCurrentCamper);

  return (
    <div className={css.container}>
      <div className={css.featuresContainer}>
        <FeaturesList camper={camper} />
        <div>
          <p className={css.title}>Vehicle details</p>
          <div></div>
          <table className={css.table}>
            <tbody>
              <tr>
                <td>Form</td>
                <td className={css.td}>{camper.form}</td>
              </tr>
              <tr>
                <td>Length</td>
                <td className={css.td}>{camper.length}</td>
              </tr>
              <tr>
                <td>Width</td>
                <td className={css.td}>{camper.width}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td className={css.td}>{camper.height}</td>
              </tr>
              <tr>
                <td>Tank</td>
                <td className={css.td}>{camper.tank}</td>
              </tr>
              <tr>
                <td>Consumption</td>
                <td className={css.td}>{camper.consumption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <BookingForm />
    </div>
  );
}
