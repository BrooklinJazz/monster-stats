import Types from "../types";

const INITIAL_STATE = {
    monsters: [],
    activeMonsterModal: {},
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_MONSTERS:
            return {
                ...state,
                monsters: action.payload
            }
        case Types.SET_ACTIVE_MONSTER_MODAL:
            return {
                ...state,
                activeMonsterModal: action.payload
            }
    }
    return state
}