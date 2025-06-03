import { useContext } from "react"
import { SearchContext } from "@/contexts/searchContext"

export const SearchResponse = () => {

    const srcRes = useContext(SearchContext)

    const closeSearch = ()=>{
        srcRes?.setSearchRes([])
        srcRes?.setSearchRes([])
    }


    return (
        <div className="mt-5 lg:w-7xl mx-auto">
            <div className="flex justify-between items-end">
                <div className="text-center text-lg text-gray-500 font-bold">Resultado da pesquisa</div>
                <div
                    className="text-center text-lg font-bold mr-8 p-2 cursor-pointer justify-self-end"
                    onClick={closeSearch}>Fechar pesquisa
                </div>
            </div>
            <div className="mx-auto flex flex-wrap justify-center mt-6">
                {srcRes?.searchSuccess === 200 && srcRes?.searcRes.map(item => (
                    <div className="w-40 flex-none px-2 rounded-md cursor-pointer mb-4" key={item.id}>
                        <div>
                            <img className="inline-block rounded-md" src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} />
                        </div>
                        <div className="">
                            <h1 className="font-extrabold pt-3 text-sm">{item.title ? item.title : item.name}</h1>
                            <p className="text-sm text-gray-500">{item.release_date ? item.release_date : item.first_air_date}</p>
                        </div>
                    </div>
                ))}
                {srcRes?.searchSuccess !== 200 && 
                    <div>Não foi possível achar o que você pesquisou.</div>
                }
            </div>
        </div>
    )
}