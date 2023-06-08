export interface AuthResponse {
  body: {
    user: User
    accessToken: string
    refreshToken: string
  }
}

export interface AuthResponseError {
  body: {
    error: string
  }
}

export interface User {
  id: number
  name: string
  username: string
}
