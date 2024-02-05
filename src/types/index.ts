
export type EntityId = {
    id: string
}

export type Actor = EntityId & {    
    firstName: string
    lastName:  string
}

export type Movie = EntityId & {
    title: string
    description: string
    releaseDate: string
}

export type ActorsListResponse = Actor;
export type MoviesListResponse = Movie;