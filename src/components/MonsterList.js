import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from "../actions/index";
import { Text, View, FlatList, TextInput } from 'react-native';
import MonsterListing from './MonsterListing'
import Spinner from 'react-native-loading-spinner-overlay';

class MonsterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            displayedMonsters: []
        }
    }

    componentWillMount() {
        if (this.props.monsters.length >= 0) {
            axios.get('http://dnd5eapi.co/api/monsters/')
                .then(response => this.props.getMonsters(response.data.results))
        }
    }

    getMonsterStatsForMonsterModal(url) {
        // Show the Modal before the content has loaded in
        this.props.setMonsterModalVisibility(true)
        // get the content for MonsterStatModal
        axios.get(url)
            .then(response => this.props.setActiveMonsterModal(response.data))
    }

    _handleInputChange(search) {
        this.refs._FlatList.scrollToOffset({ x: 0, y: 0, animated: true })
        this.setState({ search })
        const displayedMonsters = this.props.monsters.filter(monster => (
            monster.name.toLowerCase().includes(search.toLowerCase())
        ))
        this.setState({ displayedMonsters: displayedMonsters })
    }

    render() {
        const { monsters = [] } = this.props
        const { search, displayedMonsters } = this.state
        return (
            <View>
                <TextInput
                    style={{ height: 40, paddingLeft: 10, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(search) => this._handleInputChange(search)}
                    value={this.state.search}
                    placeholder='i.e. "Dragon"'
                />
                {
                    monsters.length >= 1 ?
                        <FlatList
                            ref='_FlatList'
                            data={
                                // handle case where the search is empty
                                search.length === 0 ? monsters : displayedMonsters
                            }
                            renderItem={({ item, index }) =>
                                <MonsterListing
                                    onPress={() => this.getMonsterStatsForMonsterModal(item.url)}
                                    key={item.name}
                                    monster={item}
                                    index={index} />
                            }
                            keyExtractor={(item, index) => index}
                        />
                        :
                        <View style={{ flex: 1 }}>
                            <Spinner visible={true} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                        </View>
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
        setActiveMonsterModal: payload =>
            dispatch(actions.setActiveMonsterModal(payload)),
        setMonsterModalVisibility: payload =>
            dispatch(actions.setMonsterModalVisibility(payload)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList);