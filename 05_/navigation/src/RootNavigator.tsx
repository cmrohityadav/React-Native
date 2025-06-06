import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigationDemo from './components/stack/StackNavigationDemo';
import TabNavigationDemo from './components/tab/TabNavigationDemo';
import DrawerNavigationDemo from './components/drawer/DrawerNavigationDemo';
export type RootStackParamsList={
  Home:undefined;
  StackDemo:undefined;
  TabDemo:undefined;
  DrawerDemo:undefined;
}

const RootNavigator: React.FC = () => {
  // create a stack navigator
  const Stack = createStackNavigator<RootStackParamsList>();
  return <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
    <Stack.Screen name="TabDemo" component={TabNavigationDemo}/>
    <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo}/>
  </Stack.Navigator>;
};

export default RootNavigator;
