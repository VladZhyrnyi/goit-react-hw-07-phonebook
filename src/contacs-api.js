import axios from 'axios';

axios.defaults.baseURL =
  'https://64512e9be1f6f1bb22aa663b.mockapi.io/phonebook';

export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async (data) => {
  axios.post('/contacts', data)
}

export const deleteContact = async (id) => {
  axios.delete(`contacts/${id}`)
}