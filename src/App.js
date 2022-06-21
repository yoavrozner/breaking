import './App.css';
import Graph from './lineGraph.jsx';
// import Graph from './line.jsx';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./seal.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <p>שלום לכולם</p>

      <div className='card'>
        <div className='container'>
          <h4><b>ראש אמן</b></h4>
        </div>

        <div className='graphWrapper'>
          <Graph />
          <div className='desc'>
            <p>ברוך הבא</p>
            <img src={require('./seal.png')} alt="" className='imageSeal' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
