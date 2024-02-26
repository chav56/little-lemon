//Add JSX to display a message that the booking has been confirmed.
//Add a route that will allow navigation to the booking confirmation page.

import React from "react";

const ConfirmedBooking = () => {
    return(
        <div className="resConfirm">
            <div>
            <h1>Reservation has been <span>confirmed!</span></h1>
            </div>
        </div>

    )
}

export default ConfirmedBooking;