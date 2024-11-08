import { useRef, useState } from "react";
import Timer from './Timer';
import { useScore } from "../../Providers/ScoreProvider";


export default function Modal({ data, display, setDisplay }) {

  const [answered, setAnswered] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [seconds, setSeconds] = useState(30);


  const { tile, title, description, success, fail, answers, correctAnswer } = data;
  const textRef = useRef(null);

  const {setScore} = useScore()

  let colors = ['bg-red-500', 'bg-blue-500', 'bg-orange-500', 'bg-green-500']



  function handleAnswer(selectedAnswer) {
    setAnswered(true);
    setIsRunning(false);
    const isCorrect = selectedAnswer === correctAnswer;
    textRef.current.innerText = isCorrect ? success : `${fail} \n\n La bonne réponse : \n${correctAnswer}`;
    if (isCorrect)
    {
      setScore(prev => prev + (seconds * 50))
    }else {
      setScore(prev => prev - (seconds * 25))
    }
  }

  function handleTimeout() {
    setDisplay(tile);
    setSeconds(30)
  }

  return (
    <>
      {display ? (
        <div className="w-full h-full absolute flex justify-center">
          <div className={'w-1/2 bg-white border-0 shadow rounded-lg relative my-4 z-10 flex'}>
            <div className="w-full mt-4 relative">
              <p className="text-center font-bold text-black text-3xl">{title}</p>
              <Timer seconds={seconds} setSeconds={setSeconds} onTimeout={handleTimeout} isRunning={isRunning} />
              <div className="mx-8 lg:h-[30%] flex justify-center items-center">
                <p ref={textRef} className="text-black lg:mx-20">{description}</p>
              </div>
            </div>

            <div className={`absolute bottom-0 w-full lg:h-[40%] p-4 ${answered ? 'flex items-end' : 'grid grid-cols-2 gap-2'}`}>
              {answered ? (
                <div
                  className="cursor-pointer w-52 lg:w-96 mx-auto rounded h-8 bg-red-500 flex justify-center items-center text-white mb-4 font-bold"
                  onClick={() => setDisplay(tile)}
                >
                  <p>Close</p>
                </div>
              ) : (
                answers.map((answer, i) => (
                  <div
                    key={`${title}Answer#${i}`}
                    className={`${colors[i]} rounded font-bold cursor-pointer w-full min-h-8 p-1 text-white flex text-center justify-center items-center`}
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