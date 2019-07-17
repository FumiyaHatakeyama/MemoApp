import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoListScreen from './src/screens/MemoListScreen';
import Appbar from './src/components/Appbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListScreen />

    </View>
  );
}
