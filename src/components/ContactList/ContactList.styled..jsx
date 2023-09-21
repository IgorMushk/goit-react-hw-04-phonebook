import { styled } from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
  padding-left: 0px;
  width: 300px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemText = styled.p`
  font-size: 18px;
  margin: 5px;

`;

export const Button = styled.button`
  display: block;
  width: fit-content;
  //width: 50px;
  height: 24px;
  border: 4px solid transparent;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  outline: none;
  &:hover,
  &:focus {
    //border: 2px solid #94c0f9;
    cursor: pointer;
    background-color: #51575e;
    color: white
  }

`; 