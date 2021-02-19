import React, { useState, useEffect } from 'react';
import eventsList from '../assets/events.json';
import { useParams, useHistory } from 'react-router-dom';

function Order() {
    
    const [event, setEvent] = useState([]);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        const foundEvent = eventsList.filter((eventObj) => {
            return eventObj.id === parseInt(id);
        });
        setEvent(foundEvent[0]);
    }, [])

    return (
        <div className="order-div-header">
            <div className="order-heading-title-div">
                <p className="order-heading-title">You are about to score <br></br>some tickets to</p>
            </div>
            <div>
                <p className="order-title">{ event.title }</p>
                <p className="order-date">{ event.date } kl {event.time}</p>
                <p className="order-location">@ { event.location }</p>
            </div>
            <div>
                <p className="order-price">{ event.price }</p>
            </div>
            <button className="order-button" onClick={() => history.push(`/receipt/${event.id}`)} type='submit'>Beställ</button>
        </div>
    )
}

export default Order;