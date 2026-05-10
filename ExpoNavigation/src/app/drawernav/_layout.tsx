import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0F172A',
        },

        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold',
        },

        drawerActiveBackgroundColor: '#2563EB',

        drawerActiveTintColor: '#fff',

        drawerInactiveTintColor: '#334155',

        drawerLabelStyle: {
          marginLeft: 1,
          fontSize: 15,
          fontWeight: '600',
        },

        drawerStyle: {
          backgroundColor: '#ffffff',
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Dashboard',

          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="equity"
        options={{
          title: 'Equity',

          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="trending-up"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="future"
        options={{
          title: 'Futures',

          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="analytics"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="option"
        options={{
          title: 'Options',

          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="options"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer>
  );
}