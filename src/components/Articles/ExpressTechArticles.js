import React, { useState, useEffect } from "react";
import axios from "axios";

function TechArticles(props) {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=express"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Express Tech Articles from Around the Web</h1>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechArticles;
