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
        athletics,
        acrobatics,
        sleight_of_hand,
        stealth,
        arcana,
        history,
        investigation,
        nature,
        religion,
        animal_handling,
        insight,
        medicine,
        perception,
        survivial,
        deception,
        intimidation,
        performance,
        persuasion,
        // NOTE may be important when testing their presence for conditional rendering, 
        // while the above values defaulted to undefined, the below values default to empty strings or arrays
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
    const skills = [
        { mod: athletics, string: 'Athletics' },
        { mod: acrobatics, string: 'Acrobatics' },
        { mod: sleight_of_hand, string: 'Sleight Of Hand' },
        { mod: stealth, string: 'Stealth' },
        { mod: arcana, string: 'Arcana' },
        { mod: history, string: 'History' },
        { mod: investigation, string: 'Investigation' },
        { mod: nature, string: 'Nature' },
        { mod: religion, string: 'Religion' },
        { mod: animal_handling, string: 'Animal Handling' },
        { mod: insight, string: 'Insight' },
        { mod: medicine, string: 'Medicine' },
        { mod: perception, string: 'Perception' },
        { mod: survivial, string: 'Survival' },
        { mod: deception, string: 'Deception' },
        { mod: intimidation, string: 'Intimidation' },
        { mod: performance, string: 'Performance' },
        { mod: persuasion, string: 'Persuasion' },
    ]
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
            <Text>{dex}</Text>
            <Text>{con}</Text>
            <Text>{int}</Text>
            <Text>{wis}</Text>
            <Text>{cha}</Text>
            {/*Skills*/}
            <Text>
                {
                    skills.map(skill => (
                        typeof skill.mod !== 'undefined' && <Text key={skill.string}>{skill.string} +{skill.mod} </Text>
                    ))
                }
            </Text>
        </View>
    )
}

export default MonsterStats;