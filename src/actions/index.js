import Types from "../types";

const createAction = (type, params = null) => ({ type, ...params });

export const getMonsters = payload =>
createAction(Types.GET_MONSTERS, { payload })