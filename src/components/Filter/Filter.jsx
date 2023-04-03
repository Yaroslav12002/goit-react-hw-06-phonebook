import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        name="filter"
        onChange={e => {
          handleFilterChange(e);
        }}
      />
    </label>
  );
};

export default Filter;
