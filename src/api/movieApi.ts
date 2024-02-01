import Api from "./Api"

const moviesApi = {
    getMovies: <T>() => Api.get<T>('/movies')
}

export default moviesApi