import { ActionTypes } from "../constants/action-types"

const initialState = {
    data: []
}

export const action1reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ACTION1TYPE:
            return { data: payload}
        default:
            return state
    }
}