import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const ModalScreenDemo = () => {
    const [showModal,setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ModalScreenDemo</Text>
    <Button title="open modal"  onPress={()=>setShowModal(true)}/>
    <Modal
    animationType="slide"
    visible={showModal}
    onRequestClose={()=>setShowModal(false)}
    transparent={true}
    >
        <View style={styles.centerView}>
            <View style={styles.modalView}>
                <Text>Modal Component</Text>
                <Button title="Close modal" onPress={()=>setShowModal(false)}/>
            </View>

        </View>
    </Modal>
    </View>
  );
};

export default ModalScreenDemo;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerText:{
        fontWeight:'bold',
    },
    centerView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#E9F5BE',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView:{
        backgroundColor:'white',
        borderRadius:20,
        padding:35,
        shadowColor:'#000',
        alignItems:'center',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    },

});
