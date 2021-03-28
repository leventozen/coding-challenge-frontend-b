import React from "react"

import Departure from './Departure'

const DepartureList = props => {
      return (
        <div>
           {props.departures.length > 0 ? props.departures.map((departure) =>
            <div className={"row mt-5"} key={departure.id}>
                <Departure departure={departure} />
            </div>
        ): ''} 
        </div>
      );
  };
  
  export default DepartureList;