export interface Film{
    "id": string, // Unique result id
    "tconst": string,
    "titleType": string,
    "primaryTitle": string,
    "originalTitle": string,
    "isAdult": boolean,
    "startYear": number,
    "endYear": number,
    "runtimeMinutes": number,
    "genres": string[],
    "averageRating": number,
    "numVotes": number,
    imageUrl:string
}

export interface RootState{
    films: [],
    trendings: [],
    query:string,
    ageFilter: [],
    genreFilter: string,
    genresRoulette: [],
    discover: [],
    visibleDiscover: Film[] ,
    rouletteFilms: []
}