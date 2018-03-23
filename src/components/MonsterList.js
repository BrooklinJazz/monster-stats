import React from 'react';
import { Text } from 'react-native';

class MonsterList extends Component {
    state = { monsters: []}

    componentWillMount() {
        axios.get('http://dnd5eapi.co/api/monsters/')
        .then(response => this.setState({monsters: response.data.results}))
    }

    render() { 
        return ( <Text></Text> )
    }
}
 
export default MonsterList;