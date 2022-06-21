import './App.css';
import Graph from './lineGraph.jsx';
import Side from './components/Sidenav.jsx';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import dataThree from './dataThree.json';

function App() {
  return (
    <div className="App">
      <Side className="side" />
      <div className='nav-container'>
        <Navbar className='navbar'>
          <Container>
            <Navbar.Brand>
              <input type="text" placeholder="חיפוש אתרים" className="search" />
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
            <h2><b>הבית של נגה סגל</b></h2>
          </div>

          <div className='graphWrapper'>
            <Graph data={dataThree} />
            <div className='desc'>
              <img src={require('./home2.png')} alt="" className='imageSeal' />
              <h4>:תיאור האתר</h4>
              <p>נגה נהנית לחשוב על הבית ומנטרת כמה אחים יש אצלה בבית בכל רגע</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
