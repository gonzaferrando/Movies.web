import { FunctionComponent, useEffect, useState } from "react"
import moviesApi from "../api/moviesApi"
import { MoviesListResponse } from "../types"

const Movies: FunctionComponent = (): JSX.Element => {
    const [result, setResult] = useState<MoviesListResponse[]>([])

    useEffect(() => {
        const getMoviesList = async () => {
            const response = await moviesApi.getAll<MoviesListResponse[]>()
            setResult(response.data)
        }

        getMoviesList()
    }, [])

    return (
        <section className="p-5">
            <h1 className="text-3xl">Check our Movies!</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-10">
                {result.map((movie) => {
                    return (
                        <div
                            key={movie.title}
                            className="border rounded-lg bg-white text-center m-2 md:mx-4 md:mb-4"
                        >
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {movie.title}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    {movie.description}
                                </p>
                            </div>
                            <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                Released on{" "}
                                {new Date(movie.releaseDate).toLocaleDateString(
                                    "en"
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Movies
