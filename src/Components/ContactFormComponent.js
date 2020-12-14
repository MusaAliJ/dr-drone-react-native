import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
class ContactFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: "5fd1620fd78846229c5153cd",
            message: "",
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
            "https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/contact",
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
                    alert("Message Sent");
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
                            multiline={true}
                            placeholder="Message..."
                            numberOfLines={6}
                            onChangeText={(message) =>
                                this.setState({ message })
                            }
                            value={this.state.message}
                        />
                    </View>

                    <View style={styles.register_form_container}>
                        <Button
                            style={styles.button}
                            color="#c10000"
                            title="Send"
                            onPress={this.handleSubmit}
                        />
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
    container: {
        marginTop: "40%",
    },
});
export default ContactFormComponent;
