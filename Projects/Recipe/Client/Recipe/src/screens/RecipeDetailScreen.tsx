/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, ScrollView, useColorScheme } from 'react-native'
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
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
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
      <Text style={{ color: isDarkMode ? '#fff' : '#000' }}>Loading...</Text>
    </View>
  }
  return (
    <ScrollView style={[
          styles.container,
          { backgroundColor: isDarkMode ? '#000' : '#fff' },
        ]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>{recipeDetail?.title}</Text>
      <Text style={[styles.description, { color: isDarkMode ? '#ccc' : '#666' }]}>{recipeDetail?.description}</Text>
      <Text  
      style={[
          styles.difficulty,
          { color: isDarkMode ? '#5ac8fa' : '#007afd' },
        ]}>{recipeDetail?.difficulty}</Text>
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