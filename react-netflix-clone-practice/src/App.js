import './App.css';
import Nav from './components/Nav'
import Banner from './components/Banner'
import Row from './components/Row';
import Footer from './components/Footer';
import requests from './api/requests';

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Banner
        fetchUrl={requests.fetchTopRated}
      />
      <Row></Row>
      <Footer></Footer>
    </div>
  );
}

export default App;
