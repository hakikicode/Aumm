import React from 'react';
import { View, Text } from 'react-native';
import { demoData } from './demoData';

const ExchangeRates = () => {
  return (
    <View>
      <Text>CEX Rates:</Text>
      {demoData.cex.map((rate, index) => (
        <Text key={index}>{rate.pair}: {rate.price}</Text>
      ))}

      <Text>DEX Rates:</Text>
      {demoData.dex.map((rate, index) => (
        <Text key={index}>{rate.pair}: {rate.price}</Text>
      ))}
    </View>
  );
};

export default ExchangeRates;
