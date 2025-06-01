# Navigation
- Install the required packages in your React Native project
- Mandotroy
```bash
npm install @react-navigation/native
```
```bash
npm install react-native-screens react-native-safe-area-context
```
## Stack Navigator
- Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack


```bash
npm install @react-navigation/stack
```
```bash
npm install react-native-gesture-handler
```
## Bottom Tabs Navigator
- A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused

```bash
npm install @react-navigation/bottom-tabs
```
## Drawer Navigator
- Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures
```bash
npm install @react-navigation/drawer
```
```bash
npm install react-native-gesture-handler react-native-reanimated
```
- Add react-native-reanimated/plugin plugin to your babel.config.js
```js
module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```
```bash

```
```bash

```
