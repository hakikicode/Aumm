import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WalletScreen from '../src/components/WalletScreen';
import P2PTransaction from '../src/components/P2PTransaction';
import { TbdexHttpClient, Rfq, Quote, Order, OrderStatus, Close, Message } from '@tbdex/http-client';
import { VerifiableCredential, PresentationExchange } from '@web5/credentials';
import ExchangeRates from '../src/components/ExchangeRates';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="P2P" component={P2PTransaction} />
        <Stack.Screen name="ExchangeRates" component={ExchangeRates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;