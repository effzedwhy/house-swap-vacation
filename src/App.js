import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { CSSReset } from '@chakra-ui/react'
import SubmitListing from './Components/Listings/SubmitListing'
import Login from './Components/Profile/Login'
import SignUp from './Components/Profile/SignUp'
import Home from './Pages/Home'
import Layout from './Components/UI/Layout'
import ListingsList from './Components/Listings/ListingsList'
import MyAccount from './Components/Profile/MyAccount'
import Account from './Pages/Account'

function App () {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className='App'>
      <CSSReset />{' '}
      <Switch>
        <Layout>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/listings'>
            <ListingsList />
          </Route>
          <Route path='/submit-listing'>
            <SubmitListing />
          </Route>
          <Route path='/my-account'>
            <MyAccount />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
        </Layout>
      </Switch>
    </div>
  )
}

export default App
