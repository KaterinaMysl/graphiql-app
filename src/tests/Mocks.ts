import { Token } from '../utils/types';

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