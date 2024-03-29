import TabNavigator from './navigation/TabNavigator'
import DrawerNavigator from './navigation/DrawerNavigator';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
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
