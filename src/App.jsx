import { Hello } from "./components/Hello"
import { useState } from "react"

function App() {
  const [userState, setUserState] = useState(false)
  const [username, setUsername] = useState("Luis")

  return <Hello isLogged={userState} username={username} />
}

export default App
