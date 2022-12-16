import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Movie from './components/Movie';
import Footer from './components/Footer';
import { Typography } from '@mui/material';



function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('man');
  const [loading, setLoading] = useState(true);


  const getData = (search) => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_BASE_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`)
      .then((response) => {
        // console.log(response);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
        setLoading(false);
      }).catch((error) => {
        // console.log(error);
        setMovies([]);
        setLoading(false);
      })
  }

  useEffect(() => {
    if (search.length >= 3) {
      getData(search);
    } else {
      setSearch('man');
    }
  }, [search]);

  useEffect(() => {
    getData(search)
    
  }, []);

  return (
    <div className="bg-white py-9 h-full">
      <Header title="GOMOVIE" setSearch={setSearch} />
      <div className='flex items-center justify-center mt-10 flex-col'>
        <Typography
          variant='h5'
        >
        <center><h3 className= 'mr-4 text-xl font-semibold text-black md:text-2xl'>
          Show your favorite movies
        </h3></center>
        </Typography>
      </div>
      <Movie movies={movies} loading={loading} />
      <Footer/>
    </div>
  );
}

export default Home;
