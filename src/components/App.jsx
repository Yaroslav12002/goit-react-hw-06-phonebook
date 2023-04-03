import ContactForm from './ContactForm/Contactform';
import ContactList from './ContactList';
import Filter from './Filter';
import { Section } from './App.styled';

export function App() {
  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
}
