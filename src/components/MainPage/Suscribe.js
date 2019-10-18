import React from "react";
import useEmailValidation from "../../customHooks/useEmailValidation";

import "../../styles/Suscribe.css";

function Suscribe() {
  const { count, email, setEmail, emailValid } = useEmailValidation(9000);

  return (
    <div className="Suscribe-page">
      <div className="container">
        <hr />
        <div>
          <div className="content">
            <h3>
              Enter your email below to receive instant email updates on any new
              projects and articles I'm involved in!
            </h3>
            <input
              disabled={count <= 0}
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Email"
              type="email"
              name="email"
              required
            />
            &nbsp;&nbsp;&nbsp;
            <button
              disabled={!emailValid || count <= 0}
              onClick={() => alert(`button clicked with email ${email}`)}
              className="btn-lg"
              type="submit"
            >
              PRESS ME!
            </button>
            <div>
              {count > 0
                ? `You Have ${count} Seconds To Enter Your Email. Enter quick before the timer runs out!`
                : "Times Up"}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
export default Suscribe;
