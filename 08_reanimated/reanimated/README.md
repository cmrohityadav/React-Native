# Re-animated

##  Installtion
- 3 steps
```bash
npm install react-native-reanimated

```

- Add react-native-reanimated/plugin plugin to your babel.config.js.
```bash
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
- **react-native-reanimated/plugin has to be listed last **


- Wrap metro config with reanimated wrapper (recommended)
- Wrap your existing Metro configuration in the metro.config.js file with the wrapWithReanimatedMetroConfig function.
```js
// metro.config.js
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = {
  // Your existing Metro configuration options
};

module.exports = wrapWithReanimatedMetroConfig(config);
```

```js
// after changes
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const baseConfig = getDefaultConfig(__dirname);
const customConfig = {}; // Add any custom overrides here if needed

const mergedConfig = mergeConfig(baseConfig, customConfig);

module.exports = wrapWithReanimatedMetroConfig(mergedConfig);

```

```bash
npm start -- --reset-cache
```



# Vector icon

## installtion
``` bash
npm install --save react-native-vector-icons
```

## setup
- To make font management smoother on Android, use this method:

Edit -> android/app/build.gradle (NOT android/build.gradle) and add:
```bash
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

```