import React, { useState, useEffect } from "react";
import axios from "axios";

function RestApiHooksComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/hits")
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.objectID}>
            {item.firstName}: {item.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RestApiHooksComponent;
