import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Platforms = () => {
    return (
        <View>
            <Text>Platforms</Text>
            <Text> Platform : {Platform.OS}</Text>
            <Text> Version: {Platform.Version}</Text>
             
             {
                Platform.OS=="ios"?
                <View style={styles.ios}></View>:  <View style={styles.android}></View>
             }

             <Text style={styles.text}>design for different plaftform</Text>
            
        </View>
    )
}

export default Platforms

const styles = StyleSheet.create({
ios:{
    height:50,
    width:40,
    backgroundColor:"red"
},
android:{
    height:50,
    width:40,
    backgroundColor:"blue"
},
text:{
    color:Platform.OS=="ios"?"red":"green"
}
})