import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dataReducer(state = initialState.data, action) {
    switch (action.type) {
        case types.LOAD_GET_DATA_SUCCESS:
            return action.data;
        default:
            return state;
    }
}
