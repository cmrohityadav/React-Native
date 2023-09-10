import { Image, Linking, StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {

    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer} >
            <Text style={styles.headerText}>
            Cricket fans of Pakistan will be touched by the victory of India!
            </Text>

        </View>

        <Image 
        source={{
            uri:'https://pbs.twimg.com/media/EsFtKFTUcAIv4gI?format=jpg&name=4096x4096'
        }}
        style={styles.cardImage}
        />
       
        <View   style={styles.bodyContainer}>

        <Text numberOfLines={3}>
        January 19 is the historical date whose importance is not less than the date of April 02, 2011 World Cup victory. India has created history by defeating Australia in Australia on this day. After this win, the Indian team has returned to the country. But the celebration has not stopped.


        </Text>
        </View>

        <View   style={styles.footerContainer}>
        <TouchableOpacity
        onPress={()=>openWebsite('https://cmrohityadavvdata.blogspot.com/2021/01/cricket-fans-of-pakistan-will-be.html')}
        >
            <Text style={styles.socialLinks} >
                Read more
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => openWebsite('https://www.instagram.com/cmrohityadav_')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})