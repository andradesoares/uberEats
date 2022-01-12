import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItems({ navigation, data }) {
  return (
    <>
      {data.map((restaurant) => {
        return (
          <TouchableOpacity
            activeOpacity={1}
            key={restaurant.id}
            onPress={() =>
              navigation.navigate('RestaurantScreen', {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.reviews_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })
            }
          >
            <View style={styles.container}>
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
}

const RestaurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.icon}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({ name, waitTime, rating }) => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.infoName}>{name}</Text>
      <Text style={styles.infoWait}>30-45 minutes</Text>
    </View>
    <View style={styles.infoRating}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 6,
    backgroundColor: 'white',
  },
  item: {
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 180,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  infoName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoWait: {
    fontSize: 13,
    color: 'grey',
  },
  infoRating: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    backgroundColor: '#eee',
    borderRadius: 15,
  },
});
