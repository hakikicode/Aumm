import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const P2PTransaction = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = () => {
    // Logic to initiate P2P transaction using tbDEX API
  };

  return (
    <View>
      <TextInput placeholder="Recipient Address" value={recipient} onChangeText={setRecipient} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Button title="Send" onPress={handleTransfer} />
    </View>
  );
};

export default P2PTransaction;