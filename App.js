import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Buttons } from './components/Buttons';
import { Logo } from './components/Logo';
import { styles } from './styles';
import { Inputs } from "./components/Inputs"


export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Inputs />
      <Buttons/>
      <StatusBar backgroundColor='#1b384a'/>
    </View>
  );
}


