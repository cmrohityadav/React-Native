import {StyleSheet, Text, View,TextInput, Button,Linking,TouchableOpacity } from 'react-native';
import React from 'react';


const Signup = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    // main container
    <View style={styles.mainContainer}>

      {/* sub Container */}
      <View style={styles.subContainer}>
        
        <View style={styles.subContainerBox}> 
      
        <View style={styles.titleBox}>
                <View style={styles.mainTitle}>
         
                     <Text style={styles.mainTitleTxt}>EconoVR</Text>
          
                </View>

                <View style={styles.subTitle}>

                    <Text style={styles.subTitleTxt}>Sign Up to create an account</Text>
                 
                </View>
        </View>

        {/* form */}
        <View  style={styles.mainFormBox}>
                <TextInput
                placeholder='Username'
                
                />
                <TextInput
                placeholder='Email Address'
                
                />
                <TextInput
                placeholder='Password'
                
                />


            {/* submit button */}
            <View style={styles.submitBox}>
             <Button 
             color={"#141414"}
                title='Submit'/>
                
        
           <Text style={styles.loginText}>Already have an account? 
           
           <Text style={styles.login}>Login</Text>

           </Text>
           
            
            </View>
            
        </View>

       




        </View>
        
       
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
    subContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:600,
        marginVertical:20,
        marginTop:15,
        // backgroundColor:'steelblue',
        marginHorizontal:40,
        elevation:5,
        borderRadius:10,
        


    },
    mainContainer:{
        flex:1,
        justifyContent:'center',
        height:'100%',
        marginTop:50
    },
    title:{},
    subContainerBox:{
        borderColor:'red',
        // backgroundColor:'red',
        height:550,
        width:250,
        marginTop:5,
        
    },
    titleBox:{
        flex:1,
        alignItems:'center'

    },
    mainTitle:{
        
    },
    subTitle:{},
    mainTitleTxt:{
        fontWeight:'bold',
        fontSize:40,
        
    },
    subTitleTxt:{
        fontSize:12,

    },
    mainFormBox:{
        // backgroundColor:'green',
        height:150,
        marginBottom:250,
        paddingLeft:10,
        flex:1


    },
    submitBox:{
        padding:10,
        paddingRight:4,
        marginRight:5,
    
        borderRadius:20,
        
        
    },
    loginText:{
        paddingLeft:8,
        marginVertical:5,

        
    },
    loginWord:{
        fontWeight:'bold',
        
        
    },
    login:{
        fontWeight:'bold',
        
    }
   







});
