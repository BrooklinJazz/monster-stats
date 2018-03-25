import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import MonsterStatsModal from './MonsterStatsModal';
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from "../actions/index";

class MonsterListing extends Component {
    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
    }

    getMonsterStatsForMonsterModal(url) {
        axios.get(url)
            .then(response => this.props.setActiveMonsterModal(response.data))
    }

    render() {
        const { name, url } = this.props.monster
        return (
            <View>
                <TouchableHighlight
                    onPress={() => {
                        this.getMonsterStatsForMonsterModal(url)
                    }}>
                    <Text>{name}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

function mapStateToProps(state) {
    const { activeMonsterModal } = state.monsters
    return {
        activeMonsterModal
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectCombatant is called, the result should be passed to all
    // of our reducers
    return {
        setActiveMonsterModal: payload =>
            dispatch(actions.setActiveMonsterModal(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterListing);