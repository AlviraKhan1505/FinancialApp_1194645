// In screens/Summary.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';

const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const highestTransaction = transactions.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
  const lowestTransaction = transactions.reduce((prev, current) => (prev.amount < current.amount ? prev : current));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.summaryText}>Number of Transactions: {totalTransactions}</Text>
      <Text style={styles.summaryText}>Total Amount: ${totalAmount}</Text>
      <Text style={styles.summaryText}>Highest Transaction: {highestTransaction.name} (${highestTransaction.amount})</Text>
      <Text style={styles.summaryText}>Lowest Transaction: {lowestTransaction.name} (${lowestTransaction.amount})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default Summary;
