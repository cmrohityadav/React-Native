import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (todoText: string) => void;
}
const TodoInput:React.FC<TodoInputProps> = ({onAddTodo}) => {
    const [text,setText] = useState('');
    const handleAddTodo = ()=>{
        if(text.trim()){
            onAddTodo(text.trim());
            setText('');
        }
    };
  return (
    <View style={styles.container} >
      <TextInput
      style={styles.textInput}
      placeholder="Enter your todo here...."
      value={text}
      onChangeText={setText}
      />
      <TouchableOpacity
      onPress={handleAddTodo}

      style={styles.addTodoBtn}>
        <Text style={styles.addTodoBtnText} >
            Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoInput;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center',
    },
    textInput:{
        flex:1,
        borderWidth:2,
        borderColor:'#cccccc',
        paddingHorizontal:10,
        paddingVertical:5,
        marginRight:10,
        height:40,
    },
    addTodoBtn:{
        backgroundColor:'#007aff',
        paddingHorizontal:15,
        paddingVertical:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        height:40,
    },
    addTodoBtnText:{
        color:'#fff',
    }

});
