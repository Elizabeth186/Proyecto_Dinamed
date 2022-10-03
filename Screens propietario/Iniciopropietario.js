import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, TextInput, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Iniciarpropietario() {
  return (
    
    <View style={styles.container}>
 <SafeAreaView>
        <Image
        style={styles.imagen}
        source={require("../Images/Logo.png")} />
        <Text  style={styles.textstyle}>Correo</Text>
        <TextInput  style={styles.inputs} placeholder='Ejemplo@gmail.com'></TextInput>

        <Text  style={styles.textstyle}>Contraseña</Text>
        <TextInput  style={styles.inputs} placeholder='*********'></TextInput>
       
       
        <LinearGradient colors={['#368DD9','#082359']} start ={{ x : 1, y : 0 }} style={styles.btnstyle}>
       <TouchableOpacity><Text style={styles.textbtn}>Iniciar</Text></TouchableOpacity>

       </LinearGradient>
     
        </SafeAreaView>
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
  btnstyle: {
   borderRadius: 10,
   width: windowWidth/1.5,
  height: windowHeight/15,
  elevation: 5,
  alignSelf:'center',
  marginTop: '15%',
  marginBottom: '10%'
  },
  imagen:{
    width: windowWidth/4.5,
    height: windowHeight/10,
    alignSelf:'center',
    top: -60
  },
  inputs:{
    alignSelf:'center',
    marginTop: '2%',
    textAlign:'center',
  borderTopColor: 'black',
  borderTopWidth: 0.5,
  width: windowWidth/1.5,
  height: windowHeight/15,
  elevation: 5,
  backgroundColor: 'white',
  borderBottomRightRadius: 10,
  borderTopLeftRadius:10
  },
  textstyle:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: '5%',
  },
  textbtn:{
    textAlign: 'center',
    fontSize: 18,
    color:'white',
    padding: 11
  }
  
});