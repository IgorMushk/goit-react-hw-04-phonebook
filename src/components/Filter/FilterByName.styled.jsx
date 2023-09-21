import { styled } from 'styled-components';

export const FiterContainer = styled.div`
  width: 300px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 4px;
`;

export const Inpute = styled.input`
  width: 184px;
  padding: 5px 10px;
  font-weight: 400;
  font-size: 14px;
  border-radius: 4px;
  //border: none;
  border: 4px solid transparent;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 300ms linear;
  &:hover,
  &:focus {
    border: 4px solid #94c0f9;
  }
`;
