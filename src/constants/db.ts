export const db = [
  {
    id: 1,
    avatar: 'www.example.url/picture.png',
    bgImage: 'www.example.url/picture.png',
    username: 'skromez',
    firstName: 'Dmitrii',
    lastName: 'Novikov',
    location: 'Warsaw, Poland',
    joined: '2023-01-01',
    tweets: [
      {
        text: 'Hello World! My first Tweet :)',
        likes: [
          {
            userId: 1,
          },
          {
            userId: 2,
          },
        ],
        date: '2023-01-05',
      },
    ],
  },
  {
    id: 2,
    avatar: 'www.example.url/picture.png',
    bgImage: 'www.example.url/picture.png',
    username: 'vonubat',
    firstName: 'Egor',
    lastName: 'Tabunov',
    location: 'Minsk, Belarus',
    joined: '2023-01-02',
    tweets: [
      {
        text: 'Hello World! My first Tweet :)',
        likes: [
          {
            userId: 1,
          },
        ],
        date: '2023-01-03',
      },
    ],
  },
  {
    id: 3,
    username: 'Kitty-Sam',
    firstName: 'Kate',
    lastName: 'Samuta',
    location: 'Minsk, Belarus',
    joined: '2023-01-03',
    tweets: [
      {
        text: 'Hello World! My first Tweet :)',
        likes: [
          {
            userId: 1,
          },
        ],
        date: '2023-01-04',
      },
    ],
  },
  {
    id: 4,
    avatar: 'www.example.url/picture.png',
    bgImage: 'www.example.url/picture.png',
    username: 'Lin',
    firstName: 'Lou',
    lastName: '',
    location: 'Bern, Switzerland',
    joined: '2023-01-04',
    tweets: [
      {
        text: 'Hello World! My first Tweet :)',
        likes: [
          {
            userId: 1,
          },
        ],
        date: '2023-01-04',
      },
    ],
  },
];
