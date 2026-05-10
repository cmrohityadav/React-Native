import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const UserIdPage = () => {
    const {userId}=useLocalSearchParams();
  return (
    <View>
      <Text>UserIdPage {userId}</Text>
    </View>
  )
}

export default UserIdPage

const styles = StyleSheet.create({})