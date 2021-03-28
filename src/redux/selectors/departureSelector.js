import { createSelector } from 'reselect'

const departureSelector = state => state.data.departures
const locationSelector = state => state.data.locations

export const selectDepartures = createSelector(
    [departureSelector, locationSelector], (departures, locations) => {
        const _departures = departures || []
        const _locations = locations || []
        return _departures.map(departure => {
            return {
                id: departure.busbud_departure_id,
                departure_time: departure.departure_time,
                arrival_time: departure.arrival_time,
                complete: departure.complete,
                price: `${departure.prices.total} ${departure.prices.currency}`,
                location_name: _locations.find(x => x.id === departure.destination_location_id).name
            }
        })
    }
)