import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './Pages/MainPage'
import AboutPage from './Pages/AboutPage'
import DetailPage from './Pages/DetailPage';

export default function App() {
  return (
    <MainPage/>
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