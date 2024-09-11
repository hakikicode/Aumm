import { TbdexHttpClient, Rfq, Quote, Order, OrderStatus } from '@tbdex/http-client';
import { VerifiableCredential, PresentationExchange } from '@web5/credentials';

const client = new TbdexHttpClient();

export const requestQuote = async (currency: string, amount: number) => {
  try {
    const rfq = new Rfq({ currency, amount });
    const quote: Quote = await client.requestQuote(rfq);
    return quote;
  } catch (error) {
    console.error('Error requesting quote:', error);
  }
};

export const createOrder = async (quoteId: string) => {
  try {
    const order: Order = await client.createOrder({ quoteId });
    return order;
  } catch (error) {
    console.error('Error creating order:', error);
  }
};

export const checkOrderStatus = async (orderId: string) => {
  try {
    const status: OrderStatus = await client.getOrderStatus({ orderId });
    return status;
  } catch (error) {
    console.error('Error checking order status:', error);
  }
};
