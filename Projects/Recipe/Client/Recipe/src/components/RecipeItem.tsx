import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Recipe } from '../context/RecipeContext'
interface RecipeItemProps{
    recipe:Recipe;
}
const RecipeItem:React.FC<RecipeItemProps> = ({recipe}) => {
  return (
    <TouchableOpacity style={styles.card}>
<View style={styles.cardContent}>
    <Text style={styles.title}>{recipe?.title}</Text>
    <Text style={styles.description} numberOfLines={2}>{recipe?.description}</Text>
    <Text style={styles.difficulty} numberOfLines={2}>{recipe?.difficulty}</Text>

</View>

<TouchableOpacity style={styles.deleteBtn}>
    <Text style={styles.deleteBtnText}>Delete</Text>
</TouchableOpacity>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    card:{
        backgroundColor:'#ffffff',
        borderRadius:8,
        padding:16,
        marginHorizontal:16,
        marginVertical:8,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.1,
        shadowRadius:4,
        elevation:5,

    },
    cardContent:{},
    title:{},
    description:{},
    difficulty:{},
    deleteBtn:{},
    deleteBtnText:{}


})
export default RecipeItem