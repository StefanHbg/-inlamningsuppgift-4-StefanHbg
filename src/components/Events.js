import React, { useState, useEffect } from 'react';
import eventsList from '../assets/events.json';
import { useHistory } from 'react-router-dom';

function Events() {

    const [events, setEvents] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setEvents(eventsList);
    }, [])

    return (
        <div className="events-div-header">
            <h1 className="events-h1">Events</h1>
            { events.map((event) => {
                return (
                    <div onClick={() => history.push(`/order/${event.id}`)} className="events-date" key={event.id}>
                        <div className="events-date-child">
                                <p className="events-paragraph">{event.date.slice(0, 3)}</p>
                                <hr className="hr-styling"/>
                                <p className="events-paragraph">{event.date.slice(3, 6)}</p>
                            </div>
                        <div>
                            <p className="event-desc">{ event.title }</p>
                            <p className="event-desc event-desc-location">{ event.location }</p>
                        <div className="event-desc-div">
                            <p className="event-desc event-desc-time">{ event.time }</p>
                            <p className="event-desc-price">{ event.price }</p>
                        </div>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default Events;
