import React, {useState} from 'react';
import {IoIosHeartEmpty, IoIosHeart} from 'react-icons/io';

function Heart() {
 const [favorites, setFavorites] = useState([]);



return(
    <div>
      <IoIosHeart  onClick={()=>setFavorites(0)} style={{color:'red'}}/>
      <IoIosHeartEmpty onClick={()=>setFavorites(1)} style={{color:'red'}}/>
      
    </div>
  );
}

export default Heart;

