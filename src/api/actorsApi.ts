import Api from "./Api"

const actorsApi = {
    getAll: <T>() => Api.get<T>('/actors')
}

export default actorsApi