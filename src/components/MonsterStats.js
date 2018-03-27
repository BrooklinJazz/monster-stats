import React from 'react';
import { Text, View } from 'react-native';
import { isUndefined } from '../helpers'

const MonsterStats = ({ stat }) => {
    const {
        // Basic Info
        name,
        size,
        type,
        alignment,
        armor_class,
        hit_points,
        hit_dice,
        speed,
        // Arrays of Objects
        special_abilities,
        actions,
        legendary_actions
    } = stat
    const abilities = [
        { score: stat.strength, string: 'STR' },
        { score: stat.dexterity, string: 'DEX' },
        { score: stat.constitution, string: 'CON' },
        { score: stat.intelligence, string: 'INT' },
        { score: stat.wisdom, string: 'WIS' },
        { score: stat.charisma, string: 'CHA' }
    ]
    const properties = [
        // check if property is empty string
        { property: stat.damage_vulnerabilities, string: 'Damage Vulnerabilites' },
        { property: stat.damage_resistances, string: 'Damage Resistances' },
        { property: stat.damage_immunities, string: 'Damage Immunities' },
        { property: stat.condition_immunities, string: 'Condition Immunities' },
        { property: stat.senses, string: 'Senses' },
        { property: stat.languages, string: 'Languages' },
        { property: stat.challenge_rating, string: 'Challenge Rating' },
    ]
    const saves = [
        // check if mod is undefined
        { mod: stat.strength_save, string: 'STR' },
        { mod: stat.dexterity_save, string: 'DEX' },
        { mod: stat.constitution_save, string: 'CON' },
        { mod: stat.intelligence_save, string: 'INT' },
        { mod: stat.wisdom_save, string: 'WIS' },
        { mod: stat.charisma_save, string: 'CHA' }
    ]
    const skills = [
        // check if mod is undefined
        { mod: stat.athletics, string: 'Athletics' },
        { mod: stat.acrobatics, string: 'Acrobatics' },
        { mod: stat.sleight_of_hand, string: 'Sleight Of Hand' },
        { mod: stat.stealth, string: 'Stealth' },
        { mod: stat.arcana, string: 'Arcana' },
        { mod: stat.history, string: 'History' },
        { mod: stat.investigation, string: 'Investigation' },
        { mod: stat.nature, string: 'Nature' },
        { mod: stat.religion, string: 'Religion' },
        { mod: stat.animal_handling, string: 'Animal Handling' },
        { mod: stat.insight, string: 'Insight' },
        { mod: stat.medicine, string: 'Medicine' },
        { mod: stat.perception, string: 'Perception' },
        { mod: stat.survivial, string: 'Survival' },
        { mod: stat.deception, string: 'Deception' },
        { mod: stat.intimidation, string: 'Intimidation' },
        { mod: stat.performance, string: 'Performance' },
        { mod: stat.persuasion, string: 'Persuasion' },
    ]

    return (
        <View>
            <Text>{name}</Text>
            <Text>{size} {type} {alignment}</Text>
            {/*Basic Info*/}
            <Text>Armor Class {armor_class}</Text>
            <Text>Hit Points {hit_points} {hit_dice}</Text>
            <Text>Speed {speed}</Text>
            {/* TODO Add Ability Stylings*/}
            {
                abilities.map(ability => (
                    <Text key={ability.string}>{ability.string} {ability.score} </Text>
                ))
            }
            {
                // test that monster has skills
                !skills.every((skill) => { isUndefined(skill.mod) }) &&
                    {
                        skills.map(skill => (
                            typeof skill.mod !== 'undefined' && <Text key={skill.string}>{skill.string} +{skill.mod} </Text>
                        ))
                    }
            }
            <Text><Text>a</Text></Text>
            <Text><Text>a</Text></Text>
        </View>
    )
}


export default MonsterStats;