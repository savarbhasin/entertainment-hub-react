import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
const useGenre = (type)=>{
    const [genreData,setGenreData] = useState(null)
    const [genres,setGenres] = useState([])
    const {data,fetchData,page} = useContext(AppContext)

    const genreUrl = `https://api.themoviedb.org/3/genre/${type}/list?api_key=72f882f93d04364c2151768541b804ac`
    const movie_url = `https://api.themoviedb.org/3/discover/${type}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`

    async function getGenres(){
        let res = await fetch(genreUrl)
        let cons = await res.json();
        setGenreData(cons)
    }
    useEffect(()=>{
       getGenres();
    },[])
    const clickHandler = (genre) => {
      if (!genres.includes((genre))) {
        setGenres((prevGenres) => [...prevGenres,(genre)]);
      }
      else{
        setGenres((prevGenres)=> prevGenres.filter(gen=>gen!==genre))
      }
      
    };
    useEffect(()=>{
        fetchData(page,movie_url,genres)
    },[genres])
    return {clickHandler,genreData,genres}
}   
export default useGenre;
