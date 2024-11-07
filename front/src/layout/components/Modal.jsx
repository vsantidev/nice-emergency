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

            <div className="absolute bottom-0 w-full">
              {answered ? (
                <div
                  className="cursor-pointer w-full h-8 bg-red-500 text-center border-t-2 border-black text-black"
                  onClick={() => setDisplay(tile)}
                >
                  <p>Close</p>
                </div>
              ) : (
                answers.map((answer, i) => (
                  <div
                    key={`${title}Answer#${i}`}
                    className="cursor-pointer w-full h-8 bg-red-500 text-center border-t-2 border-black text-black"
                    onClick={() => handleAnswer(answer.text)}
                  >
                    <p>{answer.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}