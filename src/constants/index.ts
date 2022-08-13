// @ts-nocheck

// Current DB (don't change or remove) *
// export const currentDB = 'localhost'; // *
export const currentDB = 'heroku'; // *

export const URI =
  'postgres://pmuduyjxapveez:d875bd3154345450eda5eab5f83a3164c5c766f14f5674e4c168e2ce062e7c32@ec2-52-51-3-22.eu-west-1.compute.amazonaws.com:5432/dbfn33l6ik38n2';

export const BASE_URL =
  currentDB === 'localhost'
    ? 'http://localhost:8823/aloha/la/user'
    : currentDB === 'heroku' &&
      'https://liqiudaccess-merchant-backend.herokuapp.com/aloha/la/user';
