import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class DroneRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drone_id: "5fd16300d78846229c5153ce",
            user_id: "5fd1620fd78846229c5153cd",
            need_help: true,
            emergency_type: "",
            status: "Pending",
            user_location: "Karachi",
            drone_arrival_estimated_time: "",
            job_completion_time: "",
            token: "",
        };
        this.getData();
    }
    getData = async (val) => {
        let value;
        try {
            value = await AsyncStorage.getItem("token");
            if (value !== null) {
                this.setState({
                    token: value,
                });
            }
            return value;
        } catch (e) {
            // error reading value
        }
        return value;
    };
    handleSubmit = async () => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/drone/request",
            {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    Authorization: `Bearer ${this.state.token}`,
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then(
                (data) => {
                    alert("Drone Request Sent");
                    this.props.navigation.navigate("Coming");
                },
                (err) => alert("Error, try again")
            );
    };

    render() {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <View style={styles.register_form_container}>
                        <TextInput
                            style={styles.form_field}
                            name="emergency_type"
                            value={this.state.emergency_type}
                            placeholder="Emergency ?"
                            onChangeText={(emergency_type) =>
                                this.setState({
                                    emergency_type: emergency_type,
                                })
                            }
                        />
                    </View>
                    <View style={styles.register_form_container}>
                        <Text style={styles.button} onPress={this.handleSubmit}>
                            Help
                        </Text>
                    </View>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    register_form_container: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: "center",
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
        borderRadius: 50,
        color: "#fff",
        padding: 50,
        width: 200,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
    },
    container: {
        justifyContent: "center",
        // alignItems: "center",
        // height: "65%",
    },
});
export default DroneRequest;
