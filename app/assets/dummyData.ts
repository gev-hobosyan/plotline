type Genere = {
	id: number,
	genre: string
}

enum ShowTypes {
	Movie,
	TVSeries
}

export interface Movie {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	releaseDate: string;
	imdbId: string;
	generes: Genere[];
	keyWords: string[];
	trailerUrl: string;
	runtime: number;
	type: ShowTypes;
}

export const dummyMoviesData: Movie[] = [
	{
		id: 1,
		title: "Wednesday",
		description: "Follows Wednesday Addams&apos; years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents.",
		imageUrl: "https://m.media-amazon.com/images/M/MV5BMDE1NjNmZjgtZTg0OC00NjkxLWEzYzItMDNkMTc3YjgxZWQyXkEyXkFqcGc@._V1_.jpg",
		releaseDate: "2022-11-27",
		imdbId: "tt13443470",
		generes: [
			{
				id: 1,
				genre: "Fantasy"
			},
			{
				id: 2,
				genre: "Crime"
			},
			{
				id: 3,
				genre: "Comedy"
			},
			{
				id: 4,
				genre: "Mystery"
			}
		],
		keyWords: [
			"addams family",
			"academy",
			"teen agers series",
			"goth girl",
			"anti heroine"
		],
		trailerUrl: "https://www.imdb.com/video/vi3929524249/",
		runtime: 2700,
		type: ShowTypes.TVSeries
	},
	{
		id: 2,
		title: "KPop Demon Hunters",
		description: "A world-renowned K-Pop girl group balance their lives in the spotlight with their secret identities as demon hunters.",
		imageUrl: "https://m.media-amazon.com/images/M/MV5BNTBiYWJlMjQtOTIyMy00NTY4LWFhOWItOWZhNzc3NGMyMjc2XkEyXkFqcGc@._V1_.jpg",
		releaseDate: "2025-06-24",
		imdbId: "tt14205554",
		generes: [
			{
				id: 5,
				genre: "Animation"
			},
			{
				id: 6,
				genre: "Action"
			},
			{
				id: 7,
				genre: "Adventure"
			},
			{
				id: 8,
				genre: "Musical"
			},
			{
				id: 1,
				genre: "Fantasy"
			},
			{
				id: 3,
				genre: "Comedy"
			}
		],
		keyWords: [
			"k pop",
			"pop music",
			"female protogonist",
			"burp",
			"demon"
		],
		trailerUrl: "https://m.media-amazon.com/images/M/MV5BODA4ODc5ZGMtZGJmNy00N2ZhLWI4MTAtNzA4OTE1MzFhNGMyXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg",
		runtime: 5700,
		type: ShowTypes.Movie
	},
	{
		id: 3,
		title: "Now You See Me: Now You Don't",
		description: "A diamond heist reunites retired Horsemen illusionists with new performers Greenblatt, Smith and Sessa as they target dangerous criminals.",
		imageUrl: "https://m.media-amazon.com/images/M/MV5BYmZmZDc1Y2EtMmU2MS00NmMzLTllZmYtNjlkODFkNjZlOGE0XkEyXkFqcGc@._V1_.jpg",
		releaseDate: "2025-11-14",
		imdbId: "tt4712810",
		generes: [
			{
				id: 2,
				genre: "Crime"
			},
			{
				id: 9,
				genre: "Thriller"
			}
		],
		keyWords: [
			"sequel",
			"third part",
			"ensemble cast"
		],
		trailerUrl: "https://www.imdb.com/video/vi0051225/",
		runtime: 6720,
		type: ShowTypes.Movie
	},
	{
		id: 4,
		title: "Hazbin Hotel - Season 2",
		description: "Following Charlie's victory against Heaven's army, the Hotel is packed with new residents. Though, to Charlie's dismay, many of her new guests seek revenge not redemption. Meanwhile, the Vees try to capitalise on Hell's instability and use the growing tensions with Heaven to their own advantage.",
		imageUrl: "https://m.media-amazon.com/images/M/MV5BOGMxYWIwMWYtZjY4OC00MzMwLWIyNDEtYWNiZTJlMzg3ODdiXkEyXkFqcGc@._V1_.jpg",
		releaseDate: "2025-07-29",
		imdbId: "tt7216636",
		generes: [
			{
				id: 5,
				genre: "Animation"
			},
			{
				id: 3,
				genre: "Comedy"
			},
			{
				id: 10,
				genre: "Drama"
			}
		],
		keyWords: [
			"hell",
			"web series",
			"afterlife"
		],
		trailerUrl: "https://www.imdb.com/video/vi1913571353/",
		runtime: 1920,
		type: ShowTypes.TVSeries
	},
]