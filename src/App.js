
import './App.css';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button, Row, Col} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
    <Container fluid className="container">
      <div className="header">
        <Button variant="danger" className="favorites" style={{background:'transparent',border:'0',outline: 'none'}}>
          <i className="fas fa-heart"></i>
        </Button>
        <SearchBar />
      </div>
      <Row style={{margin: '60px', padding:'10px'}}>
          <Col>
              Città, Nazione<br/>
              Data e ora
          </Col>
          <Col>
              Icona e descrizione
          </Col>
          <Col>
                Altre info
          </Col>
      </Row>
          <Forecast />
    </Container>
    <div className="footer">
      Created with <i className="fas fa-heart"></i> by Piero Sabino
    </div>
  </div>
  );
}

export default App;
