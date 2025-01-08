import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const StatusBarr = () => {
    const [showBar, setshowBar] = useState(false)
    return (
        <View>
            <Text>StatusBar</Text>
            <StatusBar
                backgroundColor="green"
                barStyle="light-content"
                hidden={showBar}
            />

        <Button title='toggle to hide/show status bar'

            onPress={()=>setshowBar((prev)=>!prev)}
        />

        </View>
    )
}

export default StatusBarr

const styles = StyleSheet.create({})