import React from 'react';
import CalendarItem from '../CalendarItem/CalendarItem';
import './CalendarItems.css';


const CalendarItems = (props) => {
    return (
        <div className="calendarItems">
            {props.events.map(event => <CalendarItem calendarItem={event} />)}
        </div>
    );
}

export default CalendarItems;