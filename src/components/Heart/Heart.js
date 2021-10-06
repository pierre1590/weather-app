import React, { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

function Heart() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <IoIosHeartEmpty style={{color:'red',fontSize:30}}/>
    </div>
  )
  
}

export default Heart;
