import { Component } from 'react';
import contacts from '../data/contacts.json';
import { Container, Title, TitleList } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { FilterByName } from './Filter/FilterByName';
import { ContactForm } from './ContactForrm/ContactForm';

export class App extends Component {
  state = {
    contactList: contacts,
    filter: '',
  };

  //console.log('clientList', this.state.contactList);

  componentDidMount() {
    const contactsFromLocalStor = JSON.parse(localStorage.getItem('contacts'));
    //console.log('localStor', contactsFromLocalStor)
    // if(contactsFromLocalStor !== null) {
    //   this.setState({contactList: contactsFromLocalStor});
    // }
    contactsFromLocalStor && this.setState({contactList: contactsFromLocalStor})
  }

componentDidUpdate(prevProps, prevState) {
  if (prevState.contactList.length !== this.state.contactList.length) {
localStorage.setItem('contacts', JSON.stringify(this.state.contactList))
  }
} 

  setStateContacts = dataContact => {
    // Checking input ccontact in contactList
    const checkContactList = this.state.contactList.some(
      contact => contact.name.toLowerCase() === dataContact.name.toLowerCase()
    );
    if (checkContactList) {
      alert(`${dataContact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contactList: [...prevState.contactList, dataContact],
    }));
  };

  handlerFilterChange = evt => {
    //console.log('evt.currentTarget.value', evt.currentTarget.value)
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContats = () => {
    const filter = this.state.filter.toLowerCase();
    //console.log('filter', filter)
    const filteredContats = this.state.contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    //console.log('filteredContats', filteredContats)
    return filteredContats;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contactList: prevState.contactList.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm createContactItem={this.setStateContacts} />
        <TitleList>Contacts</TitleList>
        <FilterByName
          value={this.state.filter}
          onChange={this.handlerFilterChange}
        />
        <ContactList
          // contacts={this.state.contactList}
          contacts={this.getFilteredContats()}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </Container>
    );
  }
}
