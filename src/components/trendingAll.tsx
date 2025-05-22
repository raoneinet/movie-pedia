import { useContext, useRef } from "react"
import { TrendingContext } from "@/contexts/trendingAllCtx"

export const TrendingSection = () => {

    const trendCtx = useContext(TrendingContext)

    const movieContainerRef = useRef<HTMLDivElement>(null)

    const handleLeft =()=>{
        if(trendCtx?.trending.length && movieContainerRef.current){
            if(movieContainerRef.current){
                movieContainerRef.current.scrollBy({
                    left: -200,
                    behavior: "smooth"
                })
            }
        }
    }

    const handleRight =()=>{
        if(trendCtx?.trending.length && movieContainerRef.current){
            if(movieContainerRef.current){
                movieContainerRef.current.scrollBy({
                    left: 200,
                    behavior: "smooth"
                })
            }
        }

    }

    return (
        <div className="">
            <div className="container mx-auto">
                <h1 className="font-bold text-lg text-gray-500 p-4">Trending Movies</h1>
                <div 
                    className="flex flex-nowrap gap-2 w-full overflow-x-hidden mask-x-from-85%" 
                    ref={movieContainerRef}
                >
                    {trendCtx?.trending?.map(item =>(
                        <div className="w-40 flex-none px-2" key={item.id}>
                            <div>
                                <img className="inline-block rounded-md" src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} />
                            </div>
                            <h1 className="font-bold pt-3 text-sm">{item.title ? item.title : item.name}</h1>
                        </div>
                    ))}
                </div>
                <div className="w-full inline-flex justify-between py-3 relative -top-55">
                    <button className="cursor-pointer w-10" onClick={handleLeft}>
                        <img src="/assets/icons/arrow-left.png"/>
                    </button>
                    <button className="cursor-pointer w-10" onClick={handleRight}>
                        <img src="/assets/icons/arrow-right.png"/>
                    </button>
                </div>
            </div>
        </div>
    )
}