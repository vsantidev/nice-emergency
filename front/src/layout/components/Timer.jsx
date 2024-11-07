import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeout, isRunning }) => {
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        if (isRunning && seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else if (seconds === 0) {
            onTimeout();
        }
    }, [seconds, isRunning, onTimeout]);

    return (
        <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold text-gray-800"> {seconds} seconds</h1>
        </div>
    );
};

export default Timer;