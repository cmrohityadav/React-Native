import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ScrollViewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Scroll View Component</Text>
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
    </View>
  );
};

export default ScrollViewComponent;

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
        textDecorationStyle:'double',
    },
    scrollView:{
        height:200,
        backgroundColor:'green',
    },
    scrollViewContent:{
        padding:20,
        // backgroundColor:'orange',

    },
    box:{
       height:40,
       marginBottom:10,
       backgroundColor: '#3498db',
       justifyContent:'center',
       alignContent:'center',
    },
    boxText:{
        color:'#ffffff',
        fontWeight:'bold',
    },


});
