import axios from 'axios';

axios.defaults.baseURL =
  'https://64512e9be1f6f1bb22aa663b.mockapi.io/phonebook';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);

  return data.id;
};
