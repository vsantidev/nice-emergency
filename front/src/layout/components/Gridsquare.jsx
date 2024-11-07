import { useEffect, useState } from 'react'
import Event from './Event'

export default function GridSquare({ nmb }) {
    const [events, setEvents] = useState(Array(nmb).fill({}));
    const [eventTopData, setEventTopData] = useState([]);
    const [eventBottomData, setEventBottomData] = useState([]);
    const [activeEvent, setActiveEvent] = useState(null);

    useEffect(() => {
        fetch('/questions/arrierepays.json')
            .then(response => response.json())
            .then(data => {
                const allQuestions = data.categories.flatMap(category => category.questions);
                setEventTopData(allQuestions);
            })
            .catch(error => console.error('Error fetching JSON:', error));

        fetch('/questions/littoral.json')
            .then(response => response.json())
            .then(data => {
                const allQuestions = data.categories.flatMap(category => category.questions);
                setEventBottomData(allQuestions);
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }, []);

    const getRandomQuestion = (questions) => {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        return {
            id: randomQuestion.id,
            title: randomQuestion.nom,
            description: randomQuestion.question,
            tile: 2,
            success: "C'est la bonne réponse !",
            fail: "Ce n'est pas la bonne réponse.",
            answers: randomQuestion.options.map(option => ({
                text: option,
                correct: option === randomQuestion.réponse ? "correct" : "false"
            })),
            correctAnswer: randomQuestion.réponse
        };
    };

    const resolveEvent = (tile) => {
        setEvents(prevEvents => {
            const updatedEvents = [...prevEvents];
            updatedEvents[tile] = {};
            return updatedEvents;
        });
        setActiveEvent(null);
        setTimeout(spawnEvent, 3000); // Spawn a new event after 3 seconds
    };

    const spawnEvent = () => {
        if (eventTopData.length > 0 && eventBottomData.length > 0) {
            const randomTile = Math.floor(Math.random() * nmb);
            const isTop = randomTile < nmb / 2;
            const newEvent = isTop ? getRandomQuestion(eventTopData) : getRandomQuestion(eventBottomData);
            setActiveEvent({ ...newEvent, tile: randomTile });
            setEvents(prevEvents => {
                const updatedEvents = [...prevEvents];
                updatedEvents[randomTile] = newEvent;
                return updatedEvents;
            });
            console.log(`Spawned event at tile ${randomTile}:`, newEvent);
        }
    };

    useEffect(() => {
        if (eventTopData.length > 0 && eventBottomData.length > 0) {
            spawnEvent(); // Spawn the first event
        }
    }, [eventTopData, eventBottomData]);

    let content = [];
    for (let i = 0; i < nmb; i++) {
        content.push(
            <Event 
                key={`gridEvent#${i}`} 
                data={events[i]}
                resolveEvent={() => resolveEvent(i)}
            />
        );
    }

    return (
        <>
            {content.map(grid => grid)}
        </>
    );
}