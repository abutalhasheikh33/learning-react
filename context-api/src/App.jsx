
import './App.css'
import UserContext from './context/UserContext/context'
import Form from './components/Form/Form'
import Show from './components/Show/Show'
import UserContextProvider from './context/UserContext/provider'

function App() {
  
  return (
   <UserContextProvider>
    <h1>Context api with Chai</h1>
    <Form />
    <Show />
   </UserContextProvider>
  )
}

export default App
