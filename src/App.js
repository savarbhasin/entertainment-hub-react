import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TVShow from './pages/TVShow';
import Movie from './pages/Movie';
import Trending from './pages/Trending';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';
import { useSearchParams } from 'react-router-dom';
import Search from './pages/Search';
const api_key=''
function App() {
  const {fetchData} = useContext(AppContext);
  const location = useLocation();
  const [searchParams,setSearchParams] = useSearchParams()

  const movie_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
  const trending_url='https://api.themoviedb.org/3/trending/all/day?api_key=72f882f93d04364c2151768541b804ac'
  const tv_url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
  const search_url = 
  
  useEffect(() =>{
    const page = searchParams.get('page') ?? 1; 
    
    if(location.pathname==='/'){
      fetchData(page,trending_url)
    }
    if (location.pathname==='/movies'){
      fetchData(page,movie_url)
    }
    if (location.pathname==='/tvshows'){
      fetchData(page,tv_url)
    }
    if (location.pathname==='/search'){
      let title = searchParams.get('title')
      if(title){
        fetchData(page,`https://api.themoviedb.org/3/search/multi?query=${title}&include_adult=false&language=en-US&api_key=${api_key}`)
      }
    }   
  },[location.pathname,location.search])
  return (
    <div>
      <Header/>
      <div className='mt-[100px] min-h-[35.6rem] mb-[80px] pb-10 flex flex-col  items-center z-[-1] px-10 bg-slate-700 text-white'>
        <Routes>
          <Route path='/' element={<Trending/>}/>
          <Route path='/movies' element={<Movie/>}/>
          <Route path='/tvshows' element={<TVShow/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
