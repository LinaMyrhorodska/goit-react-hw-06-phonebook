import { FilterLabel, FilterTitle, FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <FilterLabel>
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput onChange={handleInputChange} value={filter} type="text" name="filter" />
      </FilterLabel>
    </>
  );
};