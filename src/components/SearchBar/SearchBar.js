import React, {useState} from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";



function SearchBar({ getCityWeather, isError, changeLocation, data }) {
   const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
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
             onChange={(e)=>changeLocation(e.target.value)}
          />
          
          <Button variant="primary" id="button-addon2" style={{border: '1px solid #03a',borderRadius:' 0 10px 10px 0 ', backgroundColor: 'transparent', color:'#05a' }} >
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup>
        {isError}
        {filteredData.length != 0 && (
            <div className="results">
              {filteredData.slice(0, 15).map((value, key) => {
                 return (
                   <a className="dataItem"   onChange={(e)=>changeLocation(handleFilter)} > 
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
