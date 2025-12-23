import './App.css'
import Filters from './component/Filters'
import AuthDemo from './component/Login'
import ThemeToggle from './component/ThemeToggle'

function App() {
  return (
    <>
      <h1>Web storage -lab</h1>
      <ThemeToggle/>
      <Filters/>
      <AuthDemo/>
    </>
  )
}

export default App
