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
              <p className="text-center font-bold text-black text-2xl">{title}</p>
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
                <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full p-2">
                {answers.map((answer, i) => {
                  const colors = [
                    "text-white bg-[#e11d48] hover:bg-[#e11d48]/80 focus:ring-4 focus:outline-none focus:ring-[#e11d48]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#e11d48]/80 dark:focus:ring-[#e11d48]/40 me-2 mb-2", 
                    "text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2", 
                    "text-white bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2", 
                    "text-white bg-[#15803d] hover:bg-[#15803d]/90 focus:ring-4 focus:outline-none focus:ring-[#15803d]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#15803d]/50 me-2 mb-2"];
                  const colorClass = colors[i % colors.length];

                  return (
                    <div
                      key={`${title}Answer#${i}`}
                      className={`cursor-pointer flex items-center justify-center min-h-16 p-4 ${colorClass}  text-black text-center`}
                      onClick={() => handleAnswer(answer.text)}
                    >
                      <p className="break-words text-sm leading-tight">{answer.text}</p> {/* Texte avec retour à la ligne */}
                    </div>
                  );
                })}
              </div>
              )}
            </div>

          </div>
        </div>
      ) : null}
    </>
  );
}