import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://api.themoviedb.org/3',
  params : {
    api_key: "b5d047247c307946228fd63dc22c7030",
    language: 'ko-KR'
  }
})

export default instance