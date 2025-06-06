import { MovieType } from "@/types/movieType"

type Props = {
    searchedMovie: MovieType[]
}

export const SearchModal = ({ searchedMovie }: Props) => {
    return (
        <div className="text-gray-800 px-3">
            {searchedMovie.map(item => (
                <div>
                    <div>
                        <img className="rounded-md" 
                            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} />
                        <h1 className="text-2xl font-bold uppercase mt-3">{item.original_title}</h1>
                    </div>
                    <div className="flex flex-col capitalize">
                        <p className="text-2xl font-bold mb-4">{item.original_title}</p>
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