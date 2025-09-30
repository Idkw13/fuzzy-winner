import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface User {
  id: number
  name: string
  email: string
}

export interface HealthResponse {
  status: string
  timestamp: string
  service: string
}

export const apiService = {
  async getHealth(): Promise<HealthResponse> {
    const response = await api.get('/health')
    return response.data
  },

  async getUsers(): Promise<User[]> {
    const response = await api.get('/api/users')
    return response.data
  },

  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await api.post('/api/users', user)
    return response.data
  },

  async getUser(id: number): Promise<User> {
    const response = await api.get(`/api/users/${id}`)
    return response.data
  },
}
