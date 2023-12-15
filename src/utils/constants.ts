import { AboutTeamType, Token } from './types';
import avatar1 from '../assets/img/jpg/portrait1.jpg';
import avatar2 from '../assets/img/jpg/portrait2.jpg';
import avatar3 from '../assets/img/jpg/portrait3.jpg';
import Katerina from '../assets/img/jpg/Katerina.jpg';
import Taras from '../assets/img/jpg/Taras.jpg';
import github from '../assets/img/svg/github-mark.svg';

export const ROUTE_PATH = {
  welcome: '/',
  graphQl: '/graphQL',
  auth: '/auth',
  login: 'signin',
  registration: 'signup',
  reset: 'reset',
  page404: '*',
};

export const LINK_NAME = {
  graphQl: 'GraphQl',
  login: 'Sign In',
  registration: 'Sign Up',
};

export const TOKEN_TITLE = 'PIX_token';
export const emptyToken: Token = {
  accessToken: '',
  expirationTime: '',
};

export const HEADER = {
  link: '/',
  alt: 'logo',
  title: 'GraphiQL',
};

export const SCROLL_THRESHOLD = 20;

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

export const ABOUT_PROJECT_CONTENT = {
  video: 'https://www.youtube.com/watch?v=eIQh02xuVw4&t=2s&ab_channel=Fireship',
  title: 'About our project',
  description:
    'GraphiQL is a playground/IDE for graphQL requests. GraphiQL is an open-source tool that include: authorization and authentication capabilities, ensuring access to the tool is restricted to authorized users; work with a user-specified open GraphQL endpoint.',
};

export const ABOUT_TEAM: AboutTeamType[] = [
  {
    avatar: avatar3,
    name: 'Katsiaryna Mysliuchyk',
    position: 'Frontend Developer, Team Lead',
    id: 0,
    button: 'More...',
    details: {
      name: 'Katsiaryna Mysliuchyk',
      avatar: Katerina,
      aboutMe: `I want to change my job to a Frontend Developer. I study the relevant literature, take courses, master new technologies, improve the level of English. I believe that if you are in love with your work, your goal is achieved with great success.

      Engineering education and BIM technology help in better understanding of the logic and process of creating code. Drawing and photography skills allow me to better understand the aesthetic component of the desired profession, to achieve contact with the user, harmoniously applying the existing experience with color, proportions and other tools.
      
      My path is based on the principle: the accumulation of new knowledge to the existing experience will help me in the desired profession.`,
      location: 'Batumi, Georgia',
      education: 'Belarusian National Technical University',
      english: 'B1',
      skills:
        'HTML, CSS/SASS, JS, TS, React, GIT/GitHub, VS Code, WebPack, Figma, Photoshop',
      contribution: `Katerina - our super developer, who took on the role of the chief architect in the world of applications. She doesn't just code; she creates masterpieces! The repository, the main page, routing - all of it is her handiwork. But don't think she's boring – she added a ton of creativity and animations to make our project not only functional but also as beautiful as a sunrise. And, by the way, Katya is our chief puzzle solver, and team members can always rely on her smart advice.`,
      githubIcon: github,
      githubLink: 'https://github.com/KaterinaMysl',
    },
  },
  {
    avatar: avatar2,
    name: 'Halina Pishchalo',
    position: 'Frontend Developer',
    id: 1,
    button: 'More...',
    details: {
      name: 'Halina Pishchalo',
      avatar: '',
      aboutMe: ``,
      location: '',
      education: '',
      english: '',
      skills:
        'HTML, CSS/SASS, JS, TS, React, GIT/GitHub, VS Code, WebPack, Figma, Photoshop',
      contribution: ``,
      githubIcon: github,
      githubLink: 'https://github.com/halinapp',
    },
  },
  {
    avatar: avatar1,
    name: 'Taras Kazymir',
    position: 'Frontend Developer',
    id: 2,
    button: 'More...',
    details: {
      name: 'Taras Kazymir',
      avatar: Taras,
      aboutMe: `I am a highly motivated and detail-oriented individual with a passion for achieving success. With excellent communication and interpersonal skills, I am able to work effectively both independently and as part of a team. As a quick learner and problem solver, I am always eager to take on new challenges and develop my skillset. Overall, I am committed to delivering high-quality work and contributing to the success of any project or organization I am a part of.`,
      location: 'Lviv, Ukraine',
      education: 'Podillia State University',
      english: 'A2',
      skills:
        'HTML, CSS/SASS, JS, TS, React, GIT/GitHub, VS Code, WebPack, Figma',
      contribution: `Taras - our development guru, who doesn't just create applications but crafts them with love and passion. He was our captain navigating the turbulent waters of development, and here's what he achieved: registration form, product catalog, shopping cart - all smooth sailing! Don't forget that in challenging moments, he was always the guardian of our success, and his invaluable support was like a chocolate bar in times of hunger`,
      githubIcon: github,
      githubLink: 'https://github.com/kazymirT',
    },
  },
];
