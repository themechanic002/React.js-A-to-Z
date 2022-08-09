import requests from './api/requests';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <Banner></Banner>
  
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row
        title="Trending Now"
        id="TN"
        fetchURL={requests.fetchTrending}
        isLargeRow={false}
      />

      <Row
        title="Top Rated"
        id="TR"
        fetchURL={requests.fetchTopRated}
        isLargeRow={false}
      />

      <Row
        title="Action Movies"
        id="AM"
        fetchURL={requests.fetchActionMovies}
        isLargeRow={false}
      />

      <Row
        title="Comedy Movies"
        id="CM"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow={false}
      />

      <Footer></Footer>
      
    </div>
  );
}

export default App;
