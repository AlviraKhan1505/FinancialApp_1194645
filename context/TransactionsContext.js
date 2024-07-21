import React, { createContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: '1', name: 'Groceries at Walmart', amount: 50, date: '2024-07-01', address: '123 Main St' },
    { id: '2', name: 'Rent', amount: 500, date: '2024-07-03', address: '456 Oak Ave' },
    { id: '3', name: 'Pizza at Pizza Hut', amount: 20, date: '2024-07-05', address: '789 Pine Rd' },
    { id: '4', name: 'Shoes at Nike', amount: 100, date: '2024-07-07', address: '101 Maple St' },
    { id: '5', name: 'Coffee at Tim Hortons', amount: 5, date: '2024-07-09', address: '202 Elm St' },
  ]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
