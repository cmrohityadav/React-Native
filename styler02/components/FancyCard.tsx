import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>
        Trending
         Places
      </Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
            uri:'https://www.thetoptours.com/wp-content/uploads/marine-drive-1-768x512.jpg',


        }} style={styles.cardImage}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Marine Drive</Text>
        <Text style={styles.cardLabel}>Marine lines, Mumbai</Text>
        <Text style={styles.cardDiscription}>Marine Drive is a 3 kilometre-long Promenade along the Netaji Subhash Chandra Bose Road in Mumbai, India. The road and promenade were constructed by Pallonji Mistry. It is a 'C'-shaped six-lane concrete road along the coast of a natural bay</Text>
        <Text style={styles.cardFooter}>10 mins away</Text>

        </View>

        
      </View>

      

    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8,
      color:'#000000',



    },
    card:{
      width:350,
      height:360,
      borderRadius:6,
      marginVertical:12,
      marginHorizontal:16,
      

    },
    cardElevated:{
      backgroundColor:'#ffffff',
      color:'#000000',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1
      }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,


    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:12,

    },
    cardDiscription:{

      color:'#242B2e',
      fontSize:12,
      marginBottom:12,
      marginTop:6,



    },
    cardFooter:{
      color:'#000000',

    },
    cardTitle:{
      color:'#000000',
      fontSize:22,
      fontWeight:'bold',
      marginBottom:4,
    },
    cardLabel:{
      color:'#000000',
      fontSize:16,
      marginBottom:6,

    },

})