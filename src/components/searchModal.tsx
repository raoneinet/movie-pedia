import { MovieType } from "@/types/movieType"

type Props = {
    searchedMovie: MovieType[]
    closeSearchModal: ()=>void
}

export const SearchModal = ({ searchedMovie, closeSearchModal}: Props) => {
    return (
        <div className="text-gray-800 px-3">
            {searchedMovie.map(item => (
                <div>
                    <div className="place-self-end text-xl text-red-600 font-bold cursor-pointer" onClick={closeSearchModal}>X</div>
                    <div>
                        <img className="rounded-md" 
                            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path ?? item.backdrop_path}`} />
                        <h1 className="text-2xl font-bold uppercase mt-3">{item.original_title}</h1>
                    </div>
                    <div className="flex flex-col capitalize pt-3">
                        <p className="font-bold">{item.adult === false && "Adulto"}</p>
                        <p><span className="font-bold">Idioma original:</span> {item.original_language}</p>
                        <p><span className="font-bold">Data de lançamento:</span> {item.release_date}</p>
                        <p><span className="font-bold">Avaliação:</span> {item.vote_average}</p>
                        <p><span className="font-bold">Sinopse:</span> <span className="text-sm">{item.overview}</span></p>
                    </div>
                </div>
            ))}
        </div>
    )
}