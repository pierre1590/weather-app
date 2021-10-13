import React, { useState, useEffect, useRef } from "react"
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io"
import './Heart.css'

function Heart({data, isHeartSelected, setIsHeartSelected}) {
  const didMount = useRef(false);
  useEffect(() => {
    let previousData = JSON.parse(localStorage.getItem('favourites'));
    if(previousData){
        let isInStorage = previousData.find(countryObj => countryObj.location ===  data.location);
        if(isInStorage) {
            setIsHeartSelected(true);
        }
        console.log(previousData);
    }
  }, [data])

  useEffect(() => {
      //didmount check ==> do not run function inside it in first render
      if(didMount.current){
        if(isHeartSelected){
            let previousData = JSON.parse(localStorage.getItem('favourites'));
            if(!previousData){
                localStorage.setItem('favourites', JSON.stringify([data]));
               
            }else {
                let isInStorage = previousData.find(countryObj => countryObj.location === data.location);
                if(!isInStorage){
                    localStorage.setItem('favourites', JSON.stringify([...previousData, data]));
                    
                }
                                            }
        }else {
            let previousData = JSON.parse(localStorage.getItem('favourites'));
            let newData = previousData.filter(countryObj => countryObj.location !== data.location);
            localStorage.setItem('favourites', JSON.stringify(newData));
            console.log(newData);
        }
      }else {
          didMount.current=true
      }

  }, [isHeartSelected, data])

  const toggleHeart = () => {
    setIsHeartSelected(prevState => !prevState)
  }
    return(
        <div>
            <div className="heartContainer" onClick={toggleHeart}>
               {(isHeartSelected )? <IoIosHeart style={{color:'red', fontSize:30}} /> : <IoIosHeartEmpty style={{color:'red', fontSize:30}}/>} 
            </div>
        </div>
        )
}

export default Heart;