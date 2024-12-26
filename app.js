import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing components for the navigation
const Stack = createStackNavigator();

const SellingPage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Selling Page</Text>
  </View>
);

const AdoptionPage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Adoption Page</Text>
  </View>
);

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Selling">
        <Stack.Screen name="Selling" component={SellingPage} />
        <Stack.Screen name="Adoption" component={AdoptionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styling for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
