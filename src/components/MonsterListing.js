import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MonsterStatsModal from './MonsterStatsModal';
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from "../actions/index";

import { checkNumberIsEven } from '../helpers'
import { primaryButtonColor, primary } from '../constants'

// TODO This file should be able to be converted to a functional component by
// passing getMonsterStatsForMonsterModal() as a prop from MonsterList.

const MonsterListing = ({ onPress, monster }) => {
    return (
        <View >
            <TouchableOpacity
                style={[styles.buttonStyles, { backgroundColor: primaryButtonColor }]}
                onPress={onPress}>
                <Text>{monster.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

styles = {
    buttonStyles: {
        width: '100%',
        borderWidth: 1,
        borderColor: primary,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default MonsterListing;