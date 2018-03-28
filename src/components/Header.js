import React from 'react';
import ReactNative from 'react-native'
import { Text, View, Platform } from 'react-native'
import { primary }from '../constants'

const Header = (props) => {
    const {viewStyle, textStyle} = styles
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#FCF0DB',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9,
        // allows android to work
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 23,
        color: primary,
        fontFamily: (Platform.OS === 'ios') ? 'Georgia' : 'serif',
    },
}
 
export default Header;