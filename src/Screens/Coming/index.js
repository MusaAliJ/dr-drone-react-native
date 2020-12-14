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

import Header from '../../Components/HeaderComponent'
import ComingComp from '../../Components/DroneComingComponent'

export default class Coming extends React.Component {
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
                <ComingComp />
            </View>
        );
    };
}

