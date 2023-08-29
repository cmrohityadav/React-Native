import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View style={styles.headingText}>
      <Text>ElevatedCard</Text>
      <ScrollView  horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
               Tap 
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
               me
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
               to
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
               to 
            </Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>
                😀
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        margin:8,
        borderRadius:4,

        


    },
    cardElevated:{
        backgroundColor:'#cad5e2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#ef5354'

    },
    container:{
        
    }
    ,


})