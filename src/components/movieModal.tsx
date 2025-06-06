import { MovieType } from "@/types/movieType"

type Props = {
    movie: MovieType[]
    closeModal: () => void
}

export const MovieCard = ({ movie, closeModal }: Props) => {

    return (
        <div>
            {movie.length !== 0 && movie.map(item =>(   
                <div key={item.id} className="w-screen md:h-1/3 grid py-6 bg-[#202020]">
                    <div 
                        className="text-white text-xl font-bold mr-8 p-2 cursor-pointer rounded-full border-2 inline place-self-end" 
                        onClick={closeModal}>X
                    </div>
                    {movie.length !== 0 &&
                        <div key={item.id} className="px-3 md:w-3xl flex flex-col md:flex-row gap-4 m-auto text-white">
                            <div className="w-64">
                                <img className="w-64 rounded-md"
                                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.poster_path ?? item.backdrop_path}`}
                                />
                                <h1 className="text-lg wrap font-bold">{item.title ? item.title : item.name}</h1>
                            </div>
                            <div className="flex-1 capitalize">
                                <p className="text-2xl font-bold mb-4">{item.original_title}</p>
                                <p className="font-bold">{item.adult === false && "Adulto"}</p>
                                <p><span className="font-bold">Idioma original:</span> {item.original_language}</p>
                                <p><span className="font-bold">Data de lançamento:</span> {item.release_date}</p>
                                <p><span className="font-bold">Avaliação:</span> {item.vote_average}</p>
                                <p><span className="font-bold">Sinopse:</span> <span className="text-sm">{item.overview}</span></p>
                            </div>
                        </div>
                    }
                </div>
                )
            )}
        </div>
    )
}