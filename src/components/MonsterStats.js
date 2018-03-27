import React from 'react';
import { Text, View, ScrollView } from 'react-native';
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
        legendary_actions,
        actions,
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
        { val: stat.damage_vulnerabilities, string: 'Damage Vulnerabilites' },
        { val: stat.damage_resistances, string: 'Damage Resistances' },
        { val: stat.damage_immunities, string: 'Damage Immunities' },
        { val: stat.condition_immunities, string: 'Condition Immunities' },
        { val: stat.senses, string: 'Senses' },
        { val: stat.languages, string: 'Languages' },
        { val: stat.challenge_rating, string: 'Challenge Rating' },
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
        <ScrollView>
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
                // test that monster has saves
                !saves.every((save) => { isUndefined(save.mod) }) &&
                <View>
                    {
                        saves.map(save => (
                            typeof save.mod !== 'undefined' && <Text key={save.string}>{save.string} +{save.mod} </Text>
                        ))
                    }
                </View>
            }

            {
                // test that monster has skills
                !skills.every((skill) => { isUndefined(skill.mod) }) &&
                <View>
                    {
                        skills.map(skill => (
                            typeof skill.mod !== 'undefined' && <Text key={skill.string}>{skill.string} +{skill.mod} </Text>
                        ))
                    }
                </View>
            }

            <View>
                {
                    // there should always be a challenge rating property so no `.every()` test is needed
                    properties.map(property => (
                        property.val !== "" && <Text key={property.string}>{property.string}: {property.val} </Text>
                    ))
                }
            </View>

            {
                typeof special_abilities === 'object' &&
                special_abilities.map(ability => (
                    <Text key={ability.name}>{ability.name}. {ability.desc}</Text>
                ))
            }

            {
                actions !== "undefined" &&
                actions.map(action => (
                    <Text key={action.name}>{action.name}. {action.desc}</Text>
                ))
            }

            {
                typeof legendary_actions === 'object' &&
                legendary_actions.map(action => (
                    <Text key={action.name}>{action.name}. {action.desc}</Text>
                ))
            }
        </ScrollView>
    )
}


export default MonsterStats;