import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <body>
      <div className="home-container">
        <div className="content1" >
          <h1>Do you know how many trash is thrown in the ocean every day?</h1>
          <p>
            Because of humanity interference, oceans are suffering in too many ways and it's getting worse. 
          </p>
          <p>
          Click here to know more about how bad is the ocean's health because of people's lack of consciouness:
          </p>
          <Link to= "/about"><button className="btn1">Read More</button></Link>
        </div>
        <div  className="content2">
            <h1>We can't lose hope!</h1>
            <p>There is a chance of stopping the dangerous practices for the waters of the Earth.</p>
            <p>Sign up to receive our newsletter and donate to our online fundraising: </p>
            <Link to= "/login"><button className="btn2">Sign Up</button></Link>
        </div>

      </div>
    </body>
  );
};

export default Home;
