import React from 'react';
import { Text, View, ScrollView, Platform } from 'react-native';
import { isUndefined } from '../helpers';
import Rule from './Rule';

import RedAttributeText from './RedAttributeText'
import BlackAttributeText from './BlackAttributeText'
const Fraction = require('fraction.js');

// styling
import { primary, bodyTextSize } from '../constants'

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
        headingOneStyle,
        headingOneContainerStyle,
        horizontalRule,
        abilityContainerStyles,
        abilityTextStyles,
        elementPadding,
        firstLetter
    } = styles
    console.log(saves.every((save) => { isUndefined(save.mod) }))

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={headingStyles}>{name}</Text>
            <Text style={subHeadingStyles}>{size} {type} {alignment}</Text>

            <Rule />

            {/*Basic Info*/}
            <View style={elementPadding}>
                <RedAttributeText title="Armor Class" text={armor_class} ></RedAttributeText>

                <RedAttributeText title="Hit Points" text={[hit_points, hit_dice].join(' ')} ></RedAttributeText>
                <RedAttributeText title="Speed" text={speed} ></RedAttributeText>
            </View>


            <Rule />

            {/* TODO Add Ability Stylings*/}
            {
                <View style={elementPadding}>
                    <View style={abilityContainerStyles} >
                        {
                            abilities.map(ability => (
                                <Text style={abilityTextStyles} key={ability.string}>{ability.string}{"\n"} {ability.score} </Text>
                            ))
                        }
                    </View>
                </View>
            }

            <Rule />

            <View style={elementPadding}>

                {
                    // test that monster has saves
                    saves.every((save) => { save.mod !== 'undefined' }) &&
                    <View >
                        <Text style={redAttributeTextStyles} >
                            <Text style={redAttributeTitleStyles} >Saves </Text>
                            {

                                saves.map(save => (
                                    console.log(save.mod),
                                    // typeof save.mod === 'number' &&
                                    <Text key={save.string} >{save.string} +{save.mod} </Text>
                                ))
                            }
                        </Text>
                    </View>
                }

                {
                    // test that monster has skills
                    skills.every((skill) => { skill.mod !== 'undefined' }) &&
                    <View >
                        <Text style={redAttributeTextStyles} >
                            <Text style={redAttributeTitleStyles} >Skills </Text>
                            {
                                skills.map(skill => (
                                    typeof skill.mod !== 'undefined' &&
                                    <Text key={skill.string} style={redAttributeTextStyles} >{skill.string} +{skill.mod} </Text>
                                ))
                            }
                        </Text>
                    </View>
                }

                <View>
                    {
                        // there should always be a challenge rating property so no `.every()` test is needed
                        properties.map(property => {
                            if (property.val !== "undefined" && property.val !== "") {
                                // handle Challenge Rating
                                if (typeof property.val === 'number') {
                                    const propertyFraction = new Fraction(property.val).toFraction(true)
                                    return <RedAttributeText key={property.string} title={property.string} text={propertyFraction} ></RedAttributeText>
                                }
                                // other properties
                                return <RedAttributeText key={property.string} title={property.string} text={property.val < 1 ? property.val : property.val} ></RedAttributeText>
                            }
                        })
                    }
                </View>
            </View>
            {
                special_abilities !== "undefined" &&
                typeof special_abilities === 'object' &&
                <View>
                    <Rule />
                    <View style={elementPadding}>
                        {
                            special_abilities.map((ability) => (
                                <BlackAttributeText key={ability.name} title={ability.name} text={ability.desc} ></BlackAttributeText>
                            ))
                        }
                    </View>
                </View>
            }

            <View style={headingOneContainerStyle} >
                <Text style={[headingOneStyle, firstLetter]} >A</Text>
                <Text style={headingOneStyle} >ctions</Text>
            </View>
            <View style={horizontalRule} ></View>

            {
                actions !== "undefined" &&
                <View style={elementPadding}>
                    {
                        actions.map((action) => (
                            <BlackAttributeText key={action.name} title={action.name} text={action.desc} ></BlackAttributeText>
                        ))
                    }
                </View>
            }

            {
                legendary_actions !== "undefined" &&
                typeof legendary_actions === 'object' &&
                <View>
                    <View style={headingOneContainerStyle} >
                        <Text style={[headingOneStyle, firstLetter]} >L</Text>
                        <Text style={headingOneStyle} >egendary Actions</Text>
                    </View>
                    <View style={horizontalRule} ></View>
                </View>
            }

            {
                legendary_actions !== "undefined" &&
                typeof legendary_actions === 'object' &&
                <View style={elementPadding}>
                    {
                        legendary_actions.map(action => (
                            <BlackAttributeText key={action.name} title={action.name} text={action.desc} ></BlackAttributeText>
                        ))
                    }
                </View>
            }
        </ScrollView>
    )
}



const bottomPadding = 10
const headingOneText = 21
let headingOneFirstLetter = headingOneText
const styles = {
    contentContainer: {
        // TODO 40 works as a tempory margin, check with other devices
        // marginBottom: 40,
    },
    headingStyles: {
        fontSize: 23,
        color: primary,
        fontFamily: (Platform.OS === 'ios') ? 'Georgia' : 'serif',
    },
    subHeadingStyles: {
        fontSize: 10,
        fontStyle: 'italic',
        paddingBottom: bottomPadding,
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
    headingOneContainerStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    headingOneStyle: {
        fontSize: headingOneText,
        letterSpacing: 1,
        fontFamily: 'sans-serif-light',
        color: primary
    },
    firstLetter: {
        fontSize: headingOneText + 3,
        bottom: 3,
        paddingLeft: 5,
    },
    horizontalRule: {
        width: '100%',
        height: 1,
        backgroundColor: 'red',
    },
    abilityContainerStyles: {
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    abilityTextStyles: {
        color: primary,
        fontWeight: 'bold',
    },
    elementPadding: {
        paddingVertical: 7
    },
}


export default MonsterStats;