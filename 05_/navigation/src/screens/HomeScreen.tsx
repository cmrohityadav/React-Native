import { useNavigation } from '@react-navigation/native';
import {Button, StyleSheet, Text, View} from 'react-native';
import { RootStackParamsList } from '../RootNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList,'Home'>;
const HomeScreen: React.FC = () => {
   const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Home Screen</Text>
      <Button  onPress={()=>navigation.navigate('StackDemo') } title="Stack navigation demo" />
      <Button  onPress={()=>navigation.navigate('TabDemo') } title="Tab bottom navigation demo" />
      <Button  onPress={()=>navigation.navigate('DrawerDemo') } title=" Drawer navigation demo" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontWeight:'bold',
    fontSize:25,
  },
});

