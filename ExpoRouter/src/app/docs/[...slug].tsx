import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DocsSlugPage = () => {
    const {slug}=useLocalSearchParams();
    const routes=slug.join(",")
  return (
    <View>
      <Text>{routes}</Text>
    </View>
  )
}

export default DocsSlugPage