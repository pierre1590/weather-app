import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherCity from './components/WeatherCity/WeatherCity';
import Forecast from './components/Forecast/Forecast';
import Footer from './components/Footer/Footer';
import {Container,Button} from 'react-bootstrap';
import { getCityForecast, getCityWeather } from "./utils/fetchData";
import { useDebounce } from "./utils/debounceFn";
import ReactLoading from 'react-loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer,toast } from 'react-toastify';

function App() {
  
	const [weather, setWeather] = useState([]);
	const [weatherforecast, setForecast] = useState('');
	const [city, setCity] = useState('Turi');
	const [isError, setError] = useState(false);
	const [delay, setDelay] = useState(1000);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
		if (!city) {
			
		return ;
		}

		getCityWeather(city)  
		.then((setData) => {
				 setLoading(false);
				setWeather(setData);
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
				setForecast(forecast);
				setError(false);
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
	};




  return (
    <div className="App">
		{loading ? (
			<ReactLoading type="spinningBubbles" color="#f03" width="200px" height="110px" />
		) : (
			<>	
			{weather && ( 
				<><Container fluid className="container">
							  <div className="header">
								  <Button variant="danger" className="favorites" style={{ background: 'transparent', border: '0', outlineStyle: 'none' }}>
									  <i className="fas fa-heart"></i>
								  </Button>
								  <SearchBar
									  getCityWeather={getSearchWeather}
									  changeLocation={onInputChange} 
									  isError={isError}
									  />
							  </div>
							  <div sytle={{ marginTop: '8%' }}>
								  <WeatherCity data={weather} />
							  </div>
							  <div style={{ marginTop: '12%' }}>
								  <Forecast forecast={weatherforecast} />
							  </div>
						  </Container><Footer /></>
			)}
		</>	  
		)}
		<ToastContainer/>
	</div>	
	);
}

export default App;
