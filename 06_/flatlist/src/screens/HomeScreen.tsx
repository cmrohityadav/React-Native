import { Button, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamsList } from '../RootNavigator';
type HomeScreenProp = StackNavigationProp<RootStackParamsList,'FlatListScreen'>

// const topic = [{
//     id:1,
//     title:'Flat  List Demo',
//     screen:'FlatListScreen'
// }];
const HomeScreen:React.FC = () => {
    const navigation = useNavigation<HomeScreenProp>();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button  title="Open Flat List Demo" onPress={()=>navigation.navigate('FlatListScreen') } />
      <Button title="Open Section List Demo" onPress={()=>navigation.navigate('SectionListScreen') } />
      <Button title="Open Touchable Demo" onPress={()=>navigation.navigate('TouchableScreen') } />
      <Button title="Open modal Demo" onPress={()=>navigation.navigate('ModalScreenDemo') } />
      <Button title="Open Pull to Refresh Demo" onPress={()=>navigation.navigate('PullToRefresh') } />
      <Button title="Open Data fetching Demo" onPress={()=>navigation.navigate('DataFechingDemo') } />
    </View>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({});
