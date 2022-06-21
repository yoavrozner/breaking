import './App.css';
import Graph from './lineGraph.jsx';
import Side from './components/Sidenav.jsx';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">            
      <Side className="side" />
      <div className='nav-container'>
        <Navbar className='navbar'>
          <Container>
            <Navbar.Brand href="#home">
            <input type="text" placeholder="חיפוש אתרים" className="search" />
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
      </div>
      <div className='contentContainer'>
        <div className='card'>
          <div className='container'>
            <h4><b>:שם האתר</b></h4>
          </div>

          <div className='graphWrapper'>
            <Graph/>
            <div className='desc'>
              <img src={require('./seal.png')} alt="" className='imageSeal' />
              <h4>:תיאור האתר</h4>
              <p>lorLorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
