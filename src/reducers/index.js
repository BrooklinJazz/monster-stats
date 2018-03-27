import { combineReducers } from 'redux';
import MonsterReducer from './MonsterReducer'

export default combineReducers({
    monsters: MonsterReducer
})