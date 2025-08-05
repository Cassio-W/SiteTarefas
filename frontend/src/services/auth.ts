import { api } from "./api";

// type LoginInput = {
//   email: string,
//   password: string
// }

export async function login(email: string, password: string) {
  return await api.post('/auth/login', {
    email,
    password, 
  })
}

export async function register(username: string, email: string, password: string) {
  try {
    return await api.post('/users', {
      username,
      email,
      password,
    })
  } catch (err) {
    console.log('Register Error'); 
  }
  
}

export async function setUserOnLocalStorage(response: any) {
  console.log(typeof response);
  
  const loginInfo = response.data;
  const token = loginInfo.token;
  const user = {
    username: loginInfo.username,
    email: loginInfo.email
  }
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));

  return token;
}