import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Iniciar() {
  return (
    <View style={styles.container}>
        <Text>Correo</Text>
        <TextInput placeholder='Ejemplo@gmail.com'></TextInput>

        <Text>Contraseña</Text>
        <TextInput placeholder='*********'></TextInput>
       
        <Text>Repita su Contraseña</Text>
        <TextInput placeholder='*********'></TextInput>
       
       
        
    </View>
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