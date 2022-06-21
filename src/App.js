import './App.css';
import Graph from './lineGraph.jsx';
import Side from './components/Sidenav.jsx';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand href="#home">
            <h1 className='headline'>שובר שגרה</h1>
            {/* <img
              src={require('./acdc_logo.webp')}
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
          </Navbar.Brand>
        </Container>
      </Navbar>
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
