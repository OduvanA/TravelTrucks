import { useDispatch } from "react-redux";
import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations";
import FiltersForm from "../../components/FiltersForm/FiltersForm";
import css from './CampersPage.module.css';
import { resetFilters } from "../../redux/filtersSlice";
import { useLocation } from "react-router-dom";

export default function CampersPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  
  
  useEffect(() => {
    dispatch(resetFilters());
    dispatch(fetchCampers({page: 1, limit: 4}));
  }, [dispatch, location]);

  return (
    <div className={css.container}>
      <FiltersForm/>
      <CampersList/>
    </div>
    
  )
}


  

