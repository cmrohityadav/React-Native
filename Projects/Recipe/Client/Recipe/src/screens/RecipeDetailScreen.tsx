import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamsList } from '../navigation/RootNavigation'
import { Recipe, RecipeContext } from '../context/RecipeContext'
type RecipeDetailsScreenRouteProp=RouteProp<RootStackParamsList,'RecipeDetails'>
interface RecipeDetailsScreenProps{
  route:RecipeDetailsScreenRouteProp;
}
const RecipeDetailScreen:React.FC<RecipeDetailsScreenProps> = ({route}) => {
  console.log(route);
  const [recipeDetail,setRecipeDetail]=useState<Recipe| null>(null);
  const {recipeId}=route.params;
  const {fetchSingleRecipe}=useContext(RecipeContext);
  useEffect(()=>{
    const fetchRecipe=async()=>{
      const fetchedRecipe= await fetchSingleRecipe(recipeId);
      setRecipeDetail(fetchedRecipe);
    }
    fetchRecipe();
  },[recipeId])

  console.log("Recipe detail",recipeDetail);

  if(!recipeDetail){
    return <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipeDetail?.title}</Text>
      <Text style={styles.description}>{recipeDetail?.description}</Text>
      <Text style={styles.difficulty}>{recipeDetail?.difficulty}</Text>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:16,
    backgroundColor:'#ffffff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#666',
    marginBottom: 10,
  },
  difficulty: {
    fontSize: 12,
    color: '#007afd',
    fontWeight: 'bold',
  },
})
export default RecipeDetailScreen