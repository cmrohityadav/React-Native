
### need to uninstall
npm uninstall -g react-native-cli @react-native-community/cli

### Install react CLI
npx @react-native-community/cli@latest init AwesomeProject

### To start METRO Bundler Server
- Similar to Vite in ReactJs
```bash
npm start

```

### To Start Project in Android
```bash
npm run android

```



# Core Components
## View
- The most fundamental component for building a UI
- Like div in html
- below used for style just like inline css
```jsx
const styles = StyleSheet.create({
  container: {
    marginBottom:20,
  },
  boxContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
  },
  redBox:{
    width:50,
    height:50,
    backgroundColor:'red',
  },
  blueBox:{
     width:50,
    height:50,
    backgroundColor:'blue',
  },
  greenBox:{
     width:50,
    height:50,
    backgroundColor:'green',
  },
});
```
## Text
- A component for displaying text.
