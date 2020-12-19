import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { connect } from 'react-redux';
import { userOperations } from '../State/User';

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
            value = this.props.user.token;
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
            
            this.props.droneComing(this.state)

            if(this.props.drone_data){
                this.setState({
                    drone_data: this.props.drone_data.drone_id,
                    data: this.props.drone_data,
                });
            }

        }, 1000);
    };
    render() {
        return (
            <View>
                <View style={styles.register_form_container}>
                    <Text style={styles.text}>Drone Name: {this.state.drone_data.drone_name}</Text>
                    <Text style={styles.text}>
                        Drone Location: {this.state.drone_data.drone_location}
                    </Text>
                    <Text style={styles.text}>
                        Drone User's Location: {this.state.data.user_location}
                    </Text>
                    <Text style={styles.text}>
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
            </View>
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
    text: {
       fontSize:18,
       marginBottom:10
    },
});
const mapStateToProps = (state) => {
    console.log(state)
    return {
       user:state.user,
       error:state.error,
       drone_data:state.droneComing,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        droneComing: (data) => { dispatch(userOperations.droneComing(data)) },
        emptyError: () => { dispatch(userOperations.emptyError()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DroneComing);