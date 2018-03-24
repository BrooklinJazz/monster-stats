import Types from "../types";

const INITIAL_STATE = {
    monsters: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_MONSTERS:
            return {
                ...state,
                monsters: action.payload
            }
    }
    return state
}