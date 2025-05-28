import { useContext, useRef, useState } from "react"
import { apiContext } from "@/contexts/popularMoviesCtx"
import { MovieCard } from "./movieModal"

export const PopularMovies = () => {

    const movieCtx = useContext(apiContext)
    const movieContainerRef = useRef<HTMLDivElement>(null)
    const [selectedMovie, setSelectedMovie] = useState<any>([])
    const [clickedBtn, setClickedBtn] = useState<boolean>(true)

    const handleLeft = () => {
        if (movieCtx?.popMovies?.length && movieContainerRef.current) {
            if (movieContainerRef) {
                movieContainerRef.current.scrollBy({
                    left: -200,
                    behavior: "smooth"
                })
            }
        }
    }

    const handleRight = () => {
        if (movieCtx?.popMovies?.length && movieContainerRef.current) {
            if (movieContainerRef) {
                movieContainerRef.current.scrollBy({
                    left: 200,
                    behavior: "smooth"
                })
            }
        }
    }

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
        <div className="mt-5">
            {clickedBtn && <MovieCard movie={selectedMovie} closeModal={closeMovieModal}/>}
                <>
                    <div className="container mx-auto pt-15">
                        <h1 className="font-bold text-lg text-gray-500 p-4">Popular Movies</h1>
                        <div
                            className="flex flex-nowrap gap-2 w-full overflow-x-hidden mask-x-from-85%"
                            ref={movieContainerRef}
                        >
                            {movieCtx?.popMovies?.map(item => (
                                <div className="w-40 flex-none px-2 rounded-md cursor-pointer" key={item.id} onClick={() => sendClickedMovie(item.id)}>
                                    <div>
                                        <img className="inline-block rounded-md" src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} />
                                    </div>
                                    <h1 className="font-extrabold pt-3 text-sm">{item.title ? item.title : item.name}</h1>
                                    <p className="text-sm text-gray-500">{item.release_date ? item.release_date : item.first_air_date}</p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full inline-flex justify-between py-3 relative -top-55">
                            <button className="cursor-pointer w-10" onClick={handleLeft}>
                                <img src="/assets/icons/arrow-left.png" />
                            </button>
                            <button className="cursor-pointer w-10" onClick={handleRight}>
                                <img src="/assets/icons/arrow-right.png" />
                            </button>
                        </div>
                    </div>
                </>
        </div>
    )
}