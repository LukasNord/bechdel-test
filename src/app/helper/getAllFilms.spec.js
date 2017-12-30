import fetchMock from 'fetch-mock';
import getAllFilms from './getAllFilms';

describe('getAllFilms', () => {
	beforeEach(() => {
		fetchMock.reset();
	});

	it('should call callback after success', async () => {
		const path = '/api/film/';
		const mockResponse = [
			{
				_id: '57f2ee630d35ef00036e8432',
				urlIMDB: 'http://www.imdb.com/title/tt1065073',
				metascore: 100,
				rating: '7.9',
				idIMDB: 'tt1065073',
				urlPoster:
					'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_UX182_CR0,0,182,268_AL_.jpg',
				rated: 'R',
				releaseDate: '20140815',
				year: 2014,
				simplePlot:
					'The life of Mason, from early childhood to his arrival at college.',
				plot:
					"Filmed over 12 years with the same cast, 's BOYHOOD is a groundbreaking story of growing up as seen through the eyes of a child named Mason (a breakthrough performance by ), who literally grows up on screen before our eyes. Starring and as Mason's parents and newcomer Lorelei Linklater as his sister Samantha, BOYHOOD charts the rocky terrain of childhood like no other film has before. Snapshots of adolescence from road trips and family dinners to birthdays and graduations and all the moments in between become transcendent, set to a soundtrack spanning the years from Coldplay's Yellow to Arcade Fire's Deep Blue. BOYHOOD is both a nostalgic time capsule of the recent past and an ode to growing up and parenting.",
				title: 'BOYHOOD',
				__v: 0,
				images: {
					backdrop:
						'https://image.tmdb.org/t/p/w1000/aE1gbq6nw8zyVqvEBXMVMCqZpCs.jpg',
					poster:
						'https://image.tmdb.org/t/p/w300/eKi4e5zXhQKs0De4xu5AAMvu376.jpg',
				},
				bechdelResults: {
					pass: true,
					bechdelScore: 3,
					numScenesPass: 19,
					numScenesDontPass: 142,
					numOfFemalesChars: 7,
					numOfMaleChars: 8,
					numOfFemalesCharsWithDialogue: 5,
					numOfMaleCharsWithDialogue: 6,
					totalLinesFemaleDialogue: 577,
					totalLinesMaleDialogue: 872,
				},
				createdAt: '2016-10-03T23:48:51.638Z',
				genres: ['Drama'],
				writers: [
					{
						name: 'Richard Linklater',
						id: 'nm0000500',
						_id: '57f2ee630d35ef00036e8434',
					},
				],
				directors: [
					{
						name: 'Richard Linklater',
						id: 'nm0000500',
						_id: '57f2ee630d35ef00036e8433',
					},
				],
				actors: [
					{
						actorName: 'Ellar Coltrane',
						actorActress: 'Actor',
						_id: '57f2ee630d35ef00036e8443',
					},
					{
						actorName: 'Patricia Arquette',
						actorActress: 'Actress',
						_id: '57f2ee630d35ef00036e8442',
					},
					{
						actorName: 'Elijah Smith',
						actorActress: 'Actor',
						_id: '57f2ee630d35ef00036e8441',
					},
				],
			},
		];
		fetchMock.mock(path, mockResponse);

		const response = await getAllFilms();
		expect(response).toMatchObject(mockResponse);
	});
});
