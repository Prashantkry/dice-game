
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Layout from './Layout'
import { Plans } from './pages/Plans'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Game from './pages/Game'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/game' element={<Game />}></Route>
          <Route path='/Plans' element={<Plans />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
