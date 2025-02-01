import React from 'react'

const Result = () => {
  return (
    <div>
      <h1>Yay! Quiz Completed!</h1>
      <h3 style={{color:"green"}}>
        You Answered <span style={{color:"red"}}>0 </span> out of <span style={{color:"red"}}>13 </span>
        correctly!
      </h3>
    </div>
  );
}

export default Result