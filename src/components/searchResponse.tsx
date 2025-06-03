import { useContext } from "react"
import { SearchContext } from "@/contexts/searchContext"

export const SearchResponse = () => {

    const srcRes = useContext(SearchContext)

    const closeSearch = ()=>{
        srcRes?.setSearchRes([])
    }


    return (
        <div className="mt-5 lg:w-7xl mx-auto">
            <div className="flex justify-between items-end">
                <div className="text-lg">Resultado da pesquisa</div>
                <div
                    className="text-xl font-bold mr-8 p-2 cursor-pointer rounded-full border-1 inline justify-self-end"
                    onClick={closeSearch}>Fechar pesquisa
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap mt-6">
                {srcRes?.searchSuccess === 200 && srcRes?.searcRes.map(item => (
                    <div className="w-40 flex-none px-2 rounded-md cursor-pointer" key={item.id}>
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