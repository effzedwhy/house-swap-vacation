import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSReset } from '@chakra-ui/react'
import SubmitListing from './Components/Listings/SubmitListing'
import Authentication from './Components/Profile/Authentication'
import Home from './Pages/Home'
import Layout from './Components/UI/Layout'
import ListingsList from './Components/Listings/ListingsList'
import MyAccount from './Components/Profile/MyAccount'
import { AuthProvider } from './Store/authContext'
import PrivateRoute from './Components/Profile/PrivateRoute'
import ForgottenPassword from './Components/Profile/ForgottenPassword'

function App () {
  return (
    <AuthProvider>
      <div className='App'>
        <CSSReset />
        <Switch>
          <Layout>
            <Route path='/authentication' component={Authentication} />

            <Route path='/listings' component={ListingsList} />

            <PrivateRoute path='/submit-listing' component={SubmitListing} />

            <PrivateRoute path='/my-account' component={MyAccount} />

            <Route exact path='/' component={Home} />

            <Route path='/home' component={Home} exact />
            
            <Route path='/forgotten-password' component={ForgottenPassword} />
          </Layout>
        </Switch>
      </div>
    </AuthProvider>
  )
}

export default App
