import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TodoItem } from '../types';
import TodoEdit from './TodoEdit';
interface TodoItemProps{
    todo:TodoItem;
    onDelete:(id:string)=>void;
    onToggle:(id:string)=> void;
    onEdit:(id:string,updatedString:string)=> void;
}
const TodoItemComponent:React.FC<TodoItemProps> = ({todo,onDelete,onToggle,onEdit}) => {
    const onHandleDelete = (id:string)=>{
        onDelete(id);
    };
    const onHandleToggle = (id:string)=>{
        onToggle(id);
    };
    const [isEditing,setIsEditing] = useState(false);
    const handleEdit = (updatedText:string) =>{
        onEdit(todo.id, updatedText);
        setIsEditing(false);
    };
    if(isEditing){
        return <TodoEdit todo={todo} onCancel={()=>setIsEditing(false)} onSave={handleEdit} />;
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.todoText} onPress={()=> onHandleToggle(todo.id)} >
            <Text style={[styles.text,todo?.isCompleted && styles.completedText]}>{todo.text}</Text>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btnEdit,todo?.isCompleted && styles.disabledBtn]}
            onPress={()=>setIsEditing(true)}
            disabled={todo?.isCompleted ? true : false}
            >
                <Text style={[styles.btnText]}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnDelete} onPress={()=>onHandleDelete(todo.id)}>
                <Text style={styles.btnText} >Delete</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default TodoItemComponent;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
    },
    todoText:{
        flex:1,

    },
    text:{
        fontSize:18,
        fontWeight:'bold',
    },
    completedText:{
    textDecorationLine:'line-through',
    },
    btnContainer:{
        flexDirection:'row',
    },
    btnEdit:{
        backgroundColor:'#007aff',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        marginRight:5,
    },
    btnDelete:{
       backgroundColor:'#ff3b30',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
    },
    btnText:{
        color:'#fff',
        fontSize:15,
    },
    disabledBtn:{
        backgroundColor:'#ccc',
    },

});
