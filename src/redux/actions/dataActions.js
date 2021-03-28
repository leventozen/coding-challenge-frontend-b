import * as types from "./actionTypes";
import * as dataApi from "../../api/dataApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDataSuccess(data) {
    return { type: types.LOAD_GET_DATA_SUCCESS, data };
}

export function loadData() {
    return function(dispatch) {
        dispatch(beginApiCall());
        return dataApi
            .getData('f2m673', 'f25dvk', '2021-04-26', { adult: 1})
            .then(data => {
                dispatch(loadDataSuccess(data));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}
