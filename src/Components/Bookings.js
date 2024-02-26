import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";

const Bookings = (props) => {

    return (

        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Bookings;

/*Contain BookingForm and additional content before & after the form.*/