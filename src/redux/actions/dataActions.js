import * as types from "./actionTypes";
import * as dataApi from "../../api/dataApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadDataSuccess(data) {
    return { type: types.LOAD_GET_DATA_SUCCESS, data };
}

export function loadPollDataSuccess(data) {
    return { type: types.LOAD_POLL_DATA_SUCCESS, data };
}

export function loadData(origin, destination, outboundDate) {
    return function(dispatch) {
        dispatch(beginApiCall());
        return dataApi
            .getData(origin, destination, outboundDate)
            .then(data => {
                dispatch(loadDataSuccess(data));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function loadPollingData(origin, destination, outboundDate) {
    return function(dispatch) {
        dispatch(beginApiCall());
        return dataApi
            .poll_getData(origin, destination, outboundDate)
            .then(data => {
                dispatch(loadPollDataSuccess(data));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}
