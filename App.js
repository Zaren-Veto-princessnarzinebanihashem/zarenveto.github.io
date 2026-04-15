import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './Header'; 
import UserProfile from './UserProfile'; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <UserProfile />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
