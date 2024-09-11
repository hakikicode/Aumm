import { createDID } from 'web5/dids';
import { createTBDexClient } from 'tbdex/client';

export const initWallet = async () => {
  const myDID = await createDID();
  const client = createTBDexClient(myDID);
  return { myDID, client };
};

export const sendP2PTransaction = async (client, recipientDID, amount) => {
  return await client.sendP2PTransaction({
    senderDID: client.myDID,
    recipientDID,
    amount,
  });
};

export const walletDeposit = async (client, walletAddress, amount) => {
  return await client.walletDeposit({ address: walletAddress, amount });
};
