import React, { Component } from 'react';
import { ContactForm, InputBlock, InputText, Input, SubmitBtn } from './AddContactForm.styled';

export class AddContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    this.setState({name: '', number: ''});
  };

  handleInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <InputBlock>
          <InputText>Name:</InputText>
          <Input
            onChange={this.handleInput}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputBlock>
        <InputBlock>
          <InputText>Number:</InputText>
          <Input
            onChange={this.handleInput}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputBlock>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </ContactForm>
    );
  }
}
