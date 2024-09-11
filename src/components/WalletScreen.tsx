import React, { useState, useEffect } from 'react';
import { initWallet, walletDeposit } from '../services/tbDEXClient';

const WalletScreen = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const setup = async () => {
      const { client } = await initWallet();
      setClient(client);
    };
    setup();
  }, []);

  const handleDeposit = async (walletAddress, amount) => {
    if (client) {
      const result = await walletDeposit(client, walletAddress, amount);
      console.log('Deposit Result:', result);
    }
  };

  return (
    <View>
      <TextInput placeholder="Wallet Address" />
      <Button onPress={() => handleDeposit('walletAddressHere', 100)} title="Deposit" />
    </View>
  );
};

export default WalletScreen;
