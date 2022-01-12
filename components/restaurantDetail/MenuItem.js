import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { selectItem } from '../../redux/actions/cart';

export default function MenuItem({ foods, restaurantName }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.CartReducer);

  const checkboxValue = items.selectedItems.checkboxValue ? false : true;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food) => (
        <View key={food.title} style={styles.container}>
          <CheckBox
            checked={items.selectedItems.checkboxValue}
            checkedColor="green"
            onPress={() => dispatch(selectItem(food, restaurantName, checkboxValue))}
          />
          <View style={styles.texts}>
            <Text style={styles.title}>{food.title}</Text>
            <Text>{food.description}</Text>
            <Text>{food.price}</Text>
          </View>
          <Image source={{ uri: food.image }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 15,
  },
  texts: {
    width: '55%',
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  image: {
    height: 90,
    width: '25%',
    borderRadius: 8,
  },
});
