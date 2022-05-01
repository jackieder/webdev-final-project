import React from "react";
import ForecastDay from "./ForecastDay"
import {Link} from "react-router-dom";

const HomeForecast = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <ForecastDay/>
                <ForecastDay/>
                <ForecastDay/>
                <ForecastDay/>
            </div>
        </div>


    )
}

export default HomeForecast