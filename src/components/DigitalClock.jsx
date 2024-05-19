import React, { useState, useEffect } from "react";
import  './DigitalClock.css';

function DigitalClock() {
    const [Hour, setHour] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Digital Clock</h2>
            <p>{Hour}</p>
        </div>
    );
}

export default DigitalClock;