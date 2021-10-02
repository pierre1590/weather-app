import React from 'react';
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap';


function SearchBar({ getCityWeather, changeLocation, isError}){
   


        return (
            <div className="searchbar">
              <Form onSubmit={(e)=>
              getCityWeather(e)}>  
                <InputGroup className="mb-3 " >
                    <FormControl
                        placeholder="Search City..."
                        aria-label="search city"
                        aria-describedby="basic-addon2"
                        autoComplete="true"
                        onChange={(e) => {
							changeLocation(e.target.value);
						}}
                    />
                    <Button variant="primary" id="button-addon2" >
                        <i className="fas fa-search"></i>
                    </Button><br/>
                </InputGroup>
                {isError ? (
                        <label htmlFor="input" className="label">
                          <span className="error" style={{color:'red',fontSize:'20px',}}>City not found !</span>
                        </label>
                    ) : null}
                </Form> 
            </div>
        )

        
}

export default SearchBar;

