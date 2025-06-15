import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskListScreen from '../screens/TaskListScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
const RootNavigation = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator>
      <Tab.Screen  name='Tasks' component={TaskListScreen}/>
      <Tab.Screen  name='Projects' component={ProjectsScreen}/>
    </Tab.Navigator>
  );
}

export default RootNavigation
