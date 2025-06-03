import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen1 from './DrawerScreen1';
import DrawerScreen2 from './DrawerScreen2';
export type DrawerNavigationDemoParamsList={
DrawerScreen1:undefined;
DrawerScreen2:undefined;
}
const Drawer = createDrawerNavigator<DrawerNavigationDemoParamsList>();

const DrawerNavigationDemo:React.FC = () =>{
     return <Drawer.Navigator>
        <Drawer.Screen  name="DrawerScreen1" component={DrawerScreen1} />
        <Drawer.Screen  name="DrawerScreen2" component={DrawerScreen2} />
     </Drawer.Navigator>;
};

export default DrawerNavigationDemo;
