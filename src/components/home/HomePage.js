import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadData } from "../../redux/actions/dataActions";
import { selectDepartures } from "../../redux/selectors/departureSelector"
import { useInterval } from "../../hooks/useInterval";
import DeparturesContainer from "../departures"

const mapStateToProps = state => {
    return {
        departures: selectDepartures(state),
    };
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        loadData: () => dispatch(loadData())
    };
}

function HomePage ({ departures, loadData }) {

    const fetchData = async () => {
        await loadData()
    }

    // useInterval(() => {fetchData();}, 2000); ?

    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div>
            <DeparturesContainer departures={departures}/>
        </div>
    )}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);



