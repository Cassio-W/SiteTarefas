import axios from "axios";
import { api } from "./api";
import type { ResponseType } from "../types/type";

// type LoginInput = {
//   email: string,
//   password: string
// }

export async function login(email: string, password: string) {
  try {
    const response = await api.post('/auth/login', {
      email,
      password, 
    })

    const data = response.data;

    return {
      success: true,
      data,
      message: ""
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { success: false, message:
          // (error.response?.data as { message?: string })?.message ??
          // "Login Error",
          "Credenciais Inválidas"
      };
    }
    return { success: false, message: "Unexpected Error" };
  }
  
}

export async function register(username: string, email: string, password: string) {
  try {
    const response = await api.post('/users', {
      username,
      email,
      password,
    })

    const data = response.data;

    return {
      success: true,
      data,
      message: ""
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { success: false, message:
          // (error.response?.data as { message?: string })?.message ??
          // "Register Error",
          "Credenciais Inválidas"
      };
    }
    return { success: false, message: "Unexpected Error" };
  }
  
}

export async function setUserOnLocalStorage(response: ResponseType) {  
  const loginInfo = response.data;
  if (!loginInfo) return;

  const token = loginInfo.token;
  const user = {
    username: loginInfo.username,
    email: loginInfo.email
  }
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));

  return token;
}