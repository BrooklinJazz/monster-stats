import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from "../actions/index";
import { Text, View } from 'react-native';
import MonsterListing from './MonsterListing'

class MonsterList extends Component {

    componentWillMount() {
        axios.get('http://dnd5eapi.co/api/monsters/')
            .then(response => this.props.getMonsters(response.data.results))
    }

    renderMonsterListings() {
        const { monsters = [] } = this.props
        return monsters.map(monster => {
            return <MonsterListing key={monster.name} monster={monster} />
        })
    }

    render() {
        const { monsters = [] } = this.props
        return (
            <View>
                {
                monsters.length >= 1 ?
                this.renderMonsterListings()
                :
                <Text>Loading</Text>
                }
            </View>
        )
    }
}

function mapStateToProps(state) {
    const monsters = state.monsters.monsters
    return {
        monsters
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectCombatant is called, the result should be passed to all
    // of our reducers
    return {
        getMonsters: payload =>
            dispatch(actions.getMonsters(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList);