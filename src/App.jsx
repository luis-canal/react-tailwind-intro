import { Hello } from "./components/Hello"
import { useState } from "react"

function App() {
  const [userState, setUserState] = useState(false)
  const [username, setUsername] = useState("Luis")

  setTimeout(() => {setUserState(true)}, 5000)      // Simula um login após 5 segundos

  return <Hello isLogged={userState} username={username} /> 
}

export default App 
