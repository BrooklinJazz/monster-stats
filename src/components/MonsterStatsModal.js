import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions/index";

class MonsterStatsModal extends Component {
    render() {
        const { monsterStatsModalVisible: visible, activeMonsterModal: stat } = this.props
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                    <View>
                        {
                            Object.keys(stat).length === 0 && stat.constructor === Object ?
                                <Text>Loading Monster Stats</Text>
                                :
                                <TouchableHighlight
                                    onPress={() => this.props.setMonsterModalVisibility(false)}
                                >
                                    <Text>Close Button</Text>
                                </TouchableHighlight>
                }
                    </View>
            </Modal>
        )
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