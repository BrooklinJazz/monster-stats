import React from 'react';
import { Text, View } from 'react-native';

const MonsterStats = ({ stat }) => {
    const {
        name,
        size,
        type,
        alignment,
        armor_class,
        hit_points,
        hit_dice,
        speed,
        strength: str,
        dexterity: dex,
        constitution: con,
        intelligence: int,
        wisdom: wis,
        charisma: cha,
        // START NOTE "CONDITIONAL RENDERING" the following have to be conditionally rendered
        stealth,
        survival,
        perception,
        insight,
        // Below values default to empty string value
        // NOTE may be important when testing their presence for conditional rendering
        damage_vulnerabilities,
        damage_resistances,
        damage_immunities,
        condition_immunities,
        // END NOTE "CONDITIONAL RENDERING"
        senses,
        languages,
        challenge_rating,
        // START NOTE "ARRAYS" the following are expected to be of type Array
        //
        special_abilities,
        actions,
        // legendary actions has to be conditionally rendered
        legendary_actions
        // END NOTE "ARRAYS"

    } = stat
    return (
        <View>
            <Text>{name}</Text>
            <Text>{size} {type} {alignment}</Text>
            {/*SVG LINE*/}
            <Text>{armor_class}</Text>
            <Text>{hit_points} {hit_dice}</Text>
            <Text>{speed}</Text>
            {/* TODO Add Stat Stylings*/}
            <Text>{str}</Text>
            </View>
    )
}

export default MonsterStats;