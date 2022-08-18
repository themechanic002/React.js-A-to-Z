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
        fetchUrl={requests.fetchNowPlaying}
      />
      <Row
        title = "Netflix Originals"
        isLarge = {true}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title = "Action"
        isLarge = {false}
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title = "Comedy"
        isLarge = {false}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title = "Romance"
        isLarge = {false}
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
