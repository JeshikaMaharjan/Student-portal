import React, { useState } from "react";
import Scroll from "../Scroll";
import PersonList from "./PersonList";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter((person) => {
    return person.userName.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Search User</h2>
      </div>
      <div>
        <input
          type="search"
          placeholder="Search User"
          onChange={handleChange}
        />
      </div>
      <Scroll>
        <PersonList items={filteredPersons} />
      </Scroll>
    </>
  );
}

export default Search;
