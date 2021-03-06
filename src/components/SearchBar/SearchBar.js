import React, {useState} from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";



function SearchBar({ getCityWeather, isError, changeLocation}) {
  

   
  
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
      </Form>
    </div>
   
  );
}

export default SearchBar;
