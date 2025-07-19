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
  return await api.post('/users', {
    username,
    email,
    password, 
  })
}