import React from 'react';
import { View } from 'react-native';
import {primary} from '../constants'

const Rule = () => {
    return (
        <View style={styles.ruleStyles}></View>
    )
}
 
const styles = {
    ruleStyles: {
        width: '100%',
        height: 5,
        backgroundColor: primary,
    }
}
export default Rule;