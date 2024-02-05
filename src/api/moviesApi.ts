import Api from "./Api"

const moviesApi = {
    getAll: <T>() => Api.get<T>('/movies')
}

export default moviesApi