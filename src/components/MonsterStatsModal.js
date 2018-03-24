import React from 'react';
import { Modal, Text, View, TouchableHighlight } from 'react-native';

const MonsterStatsModal = ({ visible, onPress }) => {
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
                        onPress={onPress}
                    >
                        <Text>Hide Modal</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export default MonsterStatsModal;