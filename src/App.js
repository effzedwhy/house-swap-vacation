import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { CSSReset } from '@chakra-ui/react'
import SubmitListing from './Components/Listings/SubmitListing'
import Authentication from './Components/Profile/Authentication'
import Home from './Pages/Home'
import Layout from './Components/UI/Layout'
import ListingsList from './Components/Listings/ListingsList'
import MyAccount from './Components/Profile/MyAccount'
import AuthContext from './Store/authContext'

function App () {
  return (
    <AuthContext.Provider
      value={{
        isLogggedIn: false,
        token: ''
      }}
    >
      <div className='App'>
        <CSSReset />
        <Switch>
          <Layout>
            <Route path='/authentication'>
              <Authentication />
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
            <Route path='/' exact>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' exact>
              <Home />
            </Route>
          </Layout>
        </Switch>
      </div>
    </AuthContext.Provider>
  )
}

export default App
