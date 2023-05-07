import axios from 'axios';

axios.defaults.baseURL =
  'https://64512e9be1f6f1bb22aa663b.mockapi.io/phonebook';

export const getContacts = () => {
    return axios.get('/contacts');
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);

  return data.id;
};






// export const getContacts = async () => {
//   try {
//     const response = await axios.get('/contacts');

//     // if(!response.ok) {
//     //   throw new Error(response.data.message)
//     // }
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//     return error;
//   }
//   // axios
//   //   .get('/contacts')
//   //   .then(res => {
//   //     console.log(res.data);
//   //     return res.data;
//   //   })
//   //   .catch(error => console.log(error));
// };
