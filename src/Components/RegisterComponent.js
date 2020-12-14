import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button,ScrollView  } from "react-native";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        name: "",
        email: "",
        nic: "",
        password: "",
        gender: "",
        number: "",
        disease: "",
        password: "",
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const { form } = this.state;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    };
    handleSubmit = () => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/user/signup",
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
                    alert("Registered");
                    this.props.props.navigation.navigate("Login");
                },
                (err) => alert("Error, try again")
            );
    };
    render() {
        return (
            <React.Fragment>
                <ScrollView style={styles.scrollView}>
                <View style={styles.register_form_container}>
                    {/* <Text style={styles.heading}>Register</Text> */}
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
                        name="name"
                        value={this.state.name}
                        placeholder="Name"
                        onChangeText={(name) => this.setState({ name: name })}
                    />
                    <TextInput
                        style={styles.form_field}
                        name="email"
                        value={this.state.email}
                        placeholder="Email"
                        onChangeText={(email) =>
                            this.setState({ email: email })
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
                    <TextInput
                        style={styles.form_field}
                        name="nic"
                        value={this.state.nic}
                        placeholder="Nic No."
                        onChangeText={(nic) => this.setState({ nic: nic })}
                    />
                    <TextInput
                        style={styles.form_field}
                        name="number"
                        value={this.state.number}
                        placeholder="Number"
                        onChangeText={(number) =>
                            this.setState({ number: number })
                        }
                    />
                    <TextInput
                        style={styles.form_field}
                        name="gender"
                        value={this.state.gender}
                        placeholder="Gender"
                        onChangeText={(gender) =>
                            this.setState({ gender: gender })
                        }
                    />
                    <TextInput
                        style={styles.form_field}
                        name="disease"
                        value={this.state.disease}
                        placeholder="Any Disease ?"
                        onChangeText={(disease) =>
                            this.setState({ disease: disease })
                        }
                    />
                </View>
                <View style={styles.register_form_container}>
                    <Button
                        style={styles.button}
                        color="#c10000"
                        title="Register"
                        onPress={this.handleSubmit}
                    />
                </View>
                <View style={styles.register_form_container}>
                    <Text
                        style={{ color: "#c10000" }}
                        onPress={() => this.props.props.navigation.navigate("Login")}
                    >
                        Already have an account ?
                    </Text>
                </View>
                </ScrollView>
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
    heading: {
        fontSize: 22,
        fontWeight: "bold",
    },
    scrollView: {
        marginBottom: 250,
      }
});
export default Register;
