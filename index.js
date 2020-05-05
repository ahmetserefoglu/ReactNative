/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import App from './Navigator/Router';
//import App from './Animation/Animation4';
//import App from './Network/index';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
