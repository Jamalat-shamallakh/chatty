import React , { Component } from 'react';
import { Route , Redirect } from 'react-router-dom'

const PrivateRoute = ({Component ,authenticated , ...rest }) => {
    return (
       <Route 
       
          { ...rest}
           render ={(props) => authenticated ===true ? <Component {...props}/> 
            : <Redirect 
            to ={{pathname:'/login',state:{from :props.location}}}
            />}
       
       >

       </Route>
    )
}

export default PrivateRoute
