import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
class Register extends Component {
    state = {
        username: "",
        password: "",
    };
    storeData = async (value) => {
        try {
            await AsyncStorage.setItem("token", value);
        } catch (e) {
            // saving error
        }
    };
    handleSubmit = async () => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/user/login",
            {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then(
                (data) => {
                    this.storeData(data.token);
                    this.props.navigation.navigate("DroneRequest");
                },
                (err) => alert("Error, try again")
            );
    };
    render() {
        return (
            <React.Fragment>
                <View style={styles.register_form_container}>
                    <TextInput
                        style={styles.form_field}
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChangeText={(username) =>
                            this.setState({ username: username })
                        }
                    />
                    <TextInput
                        style={styles.form_field}
                        secureTextEntry={true}
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChangeText={(password) =>
                            this.setState({ password: password })
                        }
                    />
                </View>
                <View style={styles.register_form_container}>
                    <Button
                        style={styles.button}
                        color="#c10000"
                        title="Login"
                        onPress={this.handleSubmit}
                    />
                </View>
                <View style={styles.register_form_container}>
                    <Text
                        style={{ color: "#c10000" }}
                        onPress={() =>
                            this.props.navigation.navigate("Register")
                        }
                    >
                        Don't have any account ? Create Account
                    </Text>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    register_form_container: {
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    form_field: {
        borderWidth: 1,
        borderColor: "lightgrey",
        borderStyle: "solid",
        paddingHorizontal: 5,
        paddingVertical: 6,
        marginVertical: 5,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "#c10000",
        color: "red",
    },
});
export default Register;
