import { useEffect, useState } from 'react'
import Event from './Event'

export default function GridSquare({nmb}){

    const [events, setEvents] = useState(Array(nmb).fill({}));

    let event = [
        {
            id: 0,
            title: "Avalanche",
            description: "lorem ipsum",
            tile: 2,
            success: "Well done",
            fail: "too bad",
            answers: [
                {
                text: "lorem",
                correct: "corrects"
                },
                {
                    text: "lorem2",
                    correct: "false"
                }
            ]
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setEvents((prevEvents) =>
            {
                const updatedEvents = [...prevEvents];
                updatedEvents[2] = event[0];
                return updatedEvents;
            }
            );
        }, 2000);
        
    },[]);

    function resolveEvent(tile) {
        console.log(tile)
        setEvents((prevEvents) =>
            {
            const updatedEvents = [...prevEvents];
            updatedEvents[tile] = {};
            return updatedEvents;
            }
        )
        console.log(event[0])
    }

    let content = []
    for (let i = 0; i < nmb; i++) {
        content.push(
            <Event 
            key={`gridEvent#${i}`} 
            data={events[i]}
            resolveEvent={resolveEvent}
            />
        )
    }

    return (
        <>
            {
                content.map((grid) => {
                    return grid
                })
            }
        </>
    )
}