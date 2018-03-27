import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { isUndefined } from '../helpers';
import TaperedRule from './TaperedRule';

// styling
import Color, {primary} from '../constants'

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

    const {
        redAttributeTitleStyles,
        redAttributeTextStyles,
        blackAttributeTitleStyles,
        blackAttributeTextStyles,
        headingStyles,
        subHeadingStyles,
        heading2,
        horizontalRule,
        abilityContainerStyles,
        abilityTextStyles,
    } = styles
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={headingStyles}>{name}</Text>
            <Text style={subHeadingStyles}>{size} {type} {alignment}</Text>

            <TaperedRule />

            {/*Basic Info*/}
            <Text style={redAttributeTextStyles} >
                <Text style={redAttributeTitleStyles} >Armor Class</Text> {armor_class}
            </Text>
            <Text style={redAttributeTextStyles} >
                <Text style={redAttributeTitleStyles} >Hit Points</Text> {hit_points} {hit_dice}
            </Text>
            <Text style={redAttributeTextStyles} >
                <Text style={redAttributeTitleStyles} >Speed</Text> {speed}
            </Text>

            <TaperedRule />

            {/* TODO Add Ability Stylings*/}
            {
                <View style={abilityContainerStyles} >
                {
                    abilities.map(ability => (
                        <Text style={abilityTextStyles} key={ability.string}>{ability.string}{"\n"} {ability.score} </Text>
                    ))
                }
                </View>
            }

            <TaperedRule />

            {
                // test that monster has saves
                !saves.every((save) => { isUndefined(save.mod) }) &&
                <View >
                    <Text style={redAttributeTextStyles} >
                        <Text style={redAttributeTitleStyles} >Saves </Text>
                        {
                            saves.map(save => (
                                typeof save.mod !== 'undefined' &&
                                <Text key={save.string} style={redAttributeTextStyles} >{save.string} +{save.mod} </Text>
                            ))
                        }
                    </Text>
                </View>
            }

            {
                // test that monster has skills
                !skills.every((skill) => { isUndefined(skill.mod) }) &&
                <View >
                    <Text style={redAttributeTextStyles} >
                        <Text style={redAttributeTitleStyles} >Skills </Text>
                        {
                            skills.map(skill => (
                                typeof skill.mod !== 'undefined' &&
                                    <Text key={skill.string} style={redAttributeTextStyles} >{skill.string} +{skill.mod } </Text>
                            ))
                        }
                    </Text>
                </View>
            }

            <View>
                {
                    // there should always be a challenge rating property so no `.every()` test is needed
                    properties.map(property => (
                        property.val !== "" &&
                        <Text key={property.string} style={redAttributeTextStyles}>
                            <Text style={redAttributeTitleStyles} >{property.string}</Text> {property.val}
                        </Text>
                    ))
                }
            </View>

            {
                special_abilities !== "undefined" &&
                typeof special_abilities === 'object' &&
                <View>
                    <TaperedRule />
                    {
                        special_abilities.map((ability) => (
                            <Text key={ability.name} style={blackAttributeTextStyles} >
                                <Text style={blackAttributeTitleStyles} >{ability.name}.</Text> {ability.desc}
                            </Text>
                        ))
                    }
                </View>
            }

            <Text style={heading2} >Actions</Text>
            <View style={horizontalRule} ></View>

            {
                actions !== "undefined" &&
                <View>
                    {
                        actions.map((action) => (
                            <Text key={action.name} style={blackAttributeTextStyles} >
                                <Text style={blackAttributeTitleStyles}>{action.name}.</Text> {action.desc}
                            </Text>
                        ))
                    }
                </View>
            }

            {
                legendary_actions !== "undefined" &&
                <View>
                    <Text style={heading2} >Legendary Actions</Text>
                    <View style={horizontalRule} ></View>
                </View>
            }

            {
                legendary_actions !== "undefined" &&
                typeof legendary_actions === 'object' &&
                legendary_actions.map(action => (
                    <Text key={action} style={blackAttributeTextStyles} >
                        <Text style={blackAttributeTitleStyles}>{action.name}.</Text> {action.desc}
                    </Text>
                ))
            }
        </ScrollView>
    )
}


const bodyTextSize = 12
const styles = {
    contentContainer: {
        // TODO 40 works as a tempory margin, check with other devices
        paddingBottom: 40
    },
    headingStyles: {
        fontSize: 23,
        color: primary,
    },
    subHeadingStyles: {
        fontSize: 10,
        fontStyle: 'italic',
    },
    redAttributeTitleStyles: {
        fontWeight: 'bold',
    },
    redAttributeTextStyles: {
        fontSize: bodyTextSize,
        color: primary,
    },
    blackAttributeTitleStyles: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    blackAttributeTextStyles: {
        fontSize: bodyTextSize,
    },
    headingOneStyle: {
        fontSize: 21,
        textIndent: 5
    },
    horizontalRule: {
        width: '100%',
        height: 1,
        backgroundColor: primary,
    },
    abilityContainerStyles: {
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    abilityTextStyles: {
        color: primary,
        fontWeight: 'bold',
    }
}


export default MonsterStats;