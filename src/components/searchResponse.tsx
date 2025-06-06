import { useContext, useState } from "react"
import { SearchContext } from "@/contexts/searchContext"
import {SearchModal} from "./searchModal"

export const SearchResponse = () => {

    const srcRes = useContext(SearchContext)
    const [clickedBtn, setClickedBtn] = useState(false)
    const [selectedSearched, setSelectedSearched] = useState<any>([])

    const closeSearch = ()=>{
        srcRes?.setSearchRes([])
        srcRes?.setSearchRes([])
    }

    const searchMovieModal = (id: number)=>{
        setClickedBtn(true)
        const selectItemSearch = srcRes?.searcRes.filter(item => id === item.id)
        setSelectedSearched(selectItemSearch)
    }

    const closeSearchModal = ()=>{
        setClickedBtn(false)
        setSelectedSearched([])
    }

    return (
        <div className="mt-5 lg:w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <div className="text-lg text-gray-500 font-bold">Resultado da pesquisa</div>
                <div
                    className="font-bold mr-8 p-2 cursor-pointer justify-self-end text-sm"
                    onClick={closeSearch}>Fechar pesquisa
                </div>
            </div>
            <div className={`mx-auto lg:max-w-7xl flex justify-center mt-6 ${clickedBtn && "fixed"} max-h-11/14`}>
                <div className={`flex flex-1 flex-wrap ${clickedBtn && "overflow-y-scroll"}`}>
                    {srcRes?.searchSuccess === 200 && srcRes?.searcRes.map(item => (
                        <div className="w-40 flex-none px-2 rounded-md cursor-pointer mb-4" 
                            key={item.id} onClick={()=>searchMovieModal(item.id)}>
                            <div>
                                <img className="inline-block rounded-md" 
                                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path ?? item.backdrop_path}`} />
                            </div>
                            <div className="">
                                <h1 className="font-extrabold pt-3 text-sm">{item.title ?? item.name}</h1>
                                <p className="text-sm text-gray-500">{item.release_date ?? item.first_air_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:max-w-96 max-h-11/12 bg-gray-200 overflow-y-scroll md:overflow-y-hidden">
                    {clickedBtn && selectedSearched.length !== 0 && <SearchModal searchedMovie={selectedSearched} closeSearchModal={closeSearchModal}/>}
                </div>
            </div>
        </div>
    )
}