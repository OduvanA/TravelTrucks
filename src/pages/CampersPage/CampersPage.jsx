import { useDispatch } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations";
import FiltersForm from "../../components/FiltersForm/FiltersForm";
import css from './CampersPage.module.css';

export default function CampersPage() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <FiltersForm/>
      <CampersList/>
    </div>
    
  )
}


  

