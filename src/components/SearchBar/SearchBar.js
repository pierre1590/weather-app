import React, {useState} from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

function SearchBar({ getCityWeather, isError,data }) {
   const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  
  return (
    <div className="searchbar">
      <Form onSubmit={(e) => getCityWeather()}>
        <InputGroup className="mb-3">
          <FormControl
           style={{border: '1px solid #03a',padding:'2px'}}
            placeholder="Search City..."
            aria-label="search city"
            aria-describedby="basic-addon2"
            autoComplete="true"
            onChange={handleFilter}
          />
          
          <Button variant="primary" id="button-addon2" style={{border: '1px solid #03a',borderRadius:' 0 10px 10px 0 ', backgroundColor: 'transparent', color:'#05a' }} >
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
        {isError ? (
          <label htmlFor="input" className="label">
            <span className="error" style={{ color: "red", fontSize: "20px" }}>
              City not found !
            </span>
          </label>
        ) : null}
        {filteredData.length != 0 && (
            <div className="results">
              {filteredData.slice(0, 35).map((value, key) => {
                 return (
                  <a className="dataItem" href={value.name} >
                    <p>{value.name} </p>
                  </a>
                );
               })}
        </div>
      )}
      </Form>
    </div>
  );
}

export default SearchBar;
