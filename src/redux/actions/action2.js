import { ActionTypes } from "../constants/action-types";

export const action2 = (data) => {
    return {
        type: ActionTypes.ACTION2TYPE,
        payload: data
    }
}