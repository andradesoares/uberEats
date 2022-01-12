import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';
import { foods } from '../dummy';
import { selectItem } from '../redux/actions/cart';

export default function RestaurantDetail({ route: { params }, navigation }) {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <About params={params} />
      <Divider width={1.8} />

      <View>
        <MenuItem foods={foods} restaurantName={params.name} />
        <Divider width={0.5} orientation="vertical" style={styles.divider} />
      </View>

      <ViewCart navigation={navigation} restaurantName={params.name} />
    </>
  );
}

const styles = StyleSheet.create({
  divider: {
    marginHorizontal: 30,
  },
});
