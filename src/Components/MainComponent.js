import React, { Component } from "react";
import { StyleSheet, View, Platform } from "react-native";
import Register from "./RegisterComponent";
import Login from "./LoginComponent";
import Header from "./HeaderComponent";
import DroneRequest from "./DroneRequestComponent";
import History from "./HistoryComponent";
import DroneComing from "./DroneComingComponent";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <View
                    style={{
                        flex: 1,
                        paddingTop: 0,
                    }}
                >
                    {" "}
                    <Header />
                    <Stack.Navigator initialRouteName="DroneComing">
                        <Stack.Screen
                            name="DroneComing"
                            component={DroneComing}
                        />
                        <Stack.Screen
                            name="DroneRequest"
                            component={DroneRequest}
                        />

                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Register" component={Register} />
                        <Stack.Screen name="History" component={History} />
                    </Stack.Navigator>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fcfcfc",
    },
});

export default Main;
