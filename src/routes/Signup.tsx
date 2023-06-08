import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { DefaultLayout } from '../layout/DefaultLayout'
import { AuthResponseError } from '../types/types'
import { API_URL } from './../auth/constants'

export const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [errorResponse, setErrorResponse] = useState('')

  const auth = useAuth()
  const goTo = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, password })
      })

      if (response.ok) {
        console.log('User created successfully')
        setErrorResponse('')
        goTo('/')
      } else {
        console.log('Something went wrong')
        const json = (await response.json()) as AuthResponseError
        setErrorResponse(json.body.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (auth.isAuthenticated) {
    return <Navigate to='/dashboard' />
  }

  return (
    <DefaultLayout>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Signup</h1>
        {!!errorResponse && <p className='errorMessage'>{errorResponse}</p>}
        <label>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <label>Username</label>
        <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Create user</button>
      </form>
    </DefaultLayout>
  )
}
