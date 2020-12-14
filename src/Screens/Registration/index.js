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
import RegComp from '../../Components/RegisterComponent'

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false
        }
    }

    render() {

        return (
            <View>
                <Header props={this.props}/>
                <RegComp props={this.props}/>
            </View>
        );
    };
}

