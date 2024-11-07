import { useEffect, useState } from 'react'
import Event from './Event'

export default function GridSquare({ nmb }) {
    const [events, setEvents] = useState(Array.from({ length: nmb }, () => ({})));
    const [eventTopData, setEventTopData] = useState([]);
    const [eventBottomData, setEventBottomData] = useState([]);
    const [activeEvent, setActiveEvent] = useState(null);

    useEffect(() => {
        console.log("Fetching JSON data...");
        fetch('/questions/arrierepays.json')
    .then(response => response.json())
    .then(data => {
        // Associe le nom de la catégorie à chaque question
        const allQuestions = data.categories.flatMap(category =>
            category.questions.map(question => ({
                ...question,
                title: category.nom // Ajoute le nom de la catégorie comme titre
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
                title: category.nom // Utilise le nom de la catégorie comme titre
            }))
        );
        setEventBottomData(allQuestions);
    })
    .catch(error => console.error('Error fetching JSON:', error));
    }, []);

    const getRandomQuestion = (questions) => {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        console.log("Selected random question:", randomQuestion); // Ajout 4 : voir la question aléatoire choisie
        return {
            id: randomQuestion.id,
            title: randomQuestion.title,
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
        console.log(`Resolving event at tile ${tile}`); // Ajout 5 : voir quand un event est résolu
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
            console.log(`Spawning event at tile ${randomTile}:`, newEvent); // Ajout 6 : voir les détails du nouvel event
            setActiveEvent({ ...newEvent, tile: randomTile });
            setEvents(prevEvents => {
                const updatedEvents = [...prevEvents];
                updatedEvents[randomTile] = newEvent;
                return updatedEvents;
            });
        } else {
            console.log("Not enough data to spawn event."); // Ajout 7 : voir si les données sont prêtes pour spawn
        }
    };

    useEffect(() => {
        console.log("Checking if we can spawn the first event...");
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
