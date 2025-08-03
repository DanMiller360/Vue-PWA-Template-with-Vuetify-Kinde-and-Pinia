import axios from 'axios';

const bffClient = axios.create({
  baseURL: import.meta.env.VITE_BFF_URL,
});

export function setAuthToken(token: string | undefined) {
  if (token) {
    bffClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete bffClient.defaults.headers.common['Authorization'];
  }
}

export default bffClient;