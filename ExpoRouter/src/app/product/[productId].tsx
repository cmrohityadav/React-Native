import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductID = () => {
    const {productId}=useLocalSearchParams()
  return (
    <View>
      <Text>ProductID {productId}</Text>
    </View>
  )
}

export default ProductID

const styles = StyleSheet.create({})