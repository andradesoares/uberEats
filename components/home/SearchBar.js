import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({ onTermChange, onTermSubmit }) {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{ key: 'AIzaSyCtcKAac6DObiiga5eDpUmXbNwNU64sUa8' }}
        placeholder="Search"
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          onTermChange(city);
          onTermSubmit();
        }}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '600',
            fontSize: 18,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons style={styles.leftIcon} name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rigthIcon}>
            <AntDesign name="clockcircle" size={11} style={styles.clock} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  leftIcon: {
    marginLeft: 10,
  },
  rigthIcon: {
    flexDirection: 'row',
    marginRight: 10,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
  clock: {
    marginRight: 6,
  },
});
