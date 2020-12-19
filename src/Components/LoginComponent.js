import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { connect } from 'react-redux';
import { userOperations } from '../State/User';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            check: [{ username: 'test', password: 'test' }]
        };
    }

    handleSubmit = async () => {
        this.props.login(this.state);

        this.state.check.map((item) => {
            if (item.username == this.state.username && item.password == this.state.password) {
                this.props.props.navigation.navigate("Help");
            }
        })
        this.props.props.navigation.navigate("Help");
    };

    render() {

        this.props.error && alert(this.props.error)
        this.props.user.token && alert("Success fully Login"+this.props.user.token);
        this.props.user.token && this.props.props.navigation.navigate("Help");
        this.props.emptyError()

        return (
            <View>
                <View style={styles.container}>
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
                                this.props.props.navigation.navigate(
                                    "Registration"
                                )
                            }
                        >
                            Don't have any account ? Create Account
                        </Text>
                    </View>
                </View>
            </View>
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
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#c10000",
        color: "red",
    },
    container: {
        // marginTop:'40%'
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.user,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (cred) => { dispatch(userOperations.login(cred)) },
        emptyError: () => { dispatch(userOperations.emptyError()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);