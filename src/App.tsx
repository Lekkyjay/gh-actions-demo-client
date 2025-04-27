import Greeting from './components/Greeting'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <>
      <Greeting name={"Lekky"} />
      <Counter />
      <UserProfile userId={4} />
    </>
  )
}

export default App
