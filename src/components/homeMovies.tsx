import { PopularMovies } from "@/components/popularMovies"
import { TrendingSection } from "@/components/trendingAll"
import { useContext, useState } from "react"
import { TrendingContext } from "@/contexts/trendingAllCtx"
import {LoadingBtn} from "./loading"
import { apiContext } from "@/contexts/popularMoviesCtx"
import { MovieCard } from "./movieModal"

export const HomeMovies = () => {

    const loadCtx = useContext(TrendingContext)
    const movieCtx = useContext(apiContext)

    const [selectedMovie, setSelectedMovie] = useState<any>([])
    const [clickedBtn, setClickedBtn] = useState<boolean>(true)

    const sendClickedMovie = (id: number) => {
        setClickedBtn(clickedBtn)
        console.log(id)
        const selectMovie = movieCtx?.popMovies?.filter(item => id === item.id)
        setSelectedMovie(selectMovie)
        console.log(selectMovie)
    }

    const closeMovieModal = ()=>{
        setSelectedMovie([])
    }

    return (
        <div>
            {loadCtx?.loadingTrend &&
                <LoadingBtn/>
            }
            {!loadCtx?.loadingTrend && loadCtx?.trending &&
                <div>
                    {clickedBtn && <MovieCard movie={selectedMovie} closeModal={closeMovieModal}/>}
                    <PopularMovies sendClickedMovie={sendClickedMovie}/>
                    <TrendingSection sendClickedMovie={sendClickedMovie}/>
                </div>
            }
        </div>
    )
}