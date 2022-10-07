import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Iniciarpropietario from './Screens propietario/Iniciopropietario';
import Home from './Screens/Home';
import Iniciar from './Screens/Inicio';
import Registro from './Screens/Registro';
import Carrito from './Screens/Carrito';
import Historial from './Screens/Historial';
import DetallesProducto from './Screens/DetallesProducto';



export default function App() {
  return (
  <DetallesProducto></DetallesProducto>
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
