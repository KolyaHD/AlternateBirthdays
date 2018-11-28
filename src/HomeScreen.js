import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import moment from 'moment';
import DateSelect from './DateSelect';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
    };
  }

  render() {
    const { navigation } = this.props;
    const { date } = this.state;
    const user = navigation.getParam('user');
    
    return (
      <View style={styles.container}>
        <Text>{user}</Text>
        <Text>{date.toISOString()}</Text>
        <DateSelect onSelect={date => {
          this.setState({ date: moment(date.dateString, 'YYYY-MM-DD') }); console.log(date);
        }} />
        <Button
          onPress={() => navigation.toggleDrawer()}
          title="Open Drawer"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;