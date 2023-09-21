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

  useEffect(() => {
    // console.log('Save local  storage');
    window.localStorage.setItem('contacts', JSON.stringify(contactList));
  }, [contactList]);

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
