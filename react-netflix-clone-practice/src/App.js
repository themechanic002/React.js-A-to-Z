import './App.css';
import Nav from './components/Nav'
import Banner from './components/Banner'
import Row from './components/Row';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=b5d047247c307946228fd63dc22c7030"
    ).then((res) => res.json());
    setData(res);
  }

  useEffect(() => {
    getData();
    console.log('data', data);
  }, [])
  

  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row></Row>
      <Footer></Footer>
    </div>
  );
}

export default App;
