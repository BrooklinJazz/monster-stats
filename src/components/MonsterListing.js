import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import MonsterStatsModal from './MonsterStatsModal';
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from "../actions/index";

// TODO This file should be able to be converted to a functional component by
// passing getMonsterStatsForMonsterModal() as a prop from MonsterList.

const MonsterListing = ({onPress, monster}) => {
    return (
        <View>
            <TouchableHighlight
                onPress={onPress}>
                <Text>{monster.name}</Text>
            </TouchableHighlight>
        </View>
    )
}
 
export default MonsterListing;