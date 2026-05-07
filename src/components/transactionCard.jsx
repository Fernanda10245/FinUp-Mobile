import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionCard({ title, amount, date, type }) {
  return (
    <View style={styles.card}>
      <View style={styles.leftCol}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      
      <View style={styles.rightCol}>
        <Text style={[styles.amount, type === 'income' ? styles.income : styles.expense]}>
          {type === 'income' ? '+' : '-'} R$ {amount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // O equivalente ao "flex items-center"
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16, // "p-4" no Tailwind
    backgroundColor: '#ffffff', // "bg-white"
    borderRadius: 12, // "rounded-xl"
    marginBottom: 12, // "mb-3"
    borderColor: '#f3f4f6', // "border-gray-100"
    borderWidth: 1,
    
    // O equivalente ao "shadow-sm" precisa de configurações separadas para iOS e Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2, // Sombra específica para dispositivos Android
  },
  leftCol: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16, // "text-base"
    fontWeight: '600', // "font-semibold"
    color: '#111827', // "text-gray-900"
    marginBottom: 4,
  },
  date: {
    fontSize: 14, // "text-sm"
    color: '#6b7280', // "text-gray-500"
  },
  rightCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontSize: 18, // "text-lg"
    fontWeight: 'bold', // "font-bold"
  },
  income: {
    color: '#16a34a', // "text-green-600"
  },
  expense: {
    color: '#dc2626', // "text-red-600"
  },
});