import { createContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
export const AppContext = createContext()

export default function AppContextProvider({children}){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const navigate = useNavigate()
    const location = useLocation()
    const fetchData = async(page=1,url,withGenres=null)=>{
      setLoading(true)
      url+=`&page=${page}`
      if (withGenres) {
        url+=`&with_genres=${withGenres.join('%2C')}`
      }
      try {
        let res = await fetch(url)
        let data = await res.json();
        setPosts(data.results)
        setPage(data.page)
        setTotalPages(data.total_pages)
      }
      catch(e){
        console.log(e)
      }
      setLoading(false)
    }
    function handlePageChange(page){
      navigate({search:`?page=${page}`})
      setPage(page)
      window.scrollTo(0,0)
    }
    const value = {
      posts,
      setPosts,
      fetchData,
      page,
      setPage,
      handlePageChange,
      totalPages,
      setTotalPages,
      loading,
      setLoading,
    }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}