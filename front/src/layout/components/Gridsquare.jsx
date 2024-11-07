import { useEffect, useState } from 'react'
import Event from './Event'

export default function GridSquare({nmb, setMap}){

    const [events, setEvents] = useState(Array(nmb).fill({}));
    const [eventsCount, setEventsCount] = useState(0);

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
                    correct: true
                },
                {
                    text: "lorem2",
                    correct: false

                }
            ]
        },
        {
            id: 1,
            title: "Innondation",
            description: "lorem ipsum",
            tile: 12,
            success: "Well done",
            fail: "too bad",
            answers: [
                {
                    text: "lorem",
                    correct: true
                },
                {
                    text: "lorem2",
                    correct: false

                }
            ]
        }
    ]

    useEffect(() => {
        setTimeout(() => {
            setEvents((prevEvents) =>
            {
                const updatedEvents = [...prevEvents];
                updatedEvents[event[0].tile] = event[0];
                return updatedEvents;
            }
            );
            setTimeout(() => {
                setEvents((prevEvents) =>
                {
                    const updatedEvents = [...prevEvents];
                    updatedEvents[event[1].tile] = event[1];
                    return updatedEvents;
                }
                );
            }, 2000);
        }, 2000);
        
    },[]);

    function resolveEvent(tile) {
        setEvents((prevEvents) =>
            {
            const updatedEvents = [...prevEvents];
            updatedEvents[tile] = {};
            return updatedEvents;
            }
        )
        if (eventsCount == 1) {
            console.log('2')

            setMap(prev => prev + 1)
            setEventsCount(0)
        }else {
            console.log('1')
            setEventsCount(prev => prev + 1)
        }
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