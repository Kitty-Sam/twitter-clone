import { avatar, cover } from '@/constants/images';

export const users = [
  {
    id: '1',
    avatar:
      'https://www.theladders.com/wp-content/uploads/Lion_030818-1122x900.jpg',
    bgImage:
      'https://www.decolore.net/wp-content/uploads/2018/08/piana-bubbles-liquid-abstract.jpg',
    username: 'skromez',
    firstName: 'Dmitrii',
    lastName: 'Novikov',
    location: 'Warsaw, Poland',
    joined: '2023-01-01',
    tweets: [
      {
        text: 'Hello World! The first Tweet from Dima:)',
        likes: [
          {
            userId: '1',
          },
          {
            userId: '3',
          },
        ],
        date: '2023-01-05',
      },
    ],
  },
  {
    id: '2',
    avatar:
      'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572__340.jpg',
    bgImage: cover,
    username: 'vonubat',
    firstName: 'Egor',
    lastName: 'Tabunov',
    location: 'Minsk, Belarus',
    joined: '2023-01-02',
    tweets: [
      {
        text: 'Hello World! The first Tweet from Egor :)',
        likes: [
          {
            userId: '3',
          },
        ],
        date: '2023-01-03',
      },
    ],
  },
  {
    id: '3',
    avatar,
    bgImage: cover,
    username: 'Kitty-Sam',
    firstName: 'Kate',
    lastName: 'Samuta',
    location: 'Minsk, Belarus',
    joined: '2023-01-03',
    tweets: [
      {
        text: 'Hello World! The first Tweet from Kitty:)',
        likes: [
          {
            userId: '1',
          },
        ],
        date: '2023-01-04',
      },
      {
        text: 'Hello World! The second Tweet from Kitty:)',
        likes: [
          {
            userId: '1',
          },
          {
            userId: '2',
          },
        ],
        date: '2023-05-04',
      },
      {
        text: 'Hello World! The third Tweet from Kitty:)',
        likes: [
          {
            userId: '1',
          },
          {
            userId: '2',
          },
        ],
        date: '2023-07-04',
      },
      {
        text: 'Hello World! The third Tweet from Kitty:)',
        likes: [
          {
            userId: '1',
          },

          {
            userId: '2',
          },
        ],
        date: '2023-07-04',
      },
      {
        text: 'Hello World! The third Tweet from Kitty:)',
        likes: [
          {
            userId: '1',
          },

          {
            userId: '2',
          },
        ],
        date: '2023-07-04',
      },
    ],
  },
  {
    id: '4',
    avatar:
      'https://hips.hearstapps.com/hmg-prod/images/smartest-dog-breeds-lead-1587757081.jpg',
    bgImage:
      'https://i0.wp.com/nashvillewineauction.com/wp-content/uploads/2015/12/Pink-Bubbles.jpg?ssl=1',
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
            userId: '3',
          },
        ],
        date: '2023-01-04',
      },
    ],
  },
];
