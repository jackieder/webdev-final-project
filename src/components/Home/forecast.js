import React from "react";

const forecast = (day1, day2, day3) => {
    return (
        <div className="row d-flex justify-content-end align-items-center ps-4">
            <div className="col my-3 ps-5">
                <span className="text-white-50"> {day1 ? day1.weather : ""}</span>
            </div>
            <div className="col my-3 px-0">
                <span className="text-white-50">{day2 ? day2.weather : ""}</span>
            </div>
            <div className="col my-3 px-0">
                <span className="text-white-50">{day3 ? day3.weather : ""}</span>
            </div>

        </div>
    )
}

export default forecast