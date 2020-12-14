import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <View style={styles.register_form_container}>
                    <Text style={styles.header_text}>DR DRONE</Text>
                    <Image
                        // style={{ width: 200 }}
                        source={require("../../public/logo.png")}
                    />
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    register_form_container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        textAlign: "center",
        shadowColor: "red",
    },
    header_text: {
        color: "#c10000",
        fontSize: 25,
        fontWeight: "bold",
    },
});
export default Header;
