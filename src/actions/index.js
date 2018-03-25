import Types from "../types";

const createAction = (type, params = null) => ({ type, ...params });

export const getMonsters = payload =>
createAction(Types.GET_MONSTERS, { payload })

export const setActiveMonsterModal = payload =>
createAction(Types.SET_ACTIVE_MONSTER_MODAL, { payload })

export const setMonsterModalVisibility = payload =>
createAction(Types.SET_MONSTER_MODAL_VISIBILITY, { payload })