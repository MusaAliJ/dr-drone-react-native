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
import ContactFormComp from '../../Components/ContactFormComponent'

export default class Contact extends React.Component {
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
                    <ContactFormComp />
                </View>
            </React.Fragment>
        );
    };
}

