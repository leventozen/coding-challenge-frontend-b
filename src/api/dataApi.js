import { handleResponse, handleError, createQueryParams } from "./apiUtils";
const baseUrl = "https://napi.busbud.com" || process.env.REACT_APP_BASE_URL

console.log(process.env.REACT_APP_BASE_URL)
console.log(process.env.REACT_APP_AUTH_TOKEN)
/*
* GET departures by origin, destination and outbound_date
*/
export function getData(origin, destination, outbound_date, _) {
    const queryParams = createQueryParams({ adult: 1})
    const path = `${baseUrl}/x-departures/${origin}/${destination}/${outbound_date.toISOString().slice(0, 10)}?${queryParams}`

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
            'X-Busbud-Token': 'PARTNER_BaASYYHxTxuOINEOMWq5GA'
        },
    };

    return fetch(path, options)
        .then(handleResponse)
        .catch(handleError);
}

/*
* Poll GET departures by origin, destination and outbound_date
*/

export function poll_getData(origin, destination, outbound_date, _) {
    const queryParams = createQueryParams({ adult: 1})
    const path = `${baseUrl}/x-departures/${origin}/${destination}/${outbound_date.toISOString().slice(0, 10)}/poll/?${queryParams}`

    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/',
            'X-Busbud-Token': 'PARTNER_BaASYYHxTxuOINEOMWq5GA'
        },
    };
    
    return fetch(path, options)
        .then(handleResponse)
        .catch(handleError);
}

