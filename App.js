import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './Pages/MainPage'
import AboutPage from './Pages/AboutPage'
import DetailPage from './Pages/DetailPage';
import Loading from './Components/Loading';

export default function App() {
  return (
    <MainPage/>
    // <Loading/>
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