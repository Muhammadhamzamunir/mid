import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import useBitcoinData from './useBitcoinData';

const Login = () => {
  const bitcoinData = useBitcoinData();

  if (!bitcoinData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { time, disclaimer, chartName, bpi } = bitcoinData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bitcoin Price Details</Text>
      <View style={styles.detail}>
        <Text style={styles.label}>Last Updated:</Text>
        <Text>{time.updated}</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.label}>Chart Name:</Text>
        <Text>{chartName}</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.label}>Disclaimer:</Text>
        <Text>{disclaimer}</Text>
      </View>
      <Text style={styles.subtitle}>Bitcoin Price Index (BPI):</Text>
      <FlatList
        data={Object.entries(bpi)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={styles.currencyDetail}>
            <Text style={styles.currency}>{item[0]}</Text>
            <Text style={styles.rate}>
              {item[1].description}: {item[1].symbol} {item[1].rate}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  currencyDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  currency: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 16,
  },
});
