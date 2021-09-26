import React from 'react';
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap';


function SearchBar({ getCityWeather, changeLocation, isError }){
   


        return (
            <div className="searchbar">
              <Form onSubmit={(e)=>
              getCityWeather(e)}>  
                <InputGroup className="mb-3 " >
                    <Button variant="primary" id="button-addon2">
                            <i className="fas fa-map-marker-alt"></i>
                    </Button>
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
                    </Button>
                    {isError ? (
						<label htmlFor="input" className="label">
							<span className="error">Location not found</span>
						</label>
					) : null}
                </InputGroup>
                </Form> 
            </div>
        )

        
}

export default SearchBar;

