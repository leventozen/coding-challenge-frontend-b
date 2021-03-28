import React from 'react'


const Departure = ({ departure }) => {
    return (
        <div className={"col-md-12"}>            
            <div className={"card"}>
                <div className={"card-body"}>
                <h5 className={"card-title"}><b>Location:</b> {departure.location_name}</h5>
                <ul className={"list-group"}>
                    <li className={"list-group-item"}><b>Departure Time:</b> { new Date(departure.departure_time).toDateString() }</li>
                    <li className={"list-group-item"}><b>Arrival Time:</b> { new Date(departure.arrival_time).toDateString() }</li>
                    <li className={"list-group-item"}><b>Price:</b> { departure.price }</li>
                </ul>
                </div>
            </div>
        </div>
    )
}


export default Departure