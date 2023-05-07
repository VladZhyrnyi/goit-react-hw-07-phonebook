import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64512e9be1f6f1bb22aa663b.mockapi.io/phonebook',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: body => ({ url: '/contacts', method: 'POST', body }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
