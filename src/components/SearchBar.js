import React, {useState} from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';


function SearchBar(props){
    const[query, setQuery] = useState('');


        return (
            <div className="searchbar">
                <InputGroup className="mb-3 " >
                    <Button variant="primary" id="button-addon2">
                            <i className="fas fa-map-marker-alt"></i>
                    </Button>
                    <FormControl
                        placeholder="Search City..."
                        aria-label="search city"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2" >
                        <i className="fas fa-search"></i>
                    </Button>
                </InputGroup>
            </div>
        )

        
}

export default SearchBar;

