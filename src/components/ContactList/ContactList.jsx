import { Button, Item, ItemText, List } from "./ContactList.styled.";

export const ContactList = ({contacts, onDeleteContact}) => {
    //console.log('contacts :>>', contacts)
 return  (
<List>
{contacts.map(({id, name, number}) => (
<Item key={id}>
    <ItemText>{name}: {number} </ItemText>
    <Button onClick={()=>onDeleteContact(id)}>Delite</Button> </Item>
    ))}
</List>
)};//
