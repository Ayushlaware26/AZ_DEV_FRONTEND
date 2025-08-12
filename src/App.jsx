import LoginButton from './utils/LoginButton'
import LogoutButton from './utils/LogoutButton'
import Profile from './utils/Profile'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Auth0 + React (Vite) Example</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  )
}

export default App
