import { useContext } from "react"
import {apiContext} from "@/contexts/apiContext"

export const MovieSection = ()=>{

    const movieCtx = useContext(apiContext)

    return (
        <div className="my-18">
            <div className="container mx-auto pt-15">
                <h1 className="font-bold text-lg text-gray-500 p-4">Popular Movies</h1>
                <div className="grid lg:grid-cols-7 gap-2 justify-center">
                    {movieCtx?.popMovies?.map(item => (
                        <div className="w-52 p-2 border border-gray-200 rounded-md">
                            <div>
                                <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}/>
                            </div>
                            <h1 className="font-bold pt-3">{item.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}