import React, { useEffect, useState } from "react";
import "./About.css";

const About = (props) => {
  const [description, setDescription] = useState('Press one of the buttons to know more about the current situation of the oceans');
  const [number, setNumber] = useState(0);

  useEffect(function () {
    setNumber(() => {
      switch (number) {
        case "1":
          setDescription("1,8 trillion of plastic pieces float in the Great Pacific garbage patch");
          break;
        case "2":
          setDescription(
            "The oceans will be 3 times more polluted until 2025"
          );
          break;
        case "3":
          setDescription(
            "8 trillions of tons of plastic are thrown in the oceans each year"
          );
          break;
        case "4":
          setDescription(
            "There are, approximately, 80 thousand tons of plastic in the Great Pacific garbage patch"
          );
          break;
        case "5":
          setDescription(
            "450 years is the minimum time for plastic decomposition"
          );
          break;
        case "6":
          setDescription(
            "1.600.000 km^2 is the current area of the Great Pacific garbage patch, almost 2,5x the France territory"
          );
          break;
        default:
          break;
      }
    }, [number]);
  });

  return (
    <div className="flex-all">
      <span className="card">{description}</span>
      <div className="container">
        <div className="grid_item">
          <button className="btn3" id="b2" onClick={() => setNumber("1")}>
            1
          </button>
        </div>
        <div className="grid_item">
          <button className="btn3" id="b3" onClick={() => setNumber("2")}>
            2
          </button>
        </div>
        <div className="grid_item">
          <button className="btn3" id="b4" onClick={() => setNumber("3")}>
            3
          </button>
        </div>
        <div className="grid_item">
          <button className="btn3" id="b5" onClick={() => setNumber("4")}>
            4
          </button>
        </div>
        <div className="grid_item">
          <button className="btn3" id="b6" onClick={() => setNumber("5")}>
            5
          </button>
        </div>
        <div className="grid_item">
          <button className="btn3" onClick={() => setNumber("6")}>
            6
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
