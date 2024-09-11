import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { requestQuote, createOrder } from '../services/tbdexService';
import { VerifiableCredential, PresentationExchange } from '@web5/credentials';

// verify a credential
export const verifyCredential = async (credential: VerifiableCredential) => {
  const exchange = new PresentationExchange();
  const verificationResult = await exchange.verifyPresentation(credential);
  return verificationResult;
};

const P2PTransaction = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [quote, setQuote] = useState(null);
  const [orderId, setOrderId] = useState('');

  const handleRequestQuote = async () => {
    const quote = await requestQuote('NGCoin', amount);
    setQuote(quote);
  };

  const handleCreateOrder = async () => {
    const order = await createOrder(quote.id);
    setOrderId(order.id);
  };

  return (
    <View>
      <TextInput
        placeholder="Recipient Address"
        value={recipient}
        onChangeText={setRecipient}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Request Quote" onPress={handleRequestQuote} />
      {quote && (
        <View>
          <Text>Quote ID: {quote.id}</Text>
          <Button title="Create Order" onPress={handleCreateOrder} />
        </View>
      )}
      {orderId && <Text>Order ID: {orderId}</Text>}
    </View>
  );
};

export default P2PTransaction;
