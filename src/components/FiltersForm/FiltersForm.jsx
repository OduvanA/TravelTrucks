import { useDispatch } from "react-redux";
import { updateFilters } from "../../redux/filtersSlice";
import { fetchCampers } from "../../redux/operations";
import { BsMap } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { PiShower } from "react-icons/pi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import css from './FiltersForm.module.css';
import { useState } from "react";


export default function FiltersForm() {
  const dispatch = useDispatch();

  const [localFilters, setLocalFilters] = useState({
    location: "",
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "",
  });

    // Handle local filter changes
  const handleInputChange = (name, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(updateFilters(localFilters));
    dispatch(fetchCampers({ page: 1, limit: 4 }));
 
    setLocalFilters({
      location: "",
      AC: false,
      transmission: "",
      kitchen: false,
      TV: false,
      bathroom: false,
      form: "",
    });
  };

  return (
    <form className={css.container} onSubmit={handleSearch}>
      <p className={css.locationTitle}>Location</p>
      {/* Location */}
      <div className={css.locationInputWrapper}>
        <BsMap className={css.map} />
        <input
          type="text"
          className={css.locationInput}
          placeholder='Kyiv, Ukraine'
          value={localFilters.location}
          onChange={(event) => handleInputChange("location", event.target.value)}
        />        
      </div>
      <p className={css.filtersTitle}>Filters</p>
      <p className={css.vehicleTitle}>Vehicle equipment</p>
      {/* Vehicle equipment */}
      <div className={css.vehicleContainer}>
      <label >
        <input
          type="checkbox" 
          checked={localFilters.AC}
          onChange={(event) => handleInputChange("AC", event.target.checked)}
          />
          <span>
            <BsWind style={{fontSize: '28px'}}/><br />
            AC
          </span> 
      </label>
      <label>
        <input
          type="checkbox"
          checked={localFilters.transmission === 'automatic'}
          onChange={() =>
              handleInputChange(
                "transmission",
                localFilters.transmission === "automatic" ? "manual" : "automatic"
              )
            }
          />
          <span>
            <BsDiagram3 style={{fontSize: '28px'}}/><br />
            Automatic            
          </span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={localFilters.kitchen}
          onChange={(event) => handleInputChange('kitchen', event.target.checked)}
          />
        <span>
            <BsCupHot style={{ fontSize: '28px' }} /><br />
          Kitchen            
        </span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={localFilters.TV}
          onChange={(event) => handleInputChange('TV', event.target.checked)}
          />
        <span>
            <MdTv style={{ fontSize: '28px' }} /><br />
          TV          
        </span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={localFilters.bathroom}
          onChange={(event) => handleInputChange('bathroom', event.target.checked)}
        />
        <span>
            <PiShower style={{ fontSize: '28px' }} /><br />
          Bathroom          
        </span>
      </label>  
      </div>     

      {/* Vehicle type */}
      <div>
        <p className={css.vehicleTitle }>Vehicle type</p>
        <div className={css.vehicleContainer}>
          <label>
          <input
            type="radio"
            name="form"
            value="panelTruck"
            checked={localFilters.form === 'panelTruck'}
            onChange={() => handleInputChange('form', 'panelTruck')}
          />
          <span>
              <BsGrid1X2 style={{ fontSize: '28px' }} /><br />
          Van            
          </span>
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="fullyIntegrated"
            checked={localFilters.form === 'fullyIntegrated'}
            onChange={() => handleInputChange('form', 'fullyIntegrated')}
          />
          <span>
              <HiOutlineSquares2X2 style={{ fontSize: '28px' }} /><br />
            Fully Integrated            
          </span>
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="alcove"
            checked={localFilters.form === 'alcove'}
            onChange={() => handleInputChange('form', 'alcove')}
          />
          <span>
              <BsGrid3X3Gap style={{ fontSize: '28px' }} /><br />
            Alcove            
          </span> 
        </label>
        </div>
        
      </div>
      <button type="submit" className={css.button} >Search</button>
    </form>
  );
};
