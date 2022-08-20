import React from "react";
import classes from "../styles/search.module.css";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div>
      {/* SEARCH */}
      <div className={classes.input}>
        <input type="text" placeholder="Search.." />

        <AiOutlineSearch size="1.7rem" className={classes.icon} />
      </div>
    </div>
  );
}

export default Search;
