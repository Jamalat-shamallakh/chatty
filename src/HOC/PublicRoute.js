import React ,{ Component } from 'react';
import  { Redirect, Route} from 'react-router-dom'

const PublicRoute = ({Component , authenticated , ...rest}) => {
    return (
       <Route 
       {...rest}
       render={props => authenticated === false ? <Component {...props}/> 
        : <Redirect  to='/chat'/>

       }
       >

       </Route>
    )
}

export default PublicRoute
