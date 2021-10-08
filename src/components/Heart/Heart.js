import React, { useState, useEffect, useRef } from "react"
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io"
import './Heart.css'

function Heart({data}) {
  const [isHeartSelected, setIsHeartSelected] = useState(false)
  const didMount = useRef(false)
  
  useEffect(() => {
    let previousData = JSON.parse(localStorage.getItem('favourites'))
    if(previousData){
        let isAlreadyFavourited = previousData.find(countryObj => countryObj.country = data.country)
        if(isAlreadyFavourited) {
            setIsHeartSelected(true)
        }
    }
  }, [])

  useEffect(() => {
      //didmount check ==> do not run function inside it in first render
      if(didMount.current){
        if(isHeartSelected){
            let previousData = JSON.parse(localStorage.getItem('favourites'))
            if(!previousData){
                localStorage.setItem('favourites', JSON.stringify([data]))
            }else {
                localStorage.setItem('favourites', JSON.stringify([...previousData, data]))
            }
        }else {
            let previousData = JSON.parse(localStorage.getItem('favourites'))
            let newData = previousData.filter(countryObj => countryObj.country !== data.country)
            localStorage.setItem('favourites', JSON.stringify(newData))
        }
      }else {
          didMount.current=true
      }

  }, [isHeartSelected])

  const toggleHeart = () => {
    setIsHeartSelected(prevState => !prevState)
  }
    return(
        <div>
            <div className="heartConainer" onClick={toggleHeart}>
               {isHeartSelected ? <IoIosHeart/> : <IoIosHeartEmpty/>} 
            </div>
            
        </div>
        )
}

export default Heart;
