import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {TodoItem} from '../types';
import TodoItemComponent from './TodoItem';

interface TodoListProps {
  todoList: TodoItem[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo:(id:string,updatedString:string)=> void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(el => (
        <TodoItemComponent
          todo={el}
          key={el.id}
          onDelete={onDeleteTodo}
          onToggle={onToggleTodo}
          onEdit={onEditTodo}
        />
      ))}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
