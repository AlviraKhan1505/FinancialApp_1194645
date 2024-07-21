import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.amount}>${transaction.amount}</Text>
      <Text style={styles.date}>{transaction.date}</Text>
      <Text style={styles.address}>Address: {transaction.address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    color: 'green',
  },
  date: {
    fontSize: 18,
    color: 'gray',
  },
  address: {
    fontSize: 18,
    color: 'gray',
    marginTop: 8,
  },
});

export default TransactionDetail;
