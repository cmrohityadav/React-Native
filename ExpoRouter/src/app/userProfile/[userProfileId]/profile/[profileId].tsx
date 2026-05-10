import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProfileId = () => {
    const {userProfileId,profileId}=useLocalSearchParams()
  return (
    <View>
      <Text>ProfileId {profileId}</Text>
      <Text>UserProfileId {userProfileId}</Text>
    </View>
  )
}

export default ProfileId

const styles = StyleSheet.create({})