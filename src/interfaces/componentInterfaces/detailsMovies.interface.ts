export interface IDetailsMovies {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: [
        {
            id: number,
            name: string
        }
    ],
    original_title: string,
    overview: string
    popularity: number,
    release_date: string,
    status: string,
    tagline: string,
    title: string,
    vote_average: number,
    poster_path:string
    runtime:number,
    revenue:number
}