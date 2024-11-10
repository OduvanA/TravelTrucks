import { BsDiagram3 } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { LiaGasPumpSolid } from "react-icons/lia";
import { BsCupHot } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { RiListRadio } from "react-icons/ri";
import { PiShower } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { MdOutlineGasMeter } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import css from './FeaturesList.module.css'

export default function FeaturesList({ camper }) {
  return (
    <div className={css.container}>
        <div className={css.feature}>
          <BsDiagram3 className={css.icon} />
          <p>{camper.transmission}</p>
        </div>
        <div className={css.feature}>
          <LiaGasPumpSolid className={css.icon} />
          <p>{camper.engine}</p>
        </div>
        {camper.kitchen && (
          <div className={css.feature}>
            <BsCupHot className={css.icon} />
            <p>Kitchen</p>
          </div>
        )}
        {camper.AC && (
          <div className={css.feature}>
            <BsWind className={css.icon} />
            <p>AC</p>
          </div>
        )}
        {camper.TV && (
          <div className={css.feature}>
            <MdTv className={css.icon} />
            <p>TV</p>
          </div>
        )}
        {camper.radio && (
          <div className={css.feature}>
            <RiListRadio className={css.icon} />
            <p>Radio</p>
          </div>
        )}
        {camper.bathroom && (
          <div className={css.feature}>
            <PiShower className={css.icon} />
            <p>Bathroom</p>
          </div>
        )}
        {camper.refrigerator && (
          <div className={css.feature}>
            <TbFridge className={css.icon} />
            <p>Refrigerator</p>
          </div>
        )}
        {camper.microwave && (
          <div className={css.feature}>
            <LuMicrowave className={css.icon} />
            <p>Microwave</p>
          </div>
        )}
        {camper.gas && (
          <div className={css.feature}>
            <MdOutlineGasMeter className={css.icon} />
            <p>Gas</p>
          </div>
        )}
        {camper.water && (
          <div className={css.feature}>
            <IoWaterOutline className={css.icon} />
            <p>Water</p>
          </div>
        )}
    </div>
  );
}