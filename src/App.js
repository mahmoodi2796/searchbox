import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({ coin: "", value: "" });
  const [group, setGroup] = useState([]);
  const [findSearch, setFindSearch] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);
  const [search, setsearch] = useState("");
  useEffect(() => {
    search
      ? setFindSearch(group.filter((item) => item.coin.includes(search)))
      : setFindSearch("");
  }, [searchStatus]);

  return (
    <div className="a">
      <label>
        coin
        <input
          value={person.coin}
          onChange={(e) =>
            setPerson({ ...person, coin: e.currentTarget.value })
          }
          className="b"
          type="text"
        />
      </label>
      <label className="c">
        value
        <input
          value={person.value}
          onChange={(e) =>
            setPerson({ ...person, value: e.currentTarget.value })
          }
          className="d"
          type="number"
        />
      </label>
      <button
        className="submit"
        onClick={() => {
          setGroup([...group, person]);
          setPerson({ coin: "", value: "" });
        }}
      >
        submit
      </button>
      <input
        className="searchinput"
        value={search}
        onChange={(e) => {
          setsearch(e.currentTarget.value);
        }}
        type="text"
        placeholder="search"
      />
      <button
        className="h"
        onClick={() => {
          setSearchStatus(!searchStatus);
        }}
      >
        search
      </button>
      {findSearch &&
        findSearch.map((item, index) => (
          <div className="e" key={index}>
            <div className="f">coin:{item.coin}</div>
            <div className="">value:{item.value}</div>
          </div>
        ))}
      {!findSearch &&
        group.map((item, index) => (
          <div className="e" key={index}>
            <div className="f">coin:{item.coin}</div>
            <div className="">value:{item.value}</div>
          </div>
        ))}
    </div>
  );
}

export default App;
