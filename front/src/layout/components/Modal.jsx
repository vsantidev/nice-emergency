import { useEffect, useRef, useState } from "react";

export default function Modal({data, display, setDisplay}) {
  
    const [answered, setAnswered] = useState(false);
  
    const {id, title, description, success, fail, answers} = data
    const textRef = useRef(null)


    function handleAnswer(correct) {
        setAnswered(true)
        textRef.current.innerText = correct ? success : fail
    }
  
    return (
      <>
        {display ? (
          <div className="w-full h-full absolute flex justify-center">
            <div
              className={'w-1/2 bg-white border-0 shadow rounded relative mt-7 z-10 flex'}
            >
              <div className="w-full mt-8">
                <p className="text-center font-bold">{title}</p>
                <div className="mx-8 mt-8">
                    <p ref={textRef}>{description}</p>
                </div>
              </div>
              
              <div className="absolute bottom-0 w-full">
                    {
                        answered ?
                        (
                            <div 
                            className="cursor-pointer w-full h-8 bg-red-500 text-center border-t-2 border-black"
                            onClick={() => setDisplay(id)}
                            >
                                <p>Close</p>
                            </div>
                        )
                        :
                        answers.map((answer, i) => (
                            <div 
                            key={`${title}Answer#${i}`} 
                            className="cursor-pointer w-full h-8 bg-red-500 text-center border-t-2 border-black"
                            onClick={() => handleAnswer(answer.correct)}
                            >
                                <p>{answer.text}</p>
                            </div>
                        ))
                    }
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }