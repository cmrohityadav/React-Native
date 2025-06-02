import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigationDemo from './components/stack/StackNavigationDemo';
export type RootStackParamsList={
  Home:undefined;
  StackDemo:undefined;
}

const RootNavigator: React.FC = () => {
  // create a stack navigator
  const Stack = createStackNavigator<RootStackParamsList>();
  return <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="StackDemo" component={StackNavigationDemo}/>
  </Stack.Navigator>;
};

export default RootNavigator;
