import { ActionTypes } from "../constants/action-types";

export const action1 = (data) => {
    return {
        type: ActionTypes.ACTION1TYPE,
        payload: data
    }
}