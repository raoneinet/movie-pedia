import { useContext } from "react"
import {apiContext} from "@/contexts/apiContext"

export const MovieSection = ()=>{

    const movieCtx = useContext(apiContext)

    return (
        <div className="mt-18">
            <div className="container mx-auto pt-15">
                <h1>Popular Movies</h1>
                <div className="grid lg:grid-cols-7 gap-2">
                    {movieCtx?.popMovies?.map(item => (
                        <div className="w-52 p-2 border border-gray-300 ">
                            <div>
                                <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}/>
                            </div>
                            <h1>{item.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}