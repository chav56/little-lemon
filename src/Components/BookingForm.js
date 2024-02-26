import React from "react";
import { useState } from "react";

/* Create form */
//Apply the validation to each form input field
//Implement client-side validation using React

const BookingForm = (props) => {

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("")

    const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
    };

    const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="res-date">Choose date:</label>
                            <input id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                        </div>
                        <div>
                            <label htmlFor="res-time">Choose time:</label>
                                <select id="res-time " value={times} onChange={(e) => setTimes(e.target.value)} required>
                                    <option value="">Select a Time</option>
                                    {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                                </select>
                        </div>
                        <div>
                            <label htmlFor="guests">Number of guests:</label>
                            <input min="1" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required  />
                        </div>
                        <div>
                            <label htmlFor="occasion">Occasion:</label>
                                <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                        </div>
                        <div className="btnReserve">
                            <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
        </section>
</header>
    );
};

export default BookingForm;
