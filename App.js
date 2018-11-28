import React from 'react';
import {
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  SafeAreaView,
} from 'react-navigation';
import HomeScreen from './src/HomeScreen';

const testNames = ['Kim', 'Jim', 'Tim'];

const contentComponent = ({ navigation }) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      {testNames.map(name => <Button onPress={() => {
        navigation.navigate('Home', { user: name });
        navigation.closeDrawer();
      }} title={name} />)}
    </SafeAreaView>
  </ScrollView>
);

const drawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
  contentComponent,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(drawerNavigator);
