import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Welcome To The Quiz App!</h1>
      <p>
        Test your knowledge and challenge yourself with our quiz.Please
        <span>
          <Link to="/login">Login</Link>
        </span>{" "}
        to get Started
      </p>
    </div>
  );
}

export default Home