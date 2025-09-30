import { useState, useEffect } from 'react'
import { apiService } from '../services/api'

interface User {
  id: number
  name: string
  email: string
}

export function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newUser, setNewUser] = useState({ name: '', email: '' })

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      setLoading(true)
      const data = await apiService.getUsers()
      setUsers(data)
      setError(null)
    } catch (err) {
      setError('Failed to load users')
      console.error('Failed to load users:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newUser.name || !newUser.email) return

    try {
      await apiService.createUser(newUser)
      setNewUser({ name: '', email: '' })
      loadUsers() // Reload users
    } catch (err) {
      setError('Failed to create user')
      console.error('Failed to create user:', err)
    }
  }

  return (
    <div className="card">
      <h1>User Management</h1>
      
      {error && <div className="error">{error}</div>}

      <div className="add-user">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              style={{ 
                padding: '0.5rem', 
                marginRight: '1rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc',
                width: '200px'
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              style={{ 
                padding: '0.5rem', 
                marginRight: '1rem', 
                borderRadius: '4px', 
                border: '1px solid #ccc',
                width: '200px'
              }}
            />
            <button type="submit" className="btn">Add User</button>
          </div>
        </form>
      </div>

      <div className="users-list">
        <h2>Users ({users.length})</h2>
        {loading && <div className="loading">Loading users...</div>}
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
