import React from 'react';
import { Text } from 'react-native';
import { bodyTextSize } from '../constants';

const BlackAttributeText = ({ title, text }) => {
    const { blackAttributeTextStyles, blackAttributeTitleStyles } = styles
    return (
        <Text key={title} style={blackAttributeTextStyles} >
            <Text style={blackAttributeTitleStyles} >{title}.</Text> {text}
        </Text>
    )
}

const styles = {
    blackAttributeTitleStyles: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    blackAttributeTextStyles: {
        fontSize: bodyTextSize,
    },
}

export default BlackAttributeText;