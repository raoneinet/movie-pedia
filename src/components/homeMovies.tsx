import { PopularMovies } from "@/components/popularMovies"
import { TrendingSection } from "@/components/trendingAll"
import { useContext, useState } from "react"
import { TrendingContext } from "@/contexts/trendingAllCtx"
import {LoadingBtn} from "./loading"
import { apiContext } from "@/contexts/popularMoviesCtx"
import { MovieCard } from "./movieModal"
import {SearchResponse} from "./searchResponse"
import {SearchContext} from "@/contexts/searchContext"

export const HomeMovies = () => {

    const showSearchRes = useContext(SearchContext)
    const loadCtx = useContext(TrendingContext)
    const movieCtx = useContext(apiContext)

    const [selectedMovie, setSelectedMovie] = useState<any>([])
    const [clickedBtn, setClickedBtn] = useState<boolean>(true)

    const sendClickedMovie = (id: number) => {
        setClickedBtn(clickedBtn)
        const selectMovie = movieCtx?.popMovies?.filter(item => id === item.id)
        setSelectedMovie(selectMovie)
    }

    const closeMovieModal = ()=>{
        if(selectedMovie.length >= 0) setSelectedMovie([])
    }

    return (
        <div>
            {loadCtx?.loadingTrend &&
                <LoadingBtn/>
            }
            {!loadCtx?.loadingTrend && loadCtx?.trending &&
                <div className="">
                    {clickedBtn && <MovieCard movie={selectedMovie} closeModal={closeMovieModal}/>}
                    {showSearchRes?.searcRes.length !== 0 ? <SearchResponse/> :
                        <>
                            <PopularMovies sendClickedMovie={sendClickedMovie}/>
                            <TrendingSection sendClickedMovie={sendClickedMovie}/>
                        </> 
                    }
                </div>
            }
        </div>
    )
}