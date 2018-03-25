import React from 'react';
import {Text} from 'react-native';

const MonsterStats = ({stat}) => {
    return (
        <Text>{stat.name}</Text>
    )
}

export default MonsterStats;