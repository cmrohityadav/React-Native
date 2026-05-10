import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"
export default function TabLayout(){

    return (
        <Tabs 
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'#f45e5e',
                tabBarInactiveTintColor:'rgb(89, 210, 210)',
                tabBarStyle:{
                    backgroundColor:"#020617",
    
                },
                tabBarLabelStyle:{
                    fontSize:12,
                    marginBottom:5
                }
            }}
        >
        
        <Tabs.Screen name="equity"
        options={{
            title:"EQ",
            tabBarIcon:({color,size})=>(
                <Ionicons name='home'  color={color} size={size}/>
            )
        }}
        />
        <Tabs.Screen name="future"
        options={{
            title:"F",
            tabBarIcon:({color,size})=>(
                <Ionicons name='compass'  color={color} size={size}/>
            )
        }}
        />
        <Tabs.Screen name="option"
        options={{
            title:"O",
            tabBarIcon:({color,size})=>(
                <Ionicons name='options'  color={color} size={size}/>
            )
        }}
        />
        </Tabs>
    )
}