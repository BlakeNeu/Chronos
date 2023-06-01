import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from './Views/Navigation/Navigation';
import Registration from './Views/Registration/Registration';


const App = () => {
  return (
    <Registration />
    // <Navigation />
    // <Text>sdfasdfasdf</Text>
  );
}

export default App;