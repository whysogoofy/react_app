import { ActionTypes } from "../constants/action-types"

const initialState = {
    data: []
}

export const action2reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ACTION2TYPE:
            return { 
                data: [payload]
            }
        default:
            return state
    }
}