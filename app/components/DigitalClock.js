import React, { useState, useEffect } from 'react'

const DigitalClock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let meridian = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;
        if (minutes < 10) {
            minutes = `0` + minutes
        }

        return `${hours}:${minutes} ${meridian}`
    }

    return (
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
    )
}

export default DigitalClock
