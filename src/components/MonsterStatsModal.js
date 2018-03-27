import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions/index";

import MonsterStats from './MonsterStats';

// styling
import Colors, { primary } from '../constants'
import { Ionicons } from '@expo/vector-icons';

class MonsterStatsModal extends Component {
    render() {
        const { monsterStatsModalVisible: visible, activeMonsterModal: stat } = this.props
        const {
            exitButton,
            exitButtonContainer
        } = styles
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                onRequestClose={() => {

                }}>
                <View>
                    {
                        Object.keys(stat).length === 0 && stat.constructor === Object ?
                            // Handle Loading while fetching the monster stats
                            <Text>Loading Monster Stats</Text>
                            :
                            // Render When stat object has values in it.
                            <View>
                            {/* 
                                must place Ionicons Below ScrollView for the onPress function to occur
                                position absolute will place Ionicons at the top of the page
                            */}
                            <ScrollView>
                                <MonsterStats stat={stat} />
                            </ScrollView>
                                <View
                                    style={exitButtonContainer}
                                >
                                    <Ionicons
                                        name="md-close"
                                        size={50}
                                        color="black"
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