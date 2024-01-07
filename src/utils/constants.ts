import { Token } from './types';
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

export const initialApi = 'https://rickandmortyapi.com/graphql';

export const signInFirebaseErrors = {
  invalidEmail: 'Firebase: Error (auth/invalid-email).',
  userDisabled: 'Firebase: Error (auth/user-disabled).',
  userNotFound: 'Firebase: Error (auth/user-not-found).',
  wrongPassword: 'Firebase: Error (auth/wrong-password).',
};
const translatedSignInFirebaseErrors = {
  en: {
    [signInFirebaseErrors.invalidEmail]: signInFirebaseErrors.invalidEmail,
    [signInFirebaseErrors.userDisabled]: signInFirebaseErrors.userDisabled,
    [signInFirebaseErrors.userNotFound]: signInFirebaseErrors.userNotFound,
    [signInFirebaseErrors.wrongPassword]: signInFirebaseErrors.wrongPassword,
  },
  ru: {
    [signInFirebaseErrors.invalidEmail]: 'Ошибка Firebase: неправильный email',
    [signInFirebaseErrors.userDisabled]:
      'Ошибка Firebase: пользователь заблокирован',
    [signInFirebaseErrors.userNotFound]:
      'Ошибка Firebase: пользователь не существует',
    [signInFirebaseErrors.wrongPassword]:
      'Ошибка Firebase: неправильный пароль',
  },
};

export const signUpFirebaseErrors = {
  emailAlreadyInUse: 'Firebase: Error (auth/email-already-in-use).',
  invalidEmail: 'Firebase: Error (auth/invalid-email).',
  operationNotAllowed: 'Firebase: Error (auth/operation-not-allowed).',
  weakPassword: 'Firebase: Error (auth/weak-password).',
};

const translatedsignUpFirebaseErrors = {
  en: {
    [signUpFirebaseErrors.emailAlreadyInUse]:
      signUpFirebaseErrors.emailAlreadyInUse,
    [signUpFirebaseErrors.invalidEmail]: signUpFirebaseErrors.invalidEmail,
    [signUpFirebaseErrors.operationNotAllowed]:
      signUpFirebaseErrors.operationNotAllowed,
    [signUpFirebaseErrors.weakPassword]: signUpFirebaseErrors.weakPassword,
  },
  ru: {
    [signUpFirebaseErrors.emailAlreadyInUse]:
      'Ошибка Firebase: email уже используется',
    [signUpFirebaseErrors.invalidEmail]: 'Ошибка Firebase: неправильный email',
    [signUpFirebaseErrors.operationNotAllowed]:
      'Ошибка Firebase: действие запрещено',
    [signUpFirebaseErrors.weakPassword]: 'Ошибка Firebase: слабый пароль',
  },
};

export const resetFirebaseErrors = {
  invalidEmail: 'Firebase: Error (auth/invalid-email)',
  userNotFound: 'Firebase: Error (auth/user-not-found)',
  missingEmail: 'Firebase: Error (auth/missing-email).',
};

const translatedResetFirebaseErrors = {
  en: {
    [resetFirebaseErrors.invalidEmail]: resetFirebaseErrors.invalidEmail,
    [resetFirebaseErrors.userNotFound]: resetFirebaseErrors.userNotFound,
    [resetFirebaseErrors.missingEmail]: resetFirebaseErrors.missingEmail,
  },
  ru: {
    [resetFirebaseErrors.invalidEmail]: 'Ошибка Firebase: неправильный email',
    [resetFirebaseErrors.userNotFound]:
      'Ошибка Firebase: пользователь не существует',
    [resetFirebaseErrors.missingEmail]: 'Ошибка Firebase: пустой email',
  },
};

export const translations = {
  en: {
    ROUTE_PATH: {
      welcome: '/',
      graphQl: '/graphQL',
      auth: '/auth',
      login: 'signin',
      registration: 'signup',
      reset: 'reset',
      page404: '*',
    },
    LINK_NAME: {
      graphQl: 'Main Page',
      login: 'Sign In',
      registration: 'Sign Up',
      logout: 'Logout',
    },
    MAIN: {
      toggle: '',
      current: '',
    },
    SIGN_IN: {
      email: 'Email',
      password: 'Password',
      signIn: 'Sign In',
      google: 'Sign In with Google',
      forget: 'Forgot Password?',
      not: 'Do not have an account?',
      now: 'now.',
      firebaseErrors: translatedSignInFirebaseErrors.en,
    },
    SIGN_UP: {
      email: 'Email',
      password: 'Password',
      signUP: 'Sign Up',
      reset: 'Reset',
      confirm: 'Confirm password',
      strength: 'Your password strength is',
      enter: 'Enter name',
      firebaseErrors: translatedsignUpFirebaseErrors.en,
    },
    TOKEN_TITLE: 'PIX_token',
    emptyToken: {
      accessToken: '',
      expirationTime: '',
    },
    RSS_CONTENT: {
      title: 'How we managed to',
      subtitle: `We acquired valuable frontend development skills thanks to RS
        School. This free program, organized by The Rolling Scopes community
        since 2013, is open to everyone regardless of age, profession, or
        location. Our mentors are experienced developers from various
        countries and companies. RS School played a pivotal role in our
        learning and growth in this field. If you're looking to enhance your
        frontend development skills too, we highly recommend exploring RS
        School.`,
      alt: 'rss icon',
      link: 'https://rs.school/',
    },
    GraphQlPage: {
      title: 'GraphiQL Page',
      text: `Welcome to the GraphiQL page! This is where you can interact with your
      GraphQL API.`,
      apiError: 'Something wrong with the Api url or schema',
    },
    GraphQlEditor: {
      run: 'Run',
      headers: 'Headers',
      variables: 'Variables',
      queryError: 'Something wrong with the query.',
    },
    Tabs: {
      hide: 'Hide',
    },
    ERRORBOUNDARY: {
      title: 'An error occurred',
    },
    RESET: {
      cancel: 'Cancel',
      reset: 'Reset',
      email: 'Email',
      firebaseErrors: translatedResetFirebaseErrors.en,
    },
    ABOUT_PROJECT_CONTENT: {
      graphQLLink: 'GraphQL Explained in 100 Seconds',
      video:
        'https://www.youtube.com/watch?v=eIQh02xuVw4&t=2s&ab_channel=Fireship',
      title: 'About our project',
      description:
        'GraphiQL is a playground/IDE for graphQL requests. GraphiQL is an open-source tool that includes: authorization and authentication capabilities, ensuring access to the tool is restricted to authorized users; work with a user-specified open GraphQL endpoint.',
      button: 'Get started',
    },
    TEAM_CONTENT: {
      title: 'MEET OUR CREATIVE TEAM',
    },
    P404: {
      title: '404 Page Not Found',
      text: 'The page you are looking for might be in another universe.',
      link: 'Go back to the home page.',
    },
    FOOTER: {
      text: '© 2023 | All Rights Reserved',
    },
    SCHEMA: {
      character1: 'Your password must have at least 1',
      character2: 'character',
    },
    Popup: {
      about: 'About me:',
      location: 'Location:',
      education: 'Education:',
      english: 'English:',
      skills: 'Skills:',
      contributions: 'Contributions:',
    },
    ABOUT_TEAM: [
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
          avatar: avatar2,
          aboutMe: `I would like to work on React projects as a Fullstack developer and apply all my new knowledge.
             I am a highly motivated and hardworking person. 
             I can work in a team or alone, but I prefer to be in a team 
             to be able to share and gain new knowledge and become more experienced.`,
          location: 'Minsk, Belarus',
          education: 'Belarusian State University',
          english: 'B1+',
          skills:
            'HTML, CSS/SASS, JS, TS, React, Angular, NodeJS, GIT/GitHub/GitLab, VS Code, WebPack, Figma, Photoshop',
          contribution: `Halina is a lover of understanding something new, clean code and, as it turns out, tests.
          And as a result, she paid attention to firebase authorization, made a little magic with editors and enjoyed writing all kinds of tests`,
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
          contribution: `Taras - our development guru, who doesn't just create applications but crafts them with love and passion. He was our captain navigating the turbulent waters of development, and here's what he achieved: registration form, structure website, loginform - all smooth sailing! Don't forget that in challenging moments, he was always the guardian of our success, and his invaluable support was like a chocolate bar in times of hunger`,
          githubIcon: github,
          githubLink: 'https://github.com/kazymirT',
        },
      },
    ],
  },
  ru: {
    ROUTE_PATH: {
      welcome: '/',
      graphQl: '/graphQL',
      auth: '/auth',
      login: 'signin',
      registration: 'signup',
      reset: 'reset',
      page404: '*',
    },
    LINK_NAME: {
      graphQl: 'Главная',
      login: 'Войти',
      registration: 'Регистрация',
      logout: 'Выйти',
    },
    MAIN: {
      toggle: '',
      current: '',
    },
    SIGN_IN: {
      email: 'Почта',
      password: 'Пароль',
      signIn: 'Войти',
      google: 'Войти через Google',
      forget: 'Забыли пароль?',
      not: 'Еще не регистрировались?',
      now: 'сейчас.',
      firebaseErrors: translatedSignInFirebaseErrors.ru,
    },
    SIGN_UP: {
      email: 'Почта',
      password: 'Пароль',
      signUP: 'Регистрация',
      reset: 'Сбросить',
      confirm: 'Подтвердить пароль',
      strength: 'Сила вашего пароля',
      enter: 'Введите имя',
      firebaseErrors: translatedsignUpFirebaseErrors.ru,
    },
    TOKEN_TITLE: 'PIX_токен',
    emptyToken: {
      accessToken: '',
      expirationTime: '',
    },
    RSS_CONTENT: {
      title: 'Как нам удалось',
      subtitle: `Мы приобрели ценные навыки разработки фронтенда благодаря RS
        School. Эта бесплатная программа, организованная сообществом The Rolling Scopes
        с 2013 года, открыта для всех независимо от возраста, профессии или
        местоположения. Наши наставники - опытные разработчики из разных
        стран и компаний. RS School сыграла ключевую роль в нашем обучении и
        росте в этой области. Если вы тоже хотите улучшить свои
        навыки разработки фронтенда, мы настоятельно рекомендуем исследовать RS
        School.`,
      alt: 'значок rss',
      link: 'https://rs.school/',
    },
    GraphQlPage: {
      title: 'Страница GraphiQL',
      text: `Добро пожаловать на страницу GraphiQL! Здесь вы можете взаимодействовать со своими
      API GraphQL.`,
      apiError: 'Ошибка в ссылке АПИ или тексте схемы',
    },
    GraphQlEditor: {
      run: 'Пуск',
      headers: 'Заголовки',
      variables: 'Переменные',
      queryError: 'Ошибка в запросе.',
    },
    Tabs: {
      hide: 'Спрятать',
    },
    ERRORBOUNDARY: {
      title: 'Произошла ошибка',
    },
    RESET: {
      cancel: 'Отменить',
      reset: 'Сброс',
      email: 'Почта',
      firebaseErrors: translatedResetFirebaseErrors.ru,
    },
    ABOUT_PROJECT_CONTENT: {
      graphQLLink: 'GraphQL за 100 секунд',
      video:
        'https://www.youtube.com/watch?v=eIQh02xuVw4&t=2s&ab_channel=Fireship',
      title: 'О нашем проекте',
      description:
        'GraphiQL - это площадка/IDE для запросов GraphQL. GraphiQL - это открытый инструмент, который включает в себя: возможности авторизации и аутентификации, обеспечивая ограниченный доступ к инструменту только авторизованным пользователям; работа с выбранным пользователем открытым конечным пунктом GraphQL.',
      button: 'Начать',
    },
    TEAM_CONTENT: {
      title: 'ПОЗНАКОМЬТЕСЬ С НАШЕЙ ТВОРЧЕСКОЙ КОМАНДОЙ',
    },
    P404: {
      title: 'Страница 404 не найдена',
      text: 'Страница, которую вы ищете, может находиться в другой вселенной.',
      link: 'Вернитесь на главную страницу.',
    },
    FOOTER: {
      text: '© 2023 | Все права защищены',
    },
    SCHEMA: {
      character1: 'Ваш пароль должен содержать не менее 1',
      character2: 'символа',
    },
    Popup: {
      about: 'Обо мне:',
      location: 'Месторасположение:',
      education: 'Образование:',
      english: 'Английский:',
      skills: 'Навыки:',
      contributions: 'Вклад:',
    },
    ABOUT_TEAM: [
      {
        avatar: avatar3,
        name: 'Катерина Мысливчик',
        position: 'Фронтенд-разработчик, руководитель группы',
        id: 0,
        button: 'Подробнее...',
        details: {
          name: 'Катерина Мысливчик',
          avatar: Katerina,
          aboutMe: `Я хочу сменить работу на фронтенд-разработчика. Изучаю соответствующую литературу, прохожу курсы, осваиваю новые технологии, повышаю уровень английского языка. Я считаю, что если ты влюблен в свою работу, твоя цель будет достигнута с большим успехом.
          Инженерное образование и технологии BIM помогают лучше понять логику и процесс создания кода. Навыки рисования и фотографии позволяют мне лучше понять эстетическую составляющую желаемой профессии, достичь контакта с пользователем, гармонично применяя имеющийся опыт работы с цветом, пропорциями и другими инструментами.
          
          Мой путь основан на принципе: накопление новых знаний к имеющемуся опыту поможет мне в желаемой профессии.`,
          location: 'Батуми, Грузия',
          education: 'Белорусский Национальный Технический Университет',
          english: 'B1',
          skills:
            'HTML, CSS/SASS, JS, TS, React, GIT/GitHub, VS Code, WebPack, Figma, Photoshop',
          contribution: `Катерина — наш суперразработчик, взявший на себя роль главного архитектора в мире приложений. Она не просто пишет код; она творит шедевры! Репозиторий, главная страница, маршрутизация — все это ее дело рук. Но не думайте, что она скучная – она добавила массу креатива и анимации, чтобы сделать наш проект не только функциональным, но и красивым, как восход солнца. И, кстати, Катя — наш главный решатель головоломок, и члены команды всегда могут положиться на ее умные советы.`,
          githubIcon: github,
          githubLink: 'https://github.com/KaterinaMysl',
        },
      },
      {
        avatar: avatar2,
        name: 'Галина Пищало',
        position: 'Фронтенд-разработчик',
        id: 1,
        button: 'Подробнее...',
        details: {
          name: 'Галина Пищало',
          avatar: avatar2,
          aboutMe: `Я бы хотела работать с Реакт проектами в качестве фулстек разработчика и использовать мои новые приобретенные знания за последнее время.
          Я высоко мотивированная и трудолюбивая. 
          Я могу работать как в команде так и в одиночку, но все-таки предпочитаю командную работу, 
          где я могу делиться знаниями и получать новые от своих коллег, приобретая бесценный опыт.`,
          location: 'Минск, Беларусь',
          education: 'Белорусский государственный университет',
          english: 'B1+',
          skills:
            'HTML, CSS/SASS, JS, TS, React, Angular, NodeJS, GIT/GitHub/GitLab, VS Code, WebPack, Figma, Photoshop',
          contribution: `Галина любительница разобраться в чем-то новеньком, чистого кода и как оказалось тестов. 
            И как итог - уделила внимание firebase авторизации, немного поколдовала с редакторами и получала удовольствие от написания всевозможных тестов`,
          githubIcon: github,
          githubLink: 'https://github.com/halinapp',
        },
      },
      {
        avatar: avatar1,
        name: 'Тарас Казимир',
        position: 'Фронтенд-разработчик',
        id: 2,
        button: 'Подробнее...',
        details: {
          name: 'Тарас Казимир',
          avatar: Taras,
          aboutMe: `Я высокомотивированный и внимательный к деталям человек со страстью к достижению успеха. Обладая отличными коммуникативными навыками и навыками межличностного общения, я могу эффективно работать как самостоятельно, так и в команде. Я быстро обучаюсь и умею решать проблемы, поэтому я всегда готов решать новые задачи и развивать свои навыки. В целом, я стремлюсь выполнять высококачественную работу и способствовать успеху любого проекта или организации, частью которой я являюсь.`,
          location: 'Львов, Украина',
          education: 'Подольский государственный университет',
          english: 'A2',
          skills:
            'HTML, CSS/SASS, JS, TS, React, GIT/GitHub, VS Code, WebPack, Figma',
          contribution: `Тарас — наш гуру разработки, который не просто создает приложения, а делает их с любовью и страстью. Он был нашим капитаном, путешествующим по бурным водам развития, и вот чего он добился: регистрационная форма, структура сайта, логин — все гладко! Не забывайте, что в трудные минуты он всегда был хранителем нашего успеха, а его неоценимая поддержка была как шоколадка в голодное время.`,
          githubIcon: github,
          githubLink: 'https://github.com/kazymirT',
        },
      },
    ],
  },
};

export const footerAltTexts = {
  rss: 'rss logo',
  github: 'github logo',
};

export const ErrorPageMessage = 'Error Page/ Страница с ошибкой';
