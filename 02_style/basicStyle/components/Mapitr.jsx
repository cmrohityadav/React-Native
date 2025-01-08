import { View, Text } from 'react-native'
import React from 'react'

const Mapitr = () => {

    const data=[
        {id:1,
            name:"Rohit",
            tech:"C++ Js"
        },
        {id:2,
            name:"Rahul",
            tech:"Java Js"
        },
        {id:3,
            name:"vaaa",
            tech:"python Ts"
        },
        {id:4,
            name:"pooo",
            tech:"excel"
        },
    ]
  return (
    <View>

      <Text>Map Function</Text>

        {
            data.map((element)=><Text>{element.name}</Text>)
        }
    </View>
  )
}

export default Mapitr