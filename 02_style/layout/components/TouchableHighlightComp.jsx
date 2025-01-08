import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

const TouchableHighlightComp = () => {
    return (
        <>
            <View>
                <Text>TouchableHighlightComp</Text>
                <View style={styles.main}>

                    <TouchableHighlight>
                        <Text style={[styles.button,{backgroundColor:"blue"}]}>press me</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.main}>

                    <TouchableHighlight>
                        <Text style={[styles.button,{backgroundColor:"green"}]}>Success</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.main}>

                    <TouchableHighlight>
                        <Text style={[styles.button,{backgroundColor:"yellow"}]}>Wait</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </>

    )
}
const styles=StyleSheet.create({
    main:{
        flex:1,

    },
    button:{
        backgroundColor:"gray",
        color:"white",
        fontSize:25,
        textAlign:"center",
        margin:10,
        padding:10,
        borderRadius:20,
        borderColor:"green",
        borderWidth:5,
        shadowColor:"red",
        elevation:15,
        shadowOpacity:1,

        
        



    }
})
export default TouchableHighlightComp