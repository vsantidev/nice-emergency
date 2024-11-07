import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeout, isRunning, seconds, setSeconds }) => {

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

    const textColor = seconds <= 10 ? 'text-red-500' : 'text-gray-800';

    return (
        <div className="flex justify-center items-center my-4">
            <h1 className={`text-xl font-bold ${textColor}`}> {seconds} secondes</h1>
        </div>
    );
};

export default Timer;