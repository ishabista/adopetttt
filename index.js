// Import necessary modules from React Native
import { AppRegistry } from 'react-native';
// Import the main App component
import App from './app.js'; // Ensure App.tsx is correctly named and at the root level
// Import the app name from app.json
import { name as petadoption } from './app.json';

// Register the main App component with AppRegistry
AppRegistry.registerComponent(petadoption, () => App);
