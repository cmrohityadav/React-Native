
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


## TextInput
- A foundational component for inputting text into the app via a keyboard. 
- Props provide configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different keyboard types, such as a numeric keypad
```jsx
 <TextInput style={styles.input}
        value={textValue}
        onChangeText={setTextValue}
        placeholder='user type here'
  />

```

## ScrollView

- ScrollView is a core component in React Native used for scrollable content.

- It renders all child components at once, which may lead to performance issues with long lists (use FlatList instead for large data sets).

- Requires bounded height to work correctly; unbounded parents or missing {flex: 1} may cause layout issues.

- Use ScrollView for small, simple content.

- Use FlatList for large lists, as it renders lazily and improves performance.
```jsx
<ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      bounces={true}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={true}
      >
        {
            [...Array(20)].map((_,index)=>(
                <View key={index} style={styles.box}>
                    <Text style={styles.boxText}>
                        {index + 1}
                    </Text>
                </View>
            ))
        }
      </ScrollView>
```

## Layout with Flexbox
-  A component can specify the layout of its children using the Flexbox algorithm. 
- Flexbox is designed to provide a consistent layout on different screen sizes

- Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. 
- The defaults are different, with **flexDirection** defaulting to **column** instead of row, alignContent defaulting to flex-start instead of stretch, flexShrink defaulting to 0 instead of 1, the flex parameter only supporting a single number

### Flex
- flex will define how your items are going to “fill” over the available space along your main axis. Space will be divided according to each element's flex property.

- In the following example, the red, orange, and green views are all children in the container view that has flex: 1 set. 
- The red view uses flex: 1 , the orange view uses flex: 2, and the green view uses flex: 3 .
- 1+2+3 = 6, which means that the red view will get 1/6 of the space, the orange 2/6 of the space, and the green 3/6 of the space.

```jsx
const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

```

## TouchableHighlight

- A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view
- TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View

```jsx
<TouchableHighlight
      onPress={()=> setTouchableHighlightCount(pre=>pre + 1)}
      style={styles.button}
      underlayColor={'#FF0000'}
      >
        <View >
          <Text style={styles.btnText}>TouchableHighlight</Text>
          <Text style={styles.btnText}>TouchableHighlight: {touchableHighlightCount}</Text>
        </View>
</TouchableHighlight>
```

## TouchableOpacity
- A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it
- TouchableOpacity can have multiple children — unlike TouchableHighlight, which strictly requires only one child
```jsx
<TouchableOpacity
      onPress={()=>setOpacityCount(opacityCount + 1)}
      style={styles.button}
      >
        <Text style={styles.btnText}>Touchable Opacity</Text>
        <Text style={styles.btnText}>Touchable count: {opacityCount}</Text>
      </TouchableOpacity>
```



