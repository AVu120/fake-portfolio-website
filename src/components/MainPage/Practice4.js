import React, { useState, useEffect } from "react";
import axios from "axios";

function RestApiHooksComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000/users",
        {
          id: "5",
          firstName: "Dan",
          lastName: "The Man",
          email: "abc@gmail.com"
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(
        response => {
          console.log(response.data);
        },
        error => {
          console.log(error);
        }
      );
    axios
      .get("http://localhost:4000/users")
      .then(response => setData(response.data));
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <b>objectID:</b> {item.id}
            <br />
            <b>firstName:</b> {item.firstName}
            <br />
            <b>lastName:</b> {item.lastName}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RestApiHooksComponent;
