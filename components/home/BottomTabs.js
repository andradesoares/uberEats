import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = ({ icon, text }) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5 name={icon} size={18} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    marginHorizontal: 12,
    justifyContent: 'space-between',
  },
  icon: {
    marginBottom: 3,
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
  },
});
