import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Text, TextInput, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../db/firebase';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);

function Iniciar(){


  const [email, setemail] = useState('');
 const [password, setpassword] =  useState('');

  const handleSignIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
    console.log('Sesion Iniciada!')
    const user = userCredential.user;
    console.log(user)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return(

<View style={styles.container}>
 <SafeAreaView>
        <Image
        style={styles.imagen}
        source={require("../Images/Logo.png")} />
        <Text  style={styles.textstyle}>Correo</Text>
        <TextInput  onChangeText={(text) => setemail(text)} style={styles.inputs} placeholder='Ejemplo@gmail.com'></TextInput>

        <Text  style={styles.textstyle}>Contraseña</Text>
        <TextInput   onChangeText={(text) => setpassword(text)} style={styles.inputs} placeholder='*********'></TextInput>
       
       
        <LinearGradient colors={['#368DD9','#082359']} start ={{ x : 1, y : 0 }} style={styles.btnstyle}>
       <TouchableOpacity onPress={handleSignIn}><Text style={styles.textbtn}>Iniciar</Text></TouchableOpacity>

       </LinearGradient>
     
      <Text style={styles.txtnotengo}>¿No posees una cuenta?</Text>
      <TouchableOpacity  style={styles.btnregistro}><Text  style={styles.txt}> Regristrarme</Text></TouchableOpacity>
      

        </SafeAreaView>
    </View>
  )
}

function Regristrarme(){
  

  const [email, setemail] = React.useState('');
 const [password, setpassword] =  React.useState('');

  const handleCreateAccount= ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
    console.log('Cuenta creada!')
    const user = userCredential.user;
    console.log(user)})
    .catch(error =>{
      console.log(error)
    })
  }
  return(
    <View style={styles.container}>
 <SafeAreaView>
        <Image
        style={styles.imagen}
        source={require("../Images/Logo.png")} />
        <Text  style={styles.textstyle}>Correo</Text>
        <TextInput onChangeText={(text) => setemail(text)}  style={styles.inputs} placeholder='Ejemplo@gmail.com'></TextInput>

        <Text  style={styles.textstyle}>Contraseña</Text>
        <TextInput onChangeText={(text) => setpassword(text)} style={styles.inputs} placeholder='*********'></TextInput>
       
        <Text  style={styles.textstyle}>Repita su Contraseña</Text>
        
        <TextInput   style={styles.inputs} placeholder='*********'></TextInput>


        <LinearGradient colors={['#368DD9','#082359']} start ={{ x : 1, y : 0 }} style={styles.btnstyle}>
       <TouchableOpacity onPress={handleCreateAccount}><Text style={styles.textbtn}>Registrarme</Text></TouchableOpacity>

       </LinearGradient>
     
        </SafeAreaView>
    </View>
  )
}

export default function Accesos() {
  return (
    
   <Iniciar></Iniciar>
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
  },
  txt:{
color:'#368DD9',
fontWeight:'bold',
fontSize:16,
padding:20,
textAlign:'center'
  },
  txtnotengo:{
    textAlign: 'center',
    fontSize: 14,
    marginTop: '5%',
  }
  
});