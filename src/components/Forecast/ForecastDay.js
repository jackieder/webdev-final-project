import React from "react";
import {Link} from "react-router-dom";

const ForecastDay = ({
    forecast = {
        weather: "sunny",
        day: "today",
    }
                 }) => {
    return (
        <div className="card text-white bg-secondary mb-3 mt-3 col-3">
            <div className="card-header">date</div>
            <div className="card-body">
                <i className="fa fa-solid fa-sun fa-2xl"></i>
                <h4 className="card-title">Temperature</h4>
                <h5 className="card-title">Short weather description</h5>

            </div>
        </div>
    )
}

export default ForecastDay