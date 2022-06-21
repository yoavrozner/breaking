import './App.css';
import Graph from './lineGraph.jsx';
import Side from './components/Sidenav.jsx';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import dataOne from './dataOne.json'

function App() {

  return (
    <div className="App">
      <Side className="side" />
      <div className='nav-container'>
        <Navbar className='navbar'>
          <Container>
            <Navbar.Brand>
              <input type="text" placeholder="חיפוש" className="search" />
              <h1 className='headline'>שובר שגרה</h1>

              {/* <img
                src={require('./logo.png')}
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
            <h2><b> חניון בהד 15</b></h2>
          </div>

          <div className='graphWrapper'>
            <Graph data={dataOne} />
            <div className='desc'>
              <img src={require('./home4.png')} alt="" className='imageSeal' />
              <h4>:תיאור האתר</h4>
              <p>מעקב אחרי תפוסת חניון בהד 15 כדי לדעת מתי יש טקס קמנים</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
