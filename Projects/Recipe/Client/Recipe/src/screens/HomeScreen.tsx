import { View, Text, Alert, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native'
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
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder='Search Recipes ...'
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity 
          style={styles.iconBtn}
          onPress={()=>setShowModal(true)}
          >
          <Text style={styles.iconBtnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleLogout}
          style={styles.logoutButton}
          >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* render here all recipes */}

        <FlatList
        data={recipes}
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