import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

//child components
const CustomInput = forwardRef((props, refParentHand) => {
    const inputRef = useRef()

    // expose methos to perent via refParentHand
    useImperativeHandle(refParentHand, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        clear: () => {
            inputRef.current.clear()
        },
        papaKoYehFunctionDiya:()=>{
            Alert.alert("Hello");
        }
    }))
    return (
        <TextInput ref={inputRef} placeholder='Type Here...' />
    )
})

//Parent
const ForwardRefComp = () => {
    const customInputRef = useRef()
    return (
        <>

            <CustomInput ref={customInputRef} />

            <Button title='Focus Input'
                onPress={()=>customInputRef.current.focus()}
            />

            <Button title='Clear Input'
                onPress={()=>customInputRef.current.clear()}
            />
            <Button title='ctrl child fn by parent'
                onPress={()=>customInputRef.current.papaKoYehFunctionDiya()}
            />
        </>
    )
}

export default ForwardRefComp

const styles = StyleSheet.create({})