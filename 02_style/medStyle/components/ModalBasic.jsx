import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ModalBasic = () => {
    const [showModal, setshowModal] = useState(false)
    return (
        <>
            

            <View style={styles.main}>
            <Modal
            transparent={true}
            visible={showModal}
            animationType='fade'
            >
                <View style={styles.modalOuterView}>
                    <View style={styles.modalInnerView}>
                        <Text>
                            Hello Rohit, full stack developer
                        </Text>
                        <Button title='close modal'onPress={()=>setshowModal(false)}/>
                    </View>
                </View>
            </Modal>

                <View style={styles.btnView}>

                    <Button title='Open modal' onPress={()=>setshowModal(true)}/>

                </View>

            </View>
        </>
    )
}

export default ModalBasic

const styles = StyleSheet.create({
    main: {
        flex: 1,
        
    },
    btnView: {
        flex: 1,
       justifyContent:'flex-end'

    },
    modalInnerView:{
       backgroundColor:'skyblue',
       padding:40,
       borderRadius:20,
       shadowColor:"black",
       elevation:10,


    },
    modalOuterView:{
 flex:1,
        justifyContent:'center',
        alignItems:'center'
    },


})