import { useEffect, useRef, useState } from "react";
import Timer from './Timer';


export default function Modal({ data, display, setDisplay }) {

  const [answered, setAnswered] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  const { tile, title, description, success, fail, answers, correctAnswer } = data;
  const textRef = useRef(null);

  function handleAnswer(selectedAnswer) {
    setAnswered(true);
    setIsRunning(false);
    const isCorrect = selectedAnswer === correctAnswer;
    textRef.current.innerText = isCorrect ? success : fail;
  }

  function handleTimeout() {
    setDisplay(tile);
  }

  return (
    <>
      {display ? (
        <div className="w-full h-full absolute flex justify-center">
          <div className={'w-1/2 bg-white border-0 shadow rounded relative mt-7 z-10 flex'}>
            <div className="w-full mt-8 relative">
              <p className="text-center font-bold text-black">{title}</p>
              <div className="mx-8 mt-8">
                <p ref={textRef} className="text-black">{description}</p>
              </div>
              <div className="absolute top-0 right-0 m-4">
                <Timer onTimeout={handleTimeout} isRunning={isRunning} />
              </div>
            </div>
            <div className="absolute bottom-0 w-full flex flex-grow">
              {answered ? (
                <div
                  className="cursor-pointer w-full h-10 bg-red-500 text-center border-t-2 border-black text-black"
                  onClick={() => setDisplay(tile)}
                >
                  <p>Fermer</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full">
                  {answers.map((answer, i) => (
                    <div
                      key={`${title}Answer#${i}`}
                      className="cursor-pointer bg-gray-300 rounded-lg shadow-lg text-center border-t-2 border-black text-black p-2 h-full flex items-center justify-center"
                      onClick={() => handleAnswer(answer.text)}
                      style={{ minHeight: '3rem' }}  // Assure une hauteur minimale
                    >
                      <p className="break-words text-sm leading-tight">{answer.text}</p> {/* Assure le retour à la ligne */}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      ) : null}
    </>
  );
}