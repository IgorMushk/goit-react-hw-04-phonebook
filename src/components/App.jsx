//import { Component, useState } from 'react';
import { useEffect, useState } from 'react';
import contacts from '../data/contacts.json';
import { Container, Title, TitleList } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { FilterByName } from './Filter/FilterByName';
import { ContactForm } from './ContactForrm/ContactForm';

import React from 'react';

export function App() {
  const [contactList, setContactList] = useState(() => {
    // console.log('Original station or read from local storage');
    return JSON.parse(window.localStorage.getItem('contacts')) ?? contacts;
  });
  const [filter, setFilter] = useState('');

  // componentDidMount

  // componentDidUpdate
  useEffect(()=>{
    // console.log('Save locdl  storage');
    window.localStorage.setItem('contacts', JSON.stringify(contactList));
  },[contactList]);

  const setStateContacts = dataContact => {
    // Checking input ccontact in contactList
    const checkContactList = contactList.some(
      contact => contact.name.toLowerCase() === dataContact.name.toLowerCase()
    );
    if (checkContactList) {
      alert(`${dataContact.name} is already in contacts`);
      return;
    }

    setContactList(prevContactList => [...prevContactList, dataContact]);
  };

  const handlerFilterChange = evt => {
    //console.log('evt.target.value', evt.target.value)
    setFilter(evt.target.value);
  };

  const getFilteredContats = () => {
    //console.log('filter', filter);
    const filteredContats = contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    //console.log('---getFilteredContats', filteredContats);
    return filteredContats;
  };

  const deleteContact = id => {
    //console.log(id)
    setContactList(prevContactList =>
      prevContactList.filter(contact => contact.id !== id)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm createContactItem={setStateContacts} />
      <TitleList>Contacts</TitleList>
      <FilterByName value={filter} onChange={handlerFilterChange} />
      <ContactList
        //contacts={contactList}
        contacts={getFilteredContats()}
        onDeleteContact={deleteContact}
      ></ContactList>
    </Container>
  );
}

// export class App extends Component {
//   state = {
//     contactList: contacts,
//     filter: '',
//   };

//   //console.log('clientList', this.state.contactList);

//   componentDidMount() {
//     const contactsFromLocalStor = JSON.parse(localStorage.getItem('contacts'));
//     //console.log('localStor', contactsFromLocalStor)
//     // if(contactsFromLocalStor !== null) {
//     //   this.setState({contactList: contactsFromLocalStor});
//     // }
//     contactsFromLocalStor && this.setState({contactList: contactsFromLocalStor})
//   }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contactList.length !== this.state.contactList.length) {
// localStorage.setItem('contacts', JSON.stringify(this.state.contactList))
//   }
// }

//   setStateContacts = dataContact => {
//     // Checking input ccontact in contactList
//     const checkContactList = this.state.contactList.some(
//       contact => contact.name.toLowerCase() === dataContact.name.toLowerCase()
//     );
//     if (checkContactList) {
//       alert(`${dataContact.name} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contactList: [...prevState.contactList, dataContact],
//     }));
//   };

//   handlerFilterChange = evt => {
//     //console.log('evt.currentTarget.value', evt.currentTarget.value)
//     this.setState({ filter: evt.currentTarget.value });
//   };

//   getFilteredContats = () => {
//     const filter = this.state.filter.toLowerCase();
//     //console.log('filter', filter)
//     const filteredContats = this.state.contactList.filter(contact =>
//       contact.name.toLowerCase().includes(filter)
//     );
//     //console.log('filteredContats', filteredContats)
//     return filteredContats;
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contactList: prevState.contactList.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <Title>Phonebook</Title>
//         <ContactForm createContactItem={this.setStateContacts} />
//         <TitleList>Contacts</TitleList>
//         <FilterByName
//           value={this.state.filter}
//           onChange={this.handlerFilterChange}
//         />
//         <ContactList
//           // contacts={this.state.contactList}
//           contacts={this.getFilteredContats()}
//           onDeleteContact={this.deleteContact}
//         ></ContactList>
//       </Container>
//     );
//   }
// }
