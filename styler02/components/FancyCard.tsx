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


    },
    card:{},
    cardElevated:{},
    cardImage:{
        height:180,
    },
    cardBody:{

    },
    cardDiscription:{

    },
    cardFooter:{},
    cardTitle:{},
    cardLabel:{},

})