import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>
                Red
            </Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>
              green
            </Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>
                Blue
            </Text>
        </View>
        
        <View style={[styles.card,styles.cardThree]}>
            <Text>
                Blue
            </Text>
        </View>
        
         
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        

        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    cardOne:{
        backgroundColor:'#ef5354'
    },
    cardTwo:{
        backgroundColor:'#50dbb4'
    },
    cardThree:{
        backgroundColor:'#5da3fa'
    },
})