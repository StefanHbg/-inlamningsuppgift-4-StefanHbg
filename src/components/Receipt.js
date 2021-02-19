import React, { useState, useEffect } from 'react';
import eventsList from '../assets/events.json';
import { useParams } from 'react-router-dom';

function Receipt() {

    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        const foundEvent = eventsList.filter((eventObj) => {
            return eventObj.id === parseInt(id);
        });
        const editedEvent = {
            ...foundEvent[0],
            timeFrom: foundEvent[0].time.slice(0, 5),
            timeTo: foundEvent[0].time.slice(7, 14),
            dateShortened: foundEvent[0].date.slice(0, 6)
        }
        setEvent(editedEvent);
    }, [])
    
    return (
        <div className="receipt-div-header">
            <div>
                <p className="receipt-paragraph">Tack för din <br></br>beställning</p>
            </div>       
            <table className="table-container">
                <thead>
                    <tr className="thead-tr">
                        <td className="table-small-heading">WHAT</td>
                        <td className="thead-td">{event.title}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tbody-tr">
                        <td className="table-small-heading">WHERE</td>
                        <td className="tbody-tr-td">{event.location}</td>
                    </tr>
                </tbody>
                <tfoot className="tfoot-container">
                    <tr className="tfoot-tr-container">
                        <td className="table-small-heading table-small-heading-2">WHEN</td>
                        <td className="table-small-heading table-small-heading-2">FROM</td>
                        <td className="table-small-heading table-small-heading-2">TO</td>
                    </tr>
                    <tr className="tfoot-tr-container">
                        <td className="tfoot-2-td">{event.dateShortened}</td>
                        <td className="tfoot-2-td">{event.timeFrom}</td>
                        <td className="tfoot-2-td">{event.timeTo}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Receipt;