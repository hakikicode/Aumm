import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { initWallet, walletDeposit } from '../services/tbDEXClient';

const WalletScreen = () => {
  const [client, setClient] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const setup = async () => {
      const { client } = await initWallet();
      setClient(client);
    };
    setup();
  }, []);

  const handleDeposit = async () => {
    if (client && walletAddress && amount) {
      const result = await walletDeposit(client, walletAddress, parseFloat(amount));
      console.log('Deposit Result:', result);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
      />
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button onPress={handleDeposit} title="Deposit" />
    </View>
  );
};

export default WalletScreen;
