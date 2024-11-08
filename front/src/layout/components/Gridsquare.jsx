import { useEffect, useState } from 'react'
import Event from './Event'

export default function GridSquare({ nmb }) {
    const [events, setEvents] = useState(Array.from({ length: nmb }, () => ({})));
    const [eventTopData, setEventTopData] = useState([]);
    const [eventBottomData, setEventBottomData] = useState([]);


    useEffect(() => {
        console.log("Fetching JSON data...");
        fetch('/questions/arrierepays.json')
    .then(response => response.json())
    .then(data => {
        const allQuestions = data.categories.flatMap(category =>
            category.questions.map(question => ({
                ...question,
                title: category.nom
            }))
        );
        setEventTopData(allQuestions);
    })
    .catch(error => console.error('Error fetching JSON:', error));

fetch('/questions/littoral.json')
    .then(response => response.json())
    .then(data => {
        const allQuestions = data.categories.flatMap(category =>
            category.questions.map(question => ({
                ...question,
                title: category.nom
            }))
        );
        setEventBottomData(allQuestions);
    })
    .catch(error => console.error('Error fetching JSON:', error));
    }, []);

    const getRandomQuestion = (questions) => {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        return {
            id: randomQuestion.id,
            title: randomQuestion.title,
            description: randomQuestion.question,
            tile: 2,
            success: `C'est la bonne réponse ! \n \n ${randomQuestion.explication}`,
            fail: `Ce n'est pas la bonne réponse. \n \n ${randomQuestion.explication}`,
            explication: randomQuestion.explication,
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
        setTimeout(spawnEvent, 3000); // 3 secondes
    };

    const spawnEvent = () => {
        if (eventTopData.length > 0 && eventBottomData.length > 0) {
            const randomTile = Math.floor(Math.random() * nmb);
            const isTop = randomTile < nmb / 2;
            const newEvent = isTop ? getRandomQuestion(eventTopData) : getRandomQuestion(eventBottomData);
            setEvents(prevEvents => {
                const updatedEvents = [...prevEvents];
                updatedEvents[randomTile] = newEvent;
                return updatedEvents;
            });
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
