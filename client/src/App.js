import React from 'react'
import Navbar from './components/navbar/Navbar'
import ContextFunc from './context/Context'
import Body from './components/body/Body'
import SignIn from './components/signInUp/SignIn'
import SignUp from './components/signInUp/SignUp'
export default function App() {  
  return (
    <>
    <ContextFunc.ContextFunc>
    <SignIn/>
    <SignUp/>
    </ContextFunc.ContextFunc>
    </>
  )
}
