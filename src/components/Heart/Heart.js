import React, {useState} from 'react';
import {IoIosHeartEmpty, IoIosHeart} from 'react-icons/io';

function Heart() {
 const [favorites, setFavorites] = useState([]);



return(
    <div>
      
    
        <IoIosHeartEmpty style={{color:'red',fontSize:'32px'}} onClick={() => setFavorites(0)}/>
        <IoIosHeart style={{color:'red',fontSize:'32px'}} onClick={() => setFavorites(1)}/>
           
          
     
    </div>
  );
}

export default Heart;

