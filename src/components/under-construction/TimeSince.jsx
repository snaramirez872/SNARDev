import React, { useEffect, useState } from 'react';
import '../styles/UC.css';

export default function TimeSince({ targDate }) { // targDate == Target Date
    const paddedZero = (num) => (num < 10 ? `0${num}` : num); // pads a zero if any value is less than 10

    const calcTime = () => {
        let rightNow = new Date();
        let targ = new Date(targDate);
        let diff = rightNow - targ;
        
        // Getting the actual values
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = paddedZero(Math.floor((diff / (1000 * 60 * 60)) % 24));
        let minutes = paddedZero(Math.floor((diff / (1000 * 60)) % 60));
        let seconds = paddedZero(Math.floor((diff / 1000) % 60));
        
        return { days, hours, minutes, seconds };
    };
    
    const [timeSince, setTimeSince] = useState(calcTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeSince(calcTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Time">
            <div className="card">
                <div className="label">Days</div>
                <div className="value">{timeSince.days}</div>
            </div>
            <div className="colon">:</div>
            <div className="card">
                <div className="label">Hours</div>
                <div className="value">{timeSince.hours}</div>
            </div>
            <div className="colon">:</div>
            <div className="card">
                <div className="label">Minutes</div>
                <div className="value">{timeSince.minutes}</div>
            </div>
            <div className="colon">:</div>
            <div className="card">
                <div className="label">Seconds</div>
                <div className="value">{timeSince.seconds}</div>
            </div>
        </div>
    );
}
