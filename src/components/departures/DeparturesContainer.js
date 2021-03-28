import React from "react"


const DeparturesContainer = props => {
    // const dataExists = !!(props.departures && props.departures.length > 0)

      return (
        <div>
           {props.departures.map((departure) =>
            <div key={departure.id}>
                <>
                    {departure.location_name}
                </>
            </div>
        )}
        </div>
      );
  };
  
  export default DeparturesContainer;