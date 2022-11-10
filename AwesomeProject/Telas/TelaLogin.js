import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Button, TextInput, } from 'react-native-paper'

const MyComponent = () => {
  const [text, setText] = React.useState("");

  return (
    <View >
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      style={estilos.inputLogin}
      mode="outlined"
    />
    <TextInput
      label="Senha"
      value={text}
      onChangeText={text => setText(text)}
      style={estilos.inputLogin}
      mode="outlined"
    />
    <Button mode="contained" style={estilos.btnEntrar}>Entrar</Button>
    </View>
  );
};

const estilos = StyleSheet.create({
  inputLogin:{
     marginTop: '10px'
  },
  btnEntrar: {
    marginTop: '10px'
  }
})

export default MyComponent;