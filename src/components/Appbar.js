import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    paddingTop: 50,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    zIndex: 10,
  },
  appbarTitle: {
    color: 'white',
    fontSize: 24,
  },
});

class Appbar extends React.Component {
  render() {
    return(
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMOT</Text>
        </View>
      </View>
    );
  }
}

export default Appbar;
