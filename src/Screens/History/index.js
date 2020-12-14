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
import History from '../../Components/HistoryComponent'

export default class Request extends React.Component {
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
                <History />
            </View>
        );
    };
}

