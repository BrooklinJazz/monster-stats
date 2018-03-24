import React from 'react';
import { Text } from 'react-native';

const MonsterListing = ({ monster }) => {
    const { name, url } = monster
    return (
        <Text>{name}</Text>
    )
}

export default MonsterListing;