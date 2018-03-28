import React from 'react';
import { Text } from 'react-native';
import {primary, bodyTextSize} from '../constants'

const RedAttributeText = ({ title, text }) => {
    const { redAttributeTextStyles, redAttributeTitleStyles } = styles
    return (
        <Text style={redAttributeTextStyles} >
            <Text style={redAttributeTitleStyles} >{title}</Text> {text}
        </Text>
    )
}


const styles = {
    redAttributeTitleStyles: {
        fontWeight: 'bold',
    },
    redAttributeTextStyles: {
        fontSize: bodyTextSize,
        color: primary,
    },
}
export default RedAttributeText;