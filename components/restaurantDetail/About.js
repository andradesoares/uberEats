import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function About({ params }) {
  const categories = params.categories.map((cat) => cat.title).join(' . ');
  const description = `${categories} ${params.price ? ' . ' + params.price : ''}`;
  return (
    <View style={styles.container}>
      <Image source={{ uri: params.image }} style={styles.image} />
      <Text style={styles.text}>{params.name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 180,
  },
  text: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 10,
    marginHorizontal: 15,
  },
});
