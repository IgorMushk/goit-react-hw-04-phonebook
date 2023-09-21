import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 4px;
`;

export const Inpute = styled.input`
  display: block;
  margin-top: 5px;
  width: 184px;
  padding: 5px 10px;
  font-weight: 400;
  font-size: 14px;
  border-radius: 5px;
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

export const Button = styled.button`
  display: block;
  width: 184px;
  padding: 5px;
  border: 4px solid transparent;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: all 300ms linear;
  outline: none;
  &:hover,
  &:focus {
    border: 4px solid #94c0f9;
    cursor: pointer;
  }

`;
