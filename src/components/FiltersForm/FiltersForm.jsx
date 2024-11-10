import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/filtersSlice";
import { fetchCampers } from "../../redux/operations";
import { BsDiagram3 } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsCupHot } from "react-icons/bs";
import { MdTv } from "react-icons/md";
import { PiShower } from "react-icons/pi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import css from './FiltersForm.module.css';


export default function FiltersForm() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleLocationChange = (event) => {
    dispatch(updateFilters({ location: event.target.value }));
    dispatch(fetchCampers());
  }

    const handleTransmissionChange = () => {
    const newValue = filters.transmission === 'automatic' ? 'manual' : 'automatic';
    dispatch(updateFilters({ name: 'transmission', value: newValue }));
    dispatch(fetchCampers());
  }

  const handleFilterChange = (name, value) => {
    dispatch(updateFilters({ name, value }));
    dispatch(fetchCampers());
  };

  return (
    <div className={css.container}>
      {/* Location */}
      <input
        type="text"
        placeholder="Kyiv, Ukraine"
        value={filters.location || ''}
        onChange={handleLocationChange}
      />
      <p className={css.text}>Vehicle equipment</p>
      {/* Vehicle equipment */}
      <div className={css.vehicleContainer}>
      <label >
        <input
          type="checkbox" 
          checked={filters.AC || false}
          onChange={(event) => handleFilterChange('AC', event.target.checked)}
        />
        <BsWind/><br />
        AC
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.transmission === 'automatic'}
          onChange={handleTransmissionChange}
        />
        <BsDiagram3/><br />
        Automatic
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.kitchen || false}
          onChange={(event) => handleFilterChange('kitchen', event.target.checked)}
        />
        <BsCupHot/><br />
        Kitchen
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.TV || false}
          onChange={(event) => handleFilterChange('TV', event.target.checked)}
        />
        <MdTv/><br />
        TV
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.bathroom || false}
          onChange={(event) => handleFilterChange('bathroom', event.target.checked)}
        />
        <PiShower/><br />
        Bathroom
      </label>  
      </div>
      

      {/* Vehicle type */}
      <div>
        <p>Vehicle type</p>
        <div className={css.vehicleContainer}>
          <label>
          <input
            type="radio"
            name="form"
            value="panelTruck"
            checked={filters.form === 'panelTruck'}
            onChange={() => handleFilterChange('form', 'panelTruck')}
          />
          <BsGrid1X2/><br />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="fullyIntegrated"
            checked={filters.form === 'fullyIntegrated'}
            onChange={() => handleFilterChange('form', 'fullyIntegrated')}
          />
          <HiOutlineSquares2X2/><br />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="alcove"
            checked={filters.form === 'alcove'}
            onChange={() => handleFilterChange('form', 'alcove')}
          />
          <BsGrid3X3Gap/><br />
          Alcove
        </label>
        </div>
        
      </div>
    </div>
  );
};
