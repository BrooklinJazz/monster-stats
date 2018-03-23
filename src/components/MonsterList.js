import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions/index";

class MonsterList extends Component {
    // state = { monsters: [] }

    componentWillMount() {
        this.props.getMonsters('test data from monster list')
    }

    render() {
        return (<Text>Dummy Text</Text>)
    }
}

function mapStateToProps(state) {
    const {monsters} = state.monsters;
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