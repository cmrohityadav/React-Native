import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import { TodoItem } from '../types';
interface TodoEditProps{
  todo:TodoItem;
  onSave:(updatedString:string)=> void;
  onCancel:()=> void;
}
const TodoEdit:React.FC<TodoEditProps> = ({todo,onSave,onCancel}) => {
  const [text,setText] = useState(todo.text);
  const handleSave = () =>{
    if(text.trim()){
      onSave(text.trim());
    }
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnSave}
          onPress={handleSave}
          >
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCancel}
          onPress={()=>onCancel()}
          >
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoEdit;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  btnContainer: {
    flexDirection:'row',
  },
   btnSave:{
        backgroundColor:'#4cd964',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        marginRight:5,
    },
    btnCancel:{
       backgroundColor:'#ff9500',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
    },
    btnText:{
        color:'#fff',
        fontSize:15,
    },
});
