import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../storage/store';
import { addTask, deleteTask, fetchTasks, Task, toggleTask } from '../storage/tasksSlice';
import Animated, { FadeInRight, FadeOutLeft,Layout } from 'react-native-reanimated';

const TaskListScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const dispatch =useDispatch<AppDispatch>()
  const tasks = useSelector((state:RootState)=>state.tasks.tasks);
  const status = useSelector((state:RootState)=>state.tasks.status);
  // console.log("tasksList",tasks)
  const renderEachTaskUi = ({item}:{item:Task}) =>(
    <Animated.View
    entering={FadeInRight}
    exiting={FadeOutLeft}
    layout={Layout.springify()}
    >
      <TouchableOpacity
      onPress={()=> dispatch(toggleTask(item.id))}
      style={[styles.taskItem,item.completed && styles.completedTaskItem]}
      >
        <Text style={[styles.taskItemText,item.completed && styles.completedTaskItemText]}>{item.title}</Text>
      <TouchableOpacity 
        style={styles.deleteTaskBtn}
        onPress={()=>handleDeleteTask(item.id)}
        >
        <Text style={styles.deleteTaskBtnText}>Delete</Text>
      </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  )
  const handleDeleteTask = (taskId:string)=>{
    Alert.alert('Delete Task','Are you sure that you want to delete this task?',
    [{
      text:'Cancle',
      style:'cancel'
    },
    {
        text: 'Delete',
        style:'destructive',
        onPress:()=> dispatch(deleteTask(taskId)),

    }]
  )
  }
  useEffect(()=>{
    if(status==='idle'){
        dispatch(fetchTasks())
    }
  },[status,dispatch])
  const handleAddNewTask =()=>{
    if(newTaskTitle.trim()){
      dispatch(addTask({
        title:newTaskTitle.trim(),
        completed:false
      }))

      setNewTaskTitle('');
      setIsModalVisible(false);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
      data={tasks}
      renderItem={renderEachTaskUi}
      keyExtractor={rohit=>rohit.id}
      />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.addBtnText}>Add</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <KeyboardAvoidingView style={styles.modalContainer}>
          <View style={styles.modalContainerContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Task</Text>
              <TouchableOpacity
                style={styles.addCloseBtn}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.addCloseBtnText}>Close</Text>
              </TouchableOpacity>
            </View>
            <TextInput 
              style={styles.input}
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
              placeholder='Enter task title'
              placeholderTextColor="#999999"
              autoFocus
            />
            <View style={styles.modalButtons}>
            <TouchableOpacity
                style={[styles.modalBtn,styles.cancelBtn]}
                // onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.addCloseBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalBtn,styles.submitBtn]}
                // onPress={() => setIsModalVisible(false)}
                onPress={handleAddNewTask}
              >
                <Text style={[styles.addCloseBtnText]}>Add Task</Text>
              </TouchableOpacity>
            </View>
          </View>

        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  addBtn: {
    backgroundColor: '#6200ee',
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  addBtnText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainerContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  addCloseBtn:{
    backgroundColor: '#6200ee',
    padding:12,
    borderRadius:8,
    justifyContent:'center',
    alignItems: 'center',
    elevation: 4,
  },
  addCloseBtnText:{
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  input:{
    borderWidth:1,
    borderColor:'#e0e0e0',
    borderRadius:4,
    padding:12,
    marginBottom:20,
    fontSize:16
  },
  modalButtons:{
    flexDirection:'row'
  },
  modalBtn:{
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:4,
    marginLeft:10,
  },
  cancelBtn:{
    backgroundColor:'#d33c09',

  },
  submitBtn:{
    backgroundColor:'#b912a3',

  },
  taskItem:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#ffffff',
    padding:15,
    marginVertical:8,
    borderRadius:8,
    elevation:2

  },
  completedTaskItem:{
    opacity:0.7,

  },
  taskItemText:{
    marginLeft:10,
    fontSize:16,
    flex:1,
  },
  completedTaskItemText:{
    textDecorationLine:'line-through'
  },
  deleteTaskBtn:{
    backgroundColor:'#e35548',
    padding:12,
    borderRadius:20,
  },
  deleteTaskBtnText:{
    fontSize:16,
    fontWeight:'bold',
    color:'#fff'
  }


  
});
