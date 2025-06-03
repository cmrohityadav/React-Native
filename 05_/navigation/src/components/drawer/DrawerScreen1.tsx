import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Button, Text, View } from 'react-native';
import { DrawerNavigationDemoParamsList } from './DrawerNavigationDemo';
import { useNavigation } from '@react-navigation/native';
type DrawerScreen1NavigationProp = DrawerNavigationProp<DrawerNavigationDemoParamsList,'DrawerScreen1'>;
const DrawerScreen1:React.FC = () =>{
    const navigation = useNavigation<DrawerScreen1NavigationProp>();
     return( <View>
        <Text>Drawer Screen 1</Text>
        <Button title="open drawer" onPress={()=>navigation.openDrawer()}/>
     </View>);
};

export default DrawerScreen1;
