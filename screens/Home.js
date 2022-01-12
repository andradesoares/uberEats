import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItems from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import useResults from '../hooks/useResults';

export default function Home({ navigation }) {
  const [location, setLocation] = useState('Hollywood');
  const [activeTab, setActiveTab] = useState('Delivery');
  const [data, errorMessage, searchApi] = useResults();

  useEffect(() => {
    searchApi(location, activeTab);
  }, [location, activeTab]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#eee" style={styles.statusBar} />
        <View style={styles.container}>
          <View style={styles.tabs}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar
              onTermChange={(newTerm) => setLocation(newTerm)}
              onTermSubmit={() => searchApi(location, activeTab)}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems data={data} navigation={navigation} />
          </ScrollView>
          <Divider width={1} orientation="horizontal" />
          <BottomTabs />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  tabs: {
    backgroundColor: 'white',
    padding: 15,
  },
});
