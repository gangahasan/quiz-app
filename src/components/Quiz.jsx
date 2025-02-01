import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "../styles/quiz.css"

const Quiz = () => {
    const [questions,setQuestions] = useState([]);
        console.log(questions,"quest")
    const [loading,setLoading] = useState(true);
    const[err,setErr] = useState(null);
    const[isShow,setIsShow] = useState(false)
    
    useEffect(() => {
        const fetchQuestions = async()=>{
            try{
                const response = await fetch(
                  "https://universal-plaid-prune.glitch.me/api/questions"
                )
                .then((response)=>response.json())
                const data = response.questions;
                // console.log(response.questions,"data");
                setQuestions(data);
                setLoading(false);

            }catch(err){
                setErr(err);
                setLoading(false);
            }
        }
        fetchQuestions();
    },[])
    const handleShow=()=>{
        setIsShow(!isShow)

    }
    if(loading){
        return <h1>Loading...</h1>
    }
    if(err){
        return <h1>Error: {err.message}</h1>
    }
  return (
    <div>
        <h1>Take The Quiz</h1>
        <div className='quizcont'>
        {questions.map((question, index) => (
            <div key={index} className='questioncard'>
                <h2>Q.No.{question.id}{" "}{question.question}</h2>
                <ul className="listitems">
                    {question.options.map((option, index) => (
                        <li key={index} className='options'><input type="radio"/><label>{option}</label></li>
                    ))}
                </ul>
                <button onClick={handleShow} style={{backgroundColor:"blue",color:"white",border:"none"}}> {isShow? "Hide Answer":"Show Answer"}</button>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Quiz