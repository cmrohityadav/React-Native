import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Recipe } from '../context/RecipeContext';

interface  CreateRecipeFormProps{
    onCancle:()=> void;
    onSubmit:(recipe: Omit<Recipe,'_id' | 'createdBy' | 'createdAt'>)=>Promise<void>;
}

const CreateRecipeForm:React.FC<CreateRecipeFormProps> = ({onCancle,onSubmit}) => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [difficulty,setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Easy');

    const handleCreateRecipe = () =>{
        if(title && description){
            onSubmit({title,description,difficulty});
        }esle{
            
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Recipe</Text>
      <TextInput 
        placeholder='recipe title'
        style={styles.input}
        value={title}
        onChangeText={setTitle}
       />
      <TextInput 
        placeholder='Recipe description'
        style={[styles.input,styles.textArea]}
        value={description}
        onChangeText={setDescription}
        />


      <View style={styles.pickerContainer}>
            <Text style={styles.label}> Difficulty</Text>
            <Picker 
            selectedValue={difficulty}
            onValueChange={item => setDifficulty(item as 'Easy' | 'Medium' | 'Hard')}
            style={styles.picker}>
                <Picker.Item label='Easy' value={'Easy'}/>
                <Picker.Item label='Medium' value={'Medium'}/>
                <Picker.Item label='Hard' value={'Hard'}/>
            </Picker>
      </View>

      <View style={styles.btnContainer}>

        <TouchableOpacity
        style={[styles.btn,styles.cancelBtn]}
        onPress={onCancle}
        >
            <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={[styles.btn,styles.submitBtn]}
         onPress={handleCreateRecipe}
        >
            <Text style={styles.btnText}>Create Recipe</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
        backgroundColor:'#ffffff'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:16,
    },
    input:{
    width:'100%',
    height:45,
    borderWidth:1,
    borderColor:'#cccccc',
    borderRadius:6,
    paddingHorizontal:10,
    marginBottom:10,
    },
    textArea:{
       height:100,
       textAlignVertical:'top' 
    },
    pickerContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:16,
    },
    label:{
        fontSize:16,
        marginRight:8,
    },
    picker:{
        flex:1,
        height:50,
    },
    
    btnContainer:{
        padding:16,
        borderRadius:4,
        flexDirection:'row'

    },
    btn:{
        flex:1,
        padding:16,
        borderRadius:4,
        alignItems:'center',
    },
    cancelBtn:{
        backgroundColor:'#ccc',
        marginRight:8,
    },
    submitBtn:{
        backgroundColor:'#007aff',
        fontWeight:'bold',
        fontSize:16,

    },
    btnText:{

    },



})

export default CreateRecipeForm