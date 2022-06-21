import './App.css';
import Graph from './lineGraph.jsx';
<<<<<<< HEAD
=======
import Side from './components/Sidenav.jsx';
// import Graph from './line.jsx';
>>>>>>> origin/yoav
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={require('./acdc_logo.webp')}
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <p>שלום לכולם</p>
      <Side className="side" />

      <div className='contentContainer'>
        <div className='card'>
          <div className='container'>
            <h4><b>חתמצ מספר 1</b></h4>
          </div>

          <div className='graphWrapper'>
            <Graph />
            <div className='desc'>
              <p>תיאור אתר מספר 1</p>
              <img src={require('./seal.png')} alt="" className='imageSeal' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
