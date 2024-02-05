import { FunctionComponent, useEffect, useState } from "react"
import { ActorsListResponse } from "../types"
import actorsApi from "../api/actorsApi"

const Actors: FunctionComponent = (): JSX.Element => {
    const [result, setResult] = useState<ActorsListResponse[]>([])

    useEffect(() => {
        const getMoviesList = async () => {
            const response = await actorsApi.getAll<ActorsListResponse[]>()
            setResult(response.data)
        }

        getMoviesList()
    }, [])

    return (
        <section className="p-5">
            <h1 className="text-3xl">Check our Actors!</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 mt-10">
                {result.map((actor) => {
                    return (
                        <div
                            key={actor.id}
                            className="border rounded-lg bg-white text-center m-2 md:mx-4 md:mb-4"
                        >
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {`${actor.firstName} ${actor.lastName}`}
                                </h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Actors
