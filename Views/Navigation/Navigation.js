import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // https://reactnavigation.org/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// UI
import { Text, Icon } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../Screens/HomeScreen';


const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                    Home Screen
            </Text>
        </View>
    )
}

const Settings = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Settings" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                    Settings Screen
            </Text>
        </View>
    )
}

const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Navigation = () => {
  return (

        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        console.log(rn)

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === detailsName) {
                            iconName = focused ? 'list' : 'list-outline';

                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}

                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70}
                }}
                
                //     screenrOptions={{
                //     'tabBarActiveTintColor': 'red',
                //     'tabBarInactiveTintColor': 'grey',
                //     'tabBarLabelStyle': { paddingBottom: 10, fontSize: 10 },
                //     'tabBarStyle': { padding: 10, height: 70}
                // }}
            >

            <Tab.Screen name={'Home'} component={Home} />
            <Tab.Screen name={'Settings'} component={Settings} />

            </Tab.Navigator>
        </NavigationContainer>

  );
}

export default Navigation;