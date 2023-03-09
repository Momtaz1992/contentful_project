import React, { useRef, useState } from 'react';




function SearchBar({client}) {
  const inputRef = useRef(null);
  const [results, setResults] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    const query = inputRef.current.value;
    const response = await client.getEntries({
      query: query,
    });
    setResults(response.items);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" ref={inputRef} />
        <button type="submit">Search</button>
      </form>
      {results.map((item) => (
        <div key={item.sys.id}>
          <h2>{item.fields.title}</h2>
          <p>{item.fields.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;










/* import React, { useState } from 'react';
import * as contentful from 'contentful';

const client = contentful.createClient({
       space: "heloufr9qqbc",
       accessToken: "u6jLIkfaGXObqWB2j8of9mDfIso0WRtBrNNO27aDeXc",
  //space:process.env.REACT_APP_SPACE_ID,
 // accessToken:process.env.REACT_APP_ACCESS_TOKEN, 
});

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  async function handleSearch(event) {
    event.preventDefault();
    const response = await client.getEntries({
      query: query,
    });
    setResults(response.items);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {results.map((item) => (
        <div key={item.sys.id}>
          <h2>{item.fields.title}</h2>
          <p>{item.fields.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;
 */
