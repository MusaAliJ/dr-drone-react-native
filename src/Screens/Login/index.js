import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    Modal,
    TouchableHighlight
} from 'react-native';

import Header from '../../Components/HeaderNonPrivate'
import LoginComp from '../../Components/LoginComponent'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false
        }
    }

    render() {

        return (
            <React.Fragment>
                <View>
                    <Header props={this.props}/>
                    <LoginComp  props={this.props}/>
                </View>
            </React.Fragment>
        );
    };
}

