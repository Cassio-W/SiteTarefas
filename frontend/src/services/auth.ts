import axios from "axios";
import { api } from "./api";

// type LoginInput = {
//   email: string,
//   password: string
// }

export async function login(email: string, password: string) {
  try {
    const data = await api.post('/auth/login', {
      email,
      password, 
    })

    return {
      success: true,
      data,
      message: ""
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { success: false, message:
          (error.response?.data as { message?: string })?.message ??
          "Login Error",
      };
    }
    return { success: false, message: "Unexpected Error" };
  }
  
}

export async function register(username: string, email: string, password: string) {
  try {
    const data = await api.post('/users', {
      username,
      email,
      password,
    })

    return {
      success: true,
      data,
      message: ""
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return { success: false, message:
          (error.response?.data as { message?: string })?.message ??
          "Register Error",
      };
    }
    return { success: false, message: "Unexpected Error" };
  }
  
}

export async function setUserOnLocalStorage(response: any) {  
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