import React, { useState } from 'react';
import Scroll from '../Scroll';
import SearchList from './SearchList';

function Search({details}) {
  console.log("search c", details)

  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .userName
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }
  console.log("Search component")

  return (
    <>
      <div>
        <h2>Search User</h2>
      </div>
      <div >
        <input           
          type = "search" 
          placeholder = "Search User" 
          onChange = {handleChange}
        />
      </div>
      {searchList()}
    </>
  );
}

export default Search;


