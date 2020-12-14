import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class ContactFormComponent extends Component {
    state = {
        username: "",
        password: "",
        text: "",
    };

    handleSubmit = async () => {

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
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text} />
                    </View>

                    <View style={styles.register_form_container}>
                        <Button
                            style={styles.button}
                            color="#c10000"
                            title="Submit"
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
       marginTop:'40%'

    }
});
export default ContactFormComponent;
