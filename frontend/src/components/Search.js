import React from "react";
import classes from "../styles/search.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import OneProduct from "./OneProduct";

function Search({ placeholder, changeProductDisplay }) {

  const [filteredData, setFilteredData] = useState([]);
  const options = {
    method: 'GET',
    headers: {

    }
  };
  const handleFilter = (event) => {
    const searchWord = event.target.value
    console.log("Sw" + searchWord + "," + typeof searchWord + "," + searchWord.length)
    if (searchWord == '') {
      setFilteredData([])
      return
    }
    fetch(`http://localhost/product/` + searchWord.toLowerCase() + `&asciiMode=true`, options)
      .then(response => response.json())
      .then(response => {
        let res = []
        for (let i in response.data) {
          res.push(response.data[i]);
        }
        console.log("res ", res);
        setFilteredData(res)
      })
      .catch(err => console.error(err));
  }

  function HandleUserChoice(event) {
    console.log("click detected", event.target.text)
    console.log("filtering this ", filteredData)
    //find city latitude and longitude 
    var ProductsSearch = event.target.text.toString()
    changeProductDisplay(ProductsSearch)
  }
  return (
    <div>
      {/* SEARCH */}
      <div className={classes.input}>
        <input type="text" placeholder="Search.." onChange={handleFilter} />

        <AiOutlineSearch size="1.7rem" className={classes.icon} />
      </div>

      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            console.log("hello am a an")
            //please Tune this whatever you like
            //filtered data is products filtered by search
            return (<a key={value.id} className="dataItem" target="_blank" onClick={HandleUserChoice}>braces w Title</a>)
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
