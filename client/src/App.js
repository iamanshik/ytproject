import React from 'react'
import Navbar from './components/navbar/Navbar'
import ContextFunc from './context/Context'
import Body from './components/body/Body'
import Layout from './components/Studio/Layout'
import Upload from './components/Studio/Upload'
import SignIn from './components/signInUp/SignIn'
import SignUp from './components/signInUp/SignUp'
export default function App() {  
  return (
    <>
    <ContextFunc.ContextFunc>
      {/* <Navbar/> */}
      <Upload/>
      <Layout/>
      {/* <Body/> */}
    {/* <SignIn/> */}
    {/* <SignUp/> */}
    </ContextFunc.ContextFunc>
    </>
  )
}
 