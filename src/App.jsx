import { Hello } from "./components/Hello"
import { useState } from "react"

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [username, setUsername] = useState("Luis")

  return <Hello isLogged={isLogged} username={username} />
}

export default App
