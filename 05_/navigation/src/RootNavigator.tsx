import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const RootNavigator: React.FC = () => {
  // create a stack navigator
  const Stack = createStackNavigator();
  return <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
  </Stack.Navigator>;
};

export default RootNavigator;
