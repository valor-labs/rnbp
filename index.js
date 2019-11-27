import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import * as React from 'react';
import Main from './src/App';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => Main);
