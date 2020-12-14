import React, { Component } from "react";
import { View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    StyleSheet } from "react-native";
class Header extends Component {
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
               <View style = {{
               height : 60,
               width : '100%',
               backgroundColor : '#c10000',
               flexDirection : "row",
               alignItems : "center",
               shadowColor: '#000',
               shadowOffset: { width: 0, height: 1 },
               shadowOpacity: 0.8,
               shadowRadius: 2,  
               elevation: 5,
               // marginBottom : 5
           }}>
               
               <StatusBar backgroundColor = "#c10000"/>
               
               <View style =  {{flex : 0.8, flexDirection : "row", alignItems : "center"}}>
                    <TouchableOpacity onPress = {()=>{this.props.props.navigation.openDrawer()}}>
                        <Image
                            source = {require('../Images/hamburger.png')}
                        style = {styles.hamburger}
                        />
                    </TouchableOpacity>
                    <Text style = {{
                        fontSize : 20,
                        marginLeft : 10,
                        color : 'white',
                    }}>
                      {this.props.props.route.name}
                    </Text>    
                </View>
                
            </View>
                <View style={styles.register_form_container}>
                    <Image
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
        position:'absolute',
        top:50
    },
    header_text: {
        color: "#c10000",
        fontSize: 25,
        fontWeight: "bold",
    },
    dp : {
        borderRadius : 100,
        height : 40,
        width : 40,
        marginLeft : 10
    },
    messages : {
        height : 32,
        width : 30,
        alignSelf : 'flex-end',
        marginRight : 20
    },
    hamburger : {
        height : 20,
        width : 32,
        marginLeft : 10
    }
});
export default Header;
