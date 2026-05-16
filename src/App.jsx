import { Hello } from "./components/Hello"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [userState, setUserState] = useState(false)
  const [username, setUsername] = useState("Luis")


  useEffect(() => {console.log("O componente foi montado")}, []);
  useEffect(() => {console.log("O estado do usuário mudou para: ", userState)}, [userState]);

  //setTimeout(() => {setUserState(true)}, 5000)      // Simula um login após 5 segundos

  return <Hello isLogged={userState} username={username} setUserState={setUserState} />
}

export default App 
