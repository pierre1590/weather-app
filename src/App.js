import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherCity from "./components/WeatherCity/WeatherCity";
import Forecast from "./components/Forecast/Forecast";
import Footer from "./components/Footer/Footer";
import { Container, Button } from "react-bootstrap";
import  CloseButton  from "react-bootstrap/CloseButton";
import { getCityForecast, getCityWeather } from "./utils/fetchData";
import { useDebounce } from "./utils/debounceFn";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [weather, setWeather] = useState([]);
  const [weatherforecast, setForecast] = useState("");
  const [city, setCity] = useState("Turi");
  const [isError, setError] = useState(false);
  const [delay, setDelay] = useState(1000);
  const [loading, setLoading] = useState(true);
  const [isHeartSelected, setIsHeartSelected] = useState(false)
  const [isFavouritesSelected, setIsFavouritesSelected] = useState(false)
  const [favInLocal, setIsFavInLocal] = useState(false)
  

  useEffect(() => {
    let previousData = JSON.parse(localStorage.getItem('favourites'))
    previousData && setIsFavInLocal(previousData)
  }, [isHeartSelected])

  useEffect(() => {
    if (!city) {
      return;
    }

    getCityWeather(city)
      .then((setData) => {
        setWeather(setData)
        setIsHeartSelected(false)
        setLoading(false)
        return;
      })
      .catch((error) => {
        setError(true);
        return;
      });
  }, [city, isError]);

  useEffect(() => {
    if (!city) {
      return;
    }
    getCityForecast(city)
      .then((forecast) => {
        setForecast(forecast)
        setError(false)
        return;
      })
      .catch((error) => {
        setError(true);
        return;
      });
  }, [city, isError]);

  const debouncedSearchTerm = useDebounce((value) => setCity(value), delay);

  const onInputChange = (value) => debouncedSearchTerm(value);

  const getSearchWeather = (event) => {
    event.preventDefault();
    getCityWeather(city);
    getCityForecast(city);
  }
  const handleFavourites = () => {
    setIsFavouritesSelected(prevState => !prevState)
   
  }

const handleLocationClick = (city) => {
  console.log(city)
  setIsFavouritesSelected(false);
}

  return (
    <div className="App">
      {loading ? (
        <div style={{ marginLeft: "45%" }}>
          <ReactLoading
            type="spinningBubbles"
            color="#f03"
            width="200px"
            height="110px"
          />
        </div>
      ) : (
        <>
          {weather && (
            <>
              <Container fluid className="container">
                <div className="header">
                  <div className="button-parent"> 
                  <Button
                    variant="danger"
                    className="favorites"
                    style={{
                      background: "transparent",
                      border: '1px dotted #f00',
                      outlineStyle: "none",
                      width:130,
                      height:80,
                      color: 'red'
                    }}
                    onClick={handleFavourites}
                  >
                    <i className="fas fa-heart"></i>Preferred cities
                  </Button>
                  {isFavouritesSelected ? <div className="favorites-data">
                    {
                      favInLocal ? <ul>
                      <CloseButton aria-label="Hide" style={{margin:'2px', borderRadius:'8px'}} onClick={() => setIsFavouritesSelected (false)}/>
                        {favInLocal.map((fav, i) => <li key={i} style={{cursor:'pointer', fontSize:20}} onClick={(fav) => handleLocationClick (fav.city)}><span>{fav.location}</span></li>)}
                        
                      </ul> : <span>no fav data</span>
                    }
                  </div> : <> </>}
                  </div>
                  <SearchBar
                    getCityWeather={getSearchWeather}
                    changeLocation={onInputChange}
                    isError={isError}
                  />
                </div>
                <div sytle={{ marginTop: "8%" }}>
                  <WeatherCity data={weather} isHeartSelected={isHeartSelected} setIsHeartSelected={setIsHeartSelected}/>
                </div>
                <div style={{ marginTop: "12%" }}>

                  <Forecast forecast={weatherforecast} />

                </div>
              </Container>
              <Footer />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
