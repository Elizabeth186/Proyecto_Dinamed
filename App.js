import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Carrito from './Screens/Carrito';
import Historial from './Screens/Historial';
import DetallesProducto from './Screens/DetallesProducto';
import Accesos from './Screens/Accesos';



export default function App() {
  return (
<Home></Home>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
