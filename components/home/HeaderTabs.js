import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <View style={styles.tabs}>
      <HeaderButton text="Delivery" activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderButton text="Pickup" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const HeaderButton = ({ text, setActiveTab, activeTab }) => {
  return (
    <TouchableOpacity
      style={[styles.buttons, activeTab === text ? styles.selectedButton : styles.unselectedButton]}
      onPress={() => setActiveTab(text)}
    >
      <Text
        style={[
          styles.buttonText,
          activeTab === text ? styles.selectedButtonText : styles.unselectedButtonText,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  buttons: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  selectedButton: {
    backgroundColor: 'black',
  },
  unselectedButton: {
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '900',
  },
  selectedButtonText: {
    color: 'white',
  },
  unselectedButtonText: {
    color: 'black',
  },
});
