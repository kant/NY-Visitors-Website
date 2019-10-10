/* 3rd party */
import React from 'react'
import { withRouter} from 'react-router-dom'

/* 1st party */
import { LOCAL_STORAGE_AUTH_KEY, BASE_API_URL } from '../utils'

export default withRouter(function Authenticated({ history }) {
  
  function authenticate() {
    if (window.location.search.length && window.location.search.indexOf('id_token') >= 0) {
      let authParms = window.location.search.split('')
      authParms = authParms.splice(1).join('')

      fetch(`${BASE_API_URL}/auth/google/callback?${authParms}`)
        .then(response => response.json())
        .then(parsedResponse => {
          window.localStorage && window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(parsedResponse))
          history.push('/#in-studio')
        })
        .catch(e => console.log('Failed - ', e))
    } else {
      console.log('Redirecting home. Why are you even here?')
      history.push('/')
    }
  }

  authenticate()

  return (
    <div className="w-100"> 
      <h1 className="serif pa4 f-subheadline self-center">
        Logging you in ...
      </h1>
    </div>
  )
})