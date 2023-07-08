import { Component, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters =
    monsters &&
    Array.isArray(monsters) &&
    monsters.length > 0 &&
    monsters.filter((monster) => {
      const monsterNameLowerCase = monster?.name?.toLowerCase() || "";
      return monsterNameLowerCase?.includes(searchText);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchText]);

  const onSearchChange = (e) => {
    const searchTextLowerString = e?.target?.value?.toLowerCase() || "";
    setSearchText(searchTextLowerString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="search-box"
        placeholder="Search monsters"
        onChangeHandler={onSearchChange}
      />
      <CardList items={filteredMonsters} />
    </div>
  );
};
export default App;
