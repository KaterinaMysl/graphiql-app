import { AboutTeam } from './types';

export const ROUTE_PATH = {
  welcome: '/',
  graphQl: '/graphQL',
  login: '/login',
  registration: '/login',
  page404: '*',
};

export const LINK_NAME = {
  graphQl: 'GraphQl',
  login: 'Sign In',
  registration: 'Sign Up',
};

export const HEADER = {
  link: '/',
  alt: 'logo',
  title: 'GraphQl',
};

export const RSS_CONTENT = {
  title: 'How we managed to',
  subtitle: `We acquired valuable frontend development skills thanks to RS
  School. This free program, organized by The Rolling Scopes community
  since 2013, is open to everyone regardless of age, profession, or
  location. Our mentors are experienced developers from various
  countries and companies. RS School played a pivotal role in our
  learning and growth in this field. If youre looking to enhance your
  frontend development skills too, we highly recommend exploring RS
  School.`,
  alt: 'rss icon',
  link: 'https://rs.school/',
};

export const ABOUT_TEAM: AboutTeam[] = [
  {
    name: 'Katsiaryna Mysliuchyk',
    position: 'Frontend Developer, Team Lead',
    id: 1,
  },
  {
    name: 'Halina Pishchalo',
    position: 'Frontend Developer',
    id: 2,
  },
  {
    name: 'Taras Kazymir',
    position: 'Frontend Developer',
    id: 3,
  },
];
