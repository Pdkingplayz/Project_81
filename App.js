import TabNavigator from './navigation/TabNavigator'
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <TabNavigator/>
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
