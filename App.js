import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Iniciarpropietario from './Screens propietario/Iniciopropietario';
import Home from './Screens/Home';
import Iniciar from './Screens/Inicio';
import Registro from './Screens/Registro';

export default function App() {
  return (
  <Iniciarpropietario></Iniciarpropietario>
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
