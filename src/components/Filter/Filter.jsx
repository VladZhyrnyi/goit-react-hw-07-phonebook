import { Wrapper, Input } from './Filter.styled';
import { selectFilter, setFilter } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    const { value } = event.currentTarget;

    dispatch(setFilter(value));
  };

  return (
    <Wrapper>
      <p>Find by name:</p>
      <Input type="text" name="filter" value={filter} onChange={handleChange} />
    </Wrapper>
  );
};
