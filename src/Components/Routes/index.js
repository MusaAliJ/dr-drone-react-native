import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../../Screens/Login";
import Registration from "../../Screens/Registration";
import Request from "../../Screens/Request";
import Coming from "../../Screens/Coming";
import History from "../../Screens/History";
import Contact from "../../Screens/Contact";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function nonPrivate() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Registration" component={Registration} />
        </Drawer.Navigator>
    );
}

function Private() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Help" component={Request} />
            <Drawer.Screen name="Contact" component={Contact} />
            <Drawer.Screen name="Coming" component={Coming} options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }} />
            {/* <Drawer.Screen name="History" component={History} /> */}
        </Drawer.Navigator>
    );
}

export default class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Login" component={nonPrivate} />
                    <Stack.Screen name="Registration" component={nonPrivate} />

                    <Stack.Screen name="Help" component={Private} />
                    <Stack.Screen name="Coming" component={Private} />

                    <Stack.Screen name="History" component={Private} />

                    <Stack.Screen name="Contact" component={Private} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
