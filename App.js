import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionCard from './src/components/TransactionCard';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Testando uma Receita */}
      <TransactionCard 
        title="Desenvolvimento Web" 
        date="07 de Maio de 2026" 
        amount="3500.00" 
        type="income" 
      />
      
      {/* Testando uma Despesa */}
      <TransactionCard 
        title="Assinatura Figma" 
        date="05 de Maio de 2026" 
        amount="75.00" 
        type="expense" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb', // Fundo cinza bem clarinho para dar contraste
    padding: 20,
    paddingTop: 60, // Dá um espaço para não bater na barra de status do celular
  },
});