import React, { forwardRef, useState } from "react";
import { connect } from "react-redux";
import { loadData, loadPollingData } from "../../redux/actions/dataActions";
import { selectDepartures } from "../../redux/selectors/departureSelector"
import { useInterval } from "../../hooks/useInterval";
import Loader from 'react-loader-spinner';
import DepartureList from "../departures"
import DatePicker from "react-datepicker";

const mapStateToProps = state => {
    return {
        departures: selectDepartures(state),
        apiCallsInProgress: state.apiCallsInProgress,
        isCompleted: state.isCompleted
    };
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        loadData: (origin, destination, outboundDate) => dispatch(loadData(origin, destination, outboundDate)),
        loadPollingData: (origin, destination, outboundDate) => dispatch(loadPollingData(origin, destination, outboundDate))
    };
}

function HomePage ({ departures, apiCallsInProgress, loadData, loadPollingData, isCompleted }) {

    const [origin, setOrigin] = useState('f2m673')
    const [destination, setDestination] = useState('f25dvk')
    const [outboundDate, setOutboundDate] = useState(new Date('2021-04-26'))

    const fetchData = async (origin, destination, outboundDate) => {
        await loadData(origin, destination, outboundDate)
    }

    const pollData = async (origin, destination, outboundDate) => {
        await loadPollingData(origin, destination, outboundDate)
    }

    useInterval(() => {
        pollData()
      }, isCompleted ? 2000 : null);

    const CustomDatePickerInput = forwardRef(
        ({ value, onClick }, ref) => (
          <button className="btn btn-primary" onClick={onClick} ref={ref}>
            {value}
          </button>
        ),
      );
    CustomDatePickerInput.displayName = 'CustomDatePickerInput'

    return (
        <div className={"container text-center"}>
            <div className={"home"}>
                <img className={"img-fluid"} src={"https://cloud.githubusercontent.com/assets/1574577/12971188/13471bd0-d066-11e5-8729-f0ca5375752e.png"} />
                <h1 className={"display-4 text-white"}>It will be hot this summer in Montreal with the Osheaga festival! </h1>
                <hr className={"my-4"} />
                <p>Here you can take your ticket with competitive prices!</p>
                <div className={"mx-auto"}>
                        <DatePicker selected={outboundDate} onChange={date => setOutboundDate(date)} customInput={<CustomDatePickerInput />} />
                </div>
                
                <button onClick={() => { fetchData(origin, destination, outboundDate) } } className={"btn btn-secondary mt-2"}>Show me!</button>
            
                { apiCallsInProgress > 0 ? 
                <Loader type="Hearts" color="#FFFFFF" height={120} width={120}/> :
                departures.length > 0 ? 
                <DepartureList departures={departures} /> : '' }
            </div>
        </div>
    )}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);



