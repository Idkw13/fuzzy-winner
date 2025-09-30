import { useState, useEffect } from 'react'
import { apiService } from '../services/api'

export function Home() {
  const [health, setHealth] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await apiService.getHealth()
        setHealth(data)
      } catch (err) {
        setError('Failed to connect to API')
        console.error('Health check failed:', err)
      } finally {
        setLoading(false)
      }
    }

    checkHealth()
  }, [])

  return (
    <div className="card">
      <h1>Welcome to Fuzzy Winner! 🎉</h1>
      <p>This is a React client application connected to our Go API.</p>
      
      <div className="api-status">
        <h2>API Status</h2>
        {loading && <div className="loading">Checking API health...</div>}
        {error && <div className="error">{error}</div>}
        {health && (
          <div className="health-info">
            <p><strong>Status:</strong> {health.status}</p>
            <p><strong>Service:</strong> {health.service}</p>
            <p><strong>Last Check:</strong> {new Date(health.timestamp).toLocaleString()}</p>
          </div>
        )}
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>✅ React 18 with TypeScript</li>
          <li>✅ Vite for fast development</li>
          <li>✅ React Router for navigation</li>
          <li>✅ Axios for API calls</li>
          <li>✅ Modern CSS with gradients</li>
          <li>✅ Connected to Go API</li>
        </ul>
      </div>
    </div>
  )
}
