import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ViewCart() {
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    zIndex: 999,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 13,
    width: 300,
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
