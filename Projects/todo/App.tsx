import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import { TodoItem } from './src/types';

const App = () => {
  const [todoList,setTodoList] = useState<TodoItem[]>([]);
  const handleAnyAddTodo = (anyTodoData:string)=>{
    setTodoList([...todoList,{
      id:Date.now().toString(),
      text:anyTodoData,
      isCompleted:false,
    }]);
  };
  const deleteTodo = (id:string)=>{
    setTodoList(todoList.filter((element) => element.id !== id));
  };
const toggleTodo = (id: string) => {
  setTodoList(
    todoList.map((element) =>
      element.id === id
        ? { ...element, isCompleted: !element.isCompleted }
        : element
    )
  );
};

const editTodo = (id:string,updatedString:string)=>{
  setTodoList(todoList.map((element)=> element.id === id
        ? { ...element, text:updatedString }
        : element));
};
  return (
    <View style={styles.container}>
      <Text style={styles.headerText} >Todo</Text>
      <TodoInput onAddTodo={handleAnyAddTodo}/>
      <TodoList
      todoList={todoList}
      onDeleteTodo={deleteTodo}
      onToggleTodo={toggleTodo}
      onEditTodo={editTodo}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:15,
  },
  headerText:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:40,
  },

});


