import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    FlatList,
} from "react-native";
import { ListItem } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

class History extends Component {
    state = {
        data: [  {drone_id_drone_name: 'Android'},{drone_id_drone_name: 'iOS'}, {drone_id_drone_name: 'Java'},{drone_id_drone_name: 'Swift'},  ],
    };

    componentDidMount = () => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://dr-drone.herokuapp.com/drone/request/",
            {
                headers: {
                    Authorization: `Bearer ${AsyncStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then(
                (data) => {
                    this.setState({
                        data: data,
                    });
                },
                (err) => alert("Error, try again")
            );
    };
    renderMenuItem = ({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.drone_id_drone_name}
                subtitle={item.description}
                hideChevron={true}
            />
        );
    };
    render() {
        console.log(this.state.data);
        return (
            <React.Fragment>
                <View style={styles.register_form_container}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderMenuItem}
                        keyExtractor={(item) => item._id}
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
export default History;
