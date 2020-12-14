import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
class DroneComing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            drone_data: [],
            request_id: "5fd374abcd49c20017f200a4",
            token: "",
            estimated_time: Math.random() * 6,
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
    componentDidMount = () => {
        setTimeout(() => {
            fetch(
                "https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/drone/rescue/" +
                    this.state.request_id,
                {
                    headers: {
                        Authorization: `Bearer ${this.state.token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((response) => response.json())
                .then(
                    (data) => {
                        this.setState({
                            drone_data: data.drone_id,
                            data: data,
                        });
                    },
                    (err) => alert("Error, try again")
                );
        }, 1000);
    };
    render() {
        return (
            <React.Fragment>
                <View style={styles.register_form_container}>
                    <Text>Drone Name: {this.state.drone_data.drone_name}</Text>
                    <Text>
                        Drone Location: {this.state.drone_data.drone_location}
                    </Text>
                    <Text>
                        Drone User's Location: {this.state.data.user_location}
                    </Text>
                    <Text>
                        Estimated Time:{" "}
                        {this.state.estimated_time.toFixed() === 0
                            ? 2
                            : this.state.estimated_time.toFixed()}{" "}
                        Mints
                    </Text>
                </View>
                <View style={styles.register_form_container}>
                    <Image
                        source={require("../Images/drone.gif")}
                        style={styles.drone}
                    />
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
    drone: {
        width: 400,
        height: 400,
    },
});
export default DroneComing;
