import { useState, useEffect } from 'react'

interface IUser {
  name: string
  email: string
}

export default function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<IUser | null>(null)

  // const API_URL = import.meta.env.VITE_API_URL

  // useEffect(() => {
  //   fetch(`${API_URL}/users`)
  //   .then((res) => res.json())
  //   .then((data) => setUsers(data))
  // }, [])

  // useEffect(() => {
  //   fetch(`${API_URL}/users/${userId}`)    
  //     .then((res) => res.json())
  //     .then((data) => setUser(data))
  // }, [userId])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [userId])
  

  if (!user) return <p>Loading...</p>

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}