import { useState } from "react"
import "./App.css"


const QuizApp = () => {
  const questions = [
    { question: "What is the capital city of Nepal?", options: ["Kathmandu", "Pokhara", "Bhaktapur", "Biratnagar"], correctAnswer: "Kathmandu" },
    { question: "Who is the Prime Minister of Nepal?", options: ["Rabi lamichhane", "Puspa kamal dahal", "KP oli", "Sher Bahadur Deuba"], correctAnswer: "KP oli" },
    { question: "Which of the following is the fastest bird",options:["Ostrich","falcon","ewe","syprus crane"],correctAnswer:"falcon"}
  ]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (e) => {
    if (e === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderQuestion = () => {
    const { question, options } = questions[currentQuestionIndex];
    return (
      <div className="board">
        <p  className="question">{question}</p>
        <ul>
          {options.map((option, index) => (
            <li className="options" key={index}>
              <input type="radio" name="answer" value={option} onChange={() => handleOptionSelect(option)} />
              <label>{option}</label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div className="board">
        <h2>Quiz Results</h2>
        <p>Your score is: {score} out of {currentQuestionIndex}</p>
        <button onClick={restart}>Restart</button>
      </div>
    );
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? renderQuestion() : renderResult()}
    </div>
  );
  function restart(){
    setCurrentQuestionIndex(0)
    setScore(0)
  }
};

export default QuizApp;

// function showtotal(){
//   return <div>Total score is {score} out of 10</div>


//   function handleAns(e){
//     setIndex(index+1)
    
//     setAns(e.target.value)
//     if(ans===listitem.Answer){
//       setScore(score+1)
//       console.log(score)
//     }else{
//       console.log(score)
//     }


//     if(index>1){
//       showtotal()
//       setIndex(0)
//     }
    
//   }


//   return (
//     <div className="board">
//       <div className="question">
//         <ul>{listitem.Question}</ul>
//       </div>
//       <ol className="options">
//       {listitem.map((option, No) => (
//             <li key={No}>
//               <input type="radio" name="answer" value={option} onChange={() => handleOptionSelect(option)} />
//               <label>{option}</label>
//             </li>
//           ))}
//       </ol>
//       <div className="btns">
//       <button onClick={handleAns}>Summit</button>
//       </div>
//       </div>
//   )
// }