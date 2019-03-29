import React from 'react';
import './CalendarItem.css';

const CalendarItem = (props) => {
    return (
        <div className="calendarItem">
        <ul>
            <li className="day">{props.calendarItem.day}</li>
            <li className="month">{props.calendarItem.month}</li>
            <li className="title">{props.calendarItem.title}</li>
        </ul>
    
        </div>
    );
}

export default CalendarItem;