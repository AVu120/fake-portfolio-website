import React, { useState } from "react";

// import useHackerNewsApi from "../customHooks/useHackerNewsApi";
import useDataApi from "../../customHooks/useDataApi";

function LiveQueryTechArticles() {
  const [query, setQuery] = useState("redux");
  // const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi();
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=redux",
    { hits: [] }
  );

  return (
    <React.Fragment>
      <hr />
      <h1>{query} Articles from Around the Web:</h1>
      <form
        onSubmit={event => {
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </React.Fragment>
  );
}

export default LiveQueryTechArticles;
