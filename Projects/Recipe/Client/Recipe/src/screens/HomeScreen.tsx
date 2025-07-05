/* eslint-disable react-native/no-inline-styles */
import { View, Text, Alert, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList, useColorScheme } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from '../navigation/RootNavigation'
import CreateRecipeForm from '../components/CreateRecipeForm'
import { Recipe, RecipeContext } from '../context/RecipeContext'
import RecipeItem from '../components/RecipeItem'
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Home'>;
interface HomeScreenProp{
  navigation:HomeScreenNavigationProp
}
const HomeScreen:React.FC<HomeScreenProp> = ({navigation}) => {
  const {SignOut,userId}=useContext(AuthContext);
  const {createRecipe,fetchRecipes,recipes,deleteRecipe}=useContext(RecipeContext);
  const [showModal,setShowModal] = useState(false);
  const [searchQuery,setSearchQuery]= useState('');

    const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const filteredRecipes = recipes.filter(recipeItem=> recipeItem.title.toLowerCase().includes(searchQuery.toLowerCase()))
  
  const handleLogout= ()=>{
    Alert.alert('Logout','are you sure you want to logout?',[{
            text:'Cancel',
            style:'cancel'
          },
        {
          text:'Logout',
          onPress:async()=> {
              await SignOut();
              navigation.replace('Login')
          },
        }
        ]);
  }

 const  handleOncreateRecipeBtnSubmit = async(recipe: Omit<Recipe,'_id' | 'createdBy' | 'createdAt'>)=>{
     await createRecipe(recipe);
     setShowModal(false);   
 }

 const handleDeleteRecipe =async(id:string)=>{
  await deleteRecipe(id);
  await fetchRecipes();
 }

 useEffect(()=>{
  fetchRecipes();
 },[])
  return (
    <View  style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#000' : '#f5f5f5' },
      ]}>
      <View  style={[
          styles.header,
          { backgroundColor: isDarkMode ? '#1e1e1e' : '#007aff' },
        ]}>
        <TextInput
          placeholder='Search Recipes ...'
          placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
          style={[
            styles.searchInput,
            {
              backgroundColor: isDarkMode ? '#333' : '#fff',
              color: isDarkMode ? '#fff' : '#000',
            },
          ]}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity 
          style={[
            styles.iconBtn,
            {
              backgroundColor: isDarkMode ? '#555' : '#fff',
            },
          ]}
          onPress={()=>setShowModal(true)}
          >
          <Text style={[styles.iconBtnText, {color: isDarkMode ? '#00e0ff' : '#007aff'},]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleLogout}
          style={[
            styles.logoutButton,
            {
              backgroundColor: isDarkMode ? '#8dc63f' : '#c5e31a',
            },
          ]}
          >
          <Text style={[
              styles.logoutButtonText,
              { color: isDarkMode ? '#000' : '#000' },
            ]}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* render here all recipes */}

        <FlatList
        data={filteredRecipes}
        renderItem={({item})=><RecipeItem 
        recipe={item} 
        onPressRecipeItem={()=>navigation.navigate('RecipeDetails',{recipeId:item._id})}
        currentUserId={userId}
        onRecipeItemDelete={()=>handleDeleteRecipe(item._id)}
        />}
        keyExtractor={(item) => item._id}
        />


      {/* Modal for creating new recipe */}
      <Modal
        visible={showModal}
        onRequestClose={()=>setShowModal(false)}
      >
        <CreateRecipeForm 
        onSubmit={handleOncreateRecipeBtnSubmit}
        onCancle={()=> setShowModal(false)}/>

      </Modal>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    color:'#f5f5f5',
  },
  header:{
    flexDirection:'row',
    padding:16,
    alignItems:'center',
    backgroundColor:'#007aff',
  },
  searchInput:{
    flex:1,
    height:45,
    backgroundColor:'#ffffff',
    borderRadius:20,
    paddingHorizontal:16,
    marginRight:15,
  },
  iconBtn:{
    width:45,
    height:45,
    borderRadius:20,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
  },
  iconBtnText:{
    fontSize:20,
    color:'#007aff',
  },
  logoutButton:{
    padding:12,
    backgroundColor:'#c5e31a',
    marginLeft:12,
    borderRadius:24,
  },
  logoutButtonText:{
    fontSize:14,
    fontWeight:'bold',
    
  }
})
export default HomeScreen