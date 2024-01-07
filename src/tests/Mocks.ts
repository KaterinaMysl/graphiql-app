import { Token } from '../utils/types';
import {
  LowercaseLetterPattern,
  MinPasswordLenght,
  NumberPattern,
  SpecialSymbolPattern,
  UppercaseLetterPattern,
  emailPattern,
} from '../validation/constants';

export const fakeAccessToken =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhM2JkODk4ZGE1MGE4OWViOWUxY2YwYjdhN2VmZTM1OTNkNDEwNjgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiaHAgJiBqcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKTXR2V19Qb2NfRTVBNTBOeXQwX0tZY0RYT1daTk4wOG1SRHd6aXBleTJ4Xzg9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZ3JhcGhpcWwtYXV0aC1mMWZkMSIsImF1ZCI6ImdyYXBoaXFsLWF1dGgtZjFmZDEiLCJhdXRoX3RpbWUiOjE3MDIyMjM5NDMsInVzZXJfaWQiOiI4S2RGbzlXZTRDWU5CSFlGa244V25NZkFEVkozIiwic3ViIjoiOEtkRm85V2U0Q1lOQkhZRmtuOFduTWZBRFZKMyIsImlhdCI6MTcwMjIyMzk0MywiZXhwIjoxNzAyMjI3NTQzLCJlbWFpbCI6ImdhbHVuaWtpcHBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTYxNjYyOTM2MTY3NjA2NDc1ODMiXSwiZW1haWwiOlsiZ2FsdW5pa2lwcEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.HlelyGXAtnb9S8ryQjJFIsLG-47hOompuzk3o8Ga5wKJLBBcQQ15u3SO6N2fxJ0UB-ZoVL92_k_DBDdyV6xNVYnxOqCzw50P-ZQ64S1_lg0FSE8alpW6XzaPP3snOPvBQGvL196h3Q8FYejk-MvkGI0Q4U3IsL8ib845paey8bm_y8lv5f_usTJb6b89gmpN4AlA07-h7NLMHVJrb1e-JgghBFbuiR6Vv0AgsThsf6NrFJFGLQbJmX5-gamgDRid1hTMe4UhKq-KdaPB5ISHY6HIC_F5DG3JRKrGG9sqo3vUPttvcCBovxIXuDfNntYW_iAtSoKiG2TTtYRhAKzT0A';

export const fakeTokenExpiredTime = 'Sun, 10 Dec 2021 16:59:03 GMT';
export const tokenNotExpiredTime = new Date(Date.now() + 60 * 60).toString();

export const fakeExpiredToken: Token = {
  accessToken: fakeAccessToken,
  expirationTime: fakeTokenExpiredTime,
};

export const fakeUnvalidToken: Token = {
  accessToken: '',
  expirationTime: tokenNotExpiredTime,
};

export const fakeNotExpiredToken: Token = {
  accessToken: fakeAccessToken,
  expirationTime: tokenNotExpiredTime,
};

export const passwordMock = 'password';
export const mockPasswords = {
  poor: 'pass',
  medium: 'password123',
  strong: 'Strongpassword123!',
};
const { poor, medium, strong } = mockPasswords;
const twoMatchedRequirements = passwordMock;
const fourMatchedRequirements = `Strong${medium}`;
export const mockPaswordMatchedRequirements = [
  poor,
  twoMatchedRequirements,
  medium,
  fourMatchedRequirements,
  strong,
];

export const validatePatternInfoMocks = {
  Email: {
    pattern: emailPattern,
    validString: 'some@email.com',
    notValidString: 'bad@email',
  },
  specialSymbol: {
    pattern: SpecialSymbolPattern,
    validString: '!#%@0jkfwe',
    notValidString: passwordMock,
  },
  UppercaseLetter: {
    pattern: UppercaseLetterPattern,
    validString: 'Password',
    notValidString: passwordMock,
  },
  LowercaseLetter: {
    pattern: LowercaseLetterPattern,
    validString: passwordMock,
    notValidString: '123',
  },
  Number: {
    pattern: NumberPattern,
    validString: '123k',
    notValidString: passwordMock,
  },
  MinPasswordLenght: {
    pattern: MinPasswordLenght,
    validString: passwordMock,
    notValidString: passwordMock[0],
  },
};

export const mockApiUrl = 'https://rickandmortyapi.com/graphql';
export const mockApiArrResults = {
  data: {
    characters: {
      results: [
        {
          id: '1',
          name: 'Rick Sanchez',
        },
        {
          id: '2',
          name: 'Morty Smith',
        },
        {
          id: '3',
          name: 'Summer Smith',
        },
        {
          id: '4',
          name: 'Beth Smith',
        },
        {
          id: '5',
          name: 'Jerry Smith',
        },
        {
          id: '6',
          name: 'Abadango Cluster Princess',
        },
        {
          id: '7',
          name: 'Abradolf Lincler',
        },
        {
          id: '8',
          name: 'Adjudicator Rick',
        },
        {
          id: '9',
          name: 'Agency Director',
        },
        {
          id: '10',
          name: 'Alan Rails',
        },
        {
          id: '11',
          name: 'Albert Einstein',
        },
        {
          id: '12',
          name: 'Alexander',
        },
        {
          id: '13',
          name: 'Alien Googah',
        },
        {
          id: '14',
          name: 'Alien Morty',
        },
        {
          id: '15',
          name: 'Alien Rick',
        },
        {
          id: '16',
          name: 'Amish Cyborg',
        },
        {
          id: '17',
          name: 'Annie',
        },
        {
          id: '18',
          name: 'Antenna Morty',
        },
        {
          id: '19',
          name: 'Antenna Rick',
        },
        {
          id: '20',
          name: 'Ants in my Eyes Johnson',
        },
      ],
    },
  },
};
export const mockArrQuery = `query {
  characters {
    results{
      id
      name
    }
  }
}`;
export const mockArrQueryWithVariables = `query($page:Int) {
  characters(page:$page) {
    results{
      id
      name
    }
  }
}`;
export const mockVariables = JSON.stringify({ page: 10 });
export const mockApiArrResultsByVariables = {
  data: {
    characters: {
      results: [
        {
          id: '181',
          name: "Jessica's Friend",
        },
        {
          id: '182',
          name: 'Jim',
        },
        {
          id: '183',
          name: 'Johnny Depp',
        },
        {
          id: '184',
          name: 'Jon',
        },
        {
          id: '185',
          name: 'Joseph Eli Lipkip',
        },
        {
          id: '186',
          name: 'Joyce Smith',
        },
        {
          id: '187',
          name: 'Juggling Rick',
        },
        {
          id: '188',
          name: 'Karen Entity',
        },
        {
          id: '189',
          name: 'Katarina',
        },
        {
          id: '190',
          name: 'Keara',
        },
        {
          id: '191',
          name: 'Kevin',
        },
        {
          id: '192',
          name: 'King Flippy Nips',
        },
        {
          id: '193',
          name: 'King Jellybean',
        },
        {
          id: '194',
          name: 'Kozbian',
        },
        {
          id: '195',
          name: 'Kristen Stewart',
        },
        {
          id: '196',
          name: 'Krombopulos Michael',
        },
        {
          id: '197',
          name: 'Kyle',
        },
        {
          id: '198',
          name: 'Lady Katana',
        },
        {
          id: '199',
          name: 'Larva Alien',
        },
        {
          id: '200',
          name: 'Lawyer Morty',
        },
      ],
    },
  },
};

export const mockHeaders = JSON.stringify(
  'Content-Type: text/html; charset=utf-8'
);
