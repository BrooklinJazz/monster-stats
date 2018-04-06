import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions/index";

import MonsterStats from './MonsterStats';
<<<<<<< HEAD

// styling
import { Ionicons } from '@expo/vector-icons';
import {primary, mainBackgroundColor} from '../constants'
=======
import Spinner from 'react-native-loading-spinner-overlay';

// styling
import { Ionicons } from '@expo/vector-icons';
import { primary, mainBackgroundColor } from '../constants'
>>>>>>> featureDebugging

class MonsterStatsModal extends Component {
    render() {
        const { monsterStatsModalVisible: visible, activeMonsterModal: stat } = this.props
        const {
            exitButton,
            exitButtonContainer,
            modalContainerStyles
        } = styles
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                onRequestClose={() => {

                }}>
                <View style={modalContainerStyles} >
                    {
                        Object.keys(stat).length === 0 && stat.constructor === Object ?
                            // Handle Loading while fetching the monster stats
<<<<<<< HEAD
                            <Text>Loading Monster Stats</Text>
                            :
                            // Render When stat object has values in it.
                            <View>
                            {/* 
                                must place Ionicons Below ScrollView for the onPress function to occur
                                position absolute will place Ionicons at the top of the page
                            */}
                            <ScrollView >
                                <MonsterStats stat={stat} />
                            </ScrollView>
=======
                            <View style={{ flex: 1 }}>
                                <Spinner visible={true} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                            </View>
                            :
                            // Render When stat object has values in it.
                            <View>
                                {/*
                                must place Ionicons Below ScrollView for the onPress function to occur
                                position absolute will place Ionicons at the top of the page
                            */}
                                <ScrollView >
                                    <MonsterStats stat={stat} />
                                </ScrollView>
>>>>>>> featureDebugging
                                <View
                                    style={exitButtonContainer}
                                >
                                    <Ionicons
                                        name="md-close"
                                        size={50}
                                        style={exitButton}
                                        onPress={() => this.props.setMonsterModalVisibility(false)} />
                                </View>
                            </View>
                    }
                </View>
            </Modal>
        )
    }
}

const styles = {
    exitButton: {
        color: primary
    },
    exitButtonContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    modalContainerStyles: {
<<<<<<< HEAD
        backgroundColor: mainBackgroundColor
=======
        backgroundColor: mainBackgroundColor,
        minHeight: '100%'
>>>>>>> featureDebugging
    }
}

function mapStateToProps(state) {
    const { activeMonsterModal, monsterStatsModalVisible } = state.monsters
    return {
        activeMonsterModal,
        monsterStatsModalVisible
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectCombatant is called, the result should be passed to all
    // of our reducers
    return {
        setMonsterModalVisibility: payload =>
            dispatch(actions.setMonsterModalVisibility(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterStatsModal);