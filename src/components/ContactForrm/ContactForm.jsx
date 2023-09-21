import { nanoid } from 'nanoid';
import { Button, Form, Inpute, Label } from './ContactForm.Styled';

//const { Component } = require('react');

import React, { useState } from 'react';

export function ContactForm({ createContactItem }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerChange = evt => {
    //console.dir(evt.target.name);
    //console.dir(evt.target.value);
    const {name, value} = evt.target
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handlerSubmit = evt => {
    evt.preventDefault();
    const newContact ={
        id: nanoid(),
        name: name,
        number: number
    }
    createContactItem(newContact);
    setName('');
    setNumber('');
};

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <Label>
          Name
          <Inpute
            type="text"
            name="name"
            //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handlerChange}
          />
        </Label>
        <Label>
          Number
          <Inpute
            type="tel"
            name="number"
            //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handlerChange}
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
}

