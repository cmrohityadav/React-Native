
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
- A component for displaying text



## Image
- A component for displaying images.
- below syntax just provide src just like html
```jsx
      <Image style={styles.image} src="https://avatars.githubusercontent.com/u/100376340?v=4" />
```
```jsx
      <Image style={styles.image} source={{uri:'https://th.bing.com/th/id/OIP.EEk3SQRrEku6QN3IU5gbXAHaDB?rs=1&pid=ImgDetMain'}} />


```
- Local Image
```jsx
      <Image source={require('./assets/avatar_1692959594.png')} />

```


## Button
- A basic button component for handling touches that should render nicely on any platform.
- we cannot style it
```jsx
      <Button 
      title="Click Me" 
      color={'orange'} 
      onPress={()=> 
      Alert.alert('This is title Rohit','Hi....Rohit This is message')}/>

```





