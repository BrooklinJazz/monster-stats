import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight } from 'react-native';
import { connect } from "react-redux";

class MonsterStatsModal extends Component {
    componentDidMount() {
        console.log('Final Check?', this.props)
    }

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
            <View
            // style={{ marginTop: 22 }}
            >
                <View>
                    <Text>Hello World!</Text>

                    <TouchableHighlight
                        // onPress={() => console.log('connect this function to close modal and set visible to false')}
                    >
                        <Text>Hide Modal{stat.name}</Text>
                    </TouchableHighlight>
                </View>
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

export default connect(mapStateToProps)(MonsterStatsModal);