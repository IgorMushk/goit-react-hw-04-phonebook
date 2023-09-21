//import { FiterContainer, Inpute, Label } from './FilterByName.styled';
import { Inpute, Label } from './FilterByName.styled';

export const FilterByName = ({value, onChange}) => {
  return (
    // <FiterContainer>
     <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Inpute type="text" id="filter" name="filter" value={value} onChange={onChange} />
     </>
    // </FiterContainer> 
  );
};
