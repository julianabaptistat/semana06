import React, { useState } from "react";
import "./Login.css";

import { useParams } from "react-router-dom";

const Param = (props) => {

  const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
  const { id } = useParams();
  return (
    <main className="Param">
      <section>
        <form action="process.php">
          <div className="main_box">
            <div>
              <h1>Help us to save the planet!</h1>
              <h3>Login</h3>
            </div>
            <div>
              <div className="margebox">
                <div>
                  <label for="email" className="loginbox1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter an email"
                    value={email} onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <label for="password" className="loginbox1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password} onChange={e => setPassword(e.target.value)}
                />
                <div>
                  <button class="button">Login</button>
                  <p className="box_2">
                    <br />
                    Don't have an account? <a href="#">Sign up here</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Param;
