import { View, Text ,FlatList, StyleSheet} from 'react-native'
import React from 'react'

const FlatListt = () => {
    const user = [
        {
            id: 1,
            name: "Rohit"

        }, {
            id: 2,
            name: "Rahul"
        },
        {
            id: 3,
            name: "Piyush"
        }, {
            id: 4,
            name: "anjali"
        }, {
            id: 5,
            name: "Dog"
        }, {
            id: 6,
            name: "Cat"
        }]
    return (
        <View>
            <Text>FlatList</Text>
            <FlatList
            data={user}
            renderItem={({item})=><Text style={styles.item}>name: {item.name} </Text>}

            />


        </View>
    )
}
const styles=StyleSheet.create({
    item:{
        fontSize:24,
        padding:10,
        color:"white",
        backgroundColor:"blue",
        borderColor:'black',
        borderWidth:1,
        margin:10

    }
})

export default FlatListt